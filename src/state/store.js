/**
 * CampusLoop Reactive State Store
 * Handles persistent state, circular coin economy, multi-role auth, and marketplace transactions.
 */

import { USERS, INITIAL_ITEMS, INITIAL_ORDERS, INITIAL_MESSAGES, PERKS } from '../data/initialState.js';

const STORAGE_KEY = 'campusloop_state_v2';
const LEGACY_KEY = 'loop-campus-v1';

class Store {
  constructor() {
    this.listeners = new Set();
    this.state = this.loadInitialState();
  }

  loadInitialState() {
    const defaultState = {
      theme: 'system',
      session: 'student', // Default logged-in as Alex Morgan for smooth live interaction
      users: { ...USERS },
      items: [...INITIAL_ITEMS],
      orders: [...INITIAL_ORDERS],
      messages: { ...INITIAL_MESSAGES },
      perks: [...PERKS],
      redeemedPerks: [],
      nextItemId: 12,
      ui: {
        view: 'market', // 'market' | 'profile' | 'perks'
        profileTab: 'orders', // 'orders' | 'listings' | 'wallet' | 'queue'
        searchQuery: '',
        selectedCategory: 'all',
        selectedType: 'all',
        selectedSort: 'recommended',
        activeModal: null, // { name: 'checkout' | 'itemDetail' | 'list' | 'orderSuccess' | 'chat' | 'login', data: {} }
        toasts: []
      }
    };

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultState,
          ...parsed,
          ui: { ...defaultState.ui, ...parsed.ui, activeModal: null, toasts: [] }
        };
      }

      // Check legacy single-file storage migration
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy) {
        const parsedLegacy = JSON.parse(legacy);
        if (parsedLegacy && parsedLegacy.items) {
          defaultState.items = [...parsedLegacy.items, ...defaultState.items.slice(5)];
        }
      }
    } catch (err) {
      console.warn('Could not restore stored state, using defaults:', err);
    }

    return defaultState;
  }

  save() {
    try {
      const { ui, ...persistable } = this.state;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
    } catch (err) {
      console.error('Storage save error:', err);
    }
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.save();
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  // --- Auth & User Switching ---
  getCurrentUser() {
    if (!this.state.session) return null;
    return this.state.users[this.state.session] || null;
  }

  switchUser(userId) {
    if (this.state.users[userId]) {
      this.state.session = userId;
      this.addToast(`Switched account to ${this.state.users[userId].name} (${this.state.users[userId].role})`, 'success');
      this.notify();
    }
  }

  login(email, password, role) {
    const user = Object.values(this.state.users).find(
      u => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password
    );

    if (user) {
      this.state.session = user.key;
      this.closeModal();
      this.addToast(`Welcome back, ${user.name}!`, 'success');
      this.notify();
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password for demo account.' };
  }

  logout() {
    this.state.session = null;
    this.state.ui.view = 'market';
    this.addToast('Signed out successfully.', 'info');
    this.notify();
  }

  // --- Theme Management ---
  setTheme(theme) {
    this.state.theme = theme;
    this.notify();
  }

  toggleTheme() {
    const current = this.state.theme;
    let next = 'light';
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'system';
    else next = 'light';
    this.setTheme(next);
  }

  // --- Navigation & Filters ---
  setView(view, profileTab = 'orders') {
    this.state.ui.view = view;
    if (view === 'profile') {
      this.state.ui.profileTab = profileTab;
    }
    this.notify();
  }

  setProfileTab(tab) {
    this.state.ui.profileTab = tab;
    this.notify();
  }

  setSearch(query) {
    this.state.ui.searchQuery = query;
    this.notify();
  }

  setCategory(category) {
    this.state.ui.selectedCategory = category;
    this.notify();
  }

  setType(type) {
    this.state.ui.selectedType = type;
    this.notify();
  }

  setSort(sort) {
    this.state.ui.selectedSort = sort;
    this.notify();
  }

  // --- Modals ---
  openModal(name, data = {}) {
    this.state.ui.activeModal = { name, data };
    this.notify();
  }

  closeModal() {
    this.state.ui.activeModal = null;
    this.notify();
  }

  // --- Item Management ---
  listItem(itemData) {
    const user = this.getCurrentUser();
    if (!user) {
      this.openModal('login', { note: 'Please sign in to list an item.' });
      return;
    }

    const isFaculty = user.role === 'Faculty';
    const newItem = {
      id: this.state.nextItemId++,
      title: itemData.title.trim(),
      desc: itemData.desc.trim(),
      details: itemData.details?.trim() || itemData.desc.trim(),
      cat: itemData.cat,
      type: itemData.type,
      price: parseFloat(itemData.price),
      deposit: parseFloat(itemData.deposit) || 0,
      location: itemData.location || 'Central Library - Ground Floor Service Desk',
      condition: itemData.condition || 'Good',
      seller: user.name,
      sellerId: user.key,
      tier: user.tier,
      rating: user.reputation,
      reviewsCount: user.completedDeals,
      icon: itemData.icon || 'box',
      status: isFaculty ? 'live' : 'pending',
      owner: user.key,
      createdAt: new Date().toISOString()
    };

    this.state.items.unshift(newItem);
    this.closeModal();

    if (isFaculty) {
      this.addToast(`Listing "${newItem.title}" is now live on campus!`, 'success');
    } else {
      this.addToast(`Listing submitted! A faculty member will review it shortly before it goes live.`, 'info');
    }
    this.notify();
  }

  approveListing(itemId) {
    const item = this.state.items.find(i => i.id === itemId);
    if (!item) return;

    item.status = 'live';
    this.addToast(`Approved "${item.title}". It is now published in the marketplace.`, 'success');
    this.notify();
  }

  rejectListing(itemId, reason = '') {
    const item = this.state.items.find(i => i.id === itemId);
    if (!item) return;

    this.state.items = this.state.items.filter(i => i.id !== itemId);
    this.addToast(`Listing "${item.title}" was rejected and removed.`, 'warning');
    this.notify();
  }

  withdrawListing(itemId) {
    const item = this.state.items.find(i => i.id === itemId);
    if (!item) return;

    this.state.items = this.state.items.filter(i => i.id !== itemId);
    this.addToast(`Listing "${item.title}" has been withdrawn.`, 'info');
    this.notify();
  }

  // --- Circular Economy & Orders ---
  checkout(item, options) {
    const user = this.getCurrentUser();
    if (!user) {
      this.openModal('login', { note: 'Please sign in to complete checkout.' });
      return;
    }

    const { days = 1, useCoins = false } = options;
    const baseTotal = item.type === 'rent' ? item.price * days : item.price;
    const currentCoins = user.coins || 0;

    let coinsUsed = 0;
    let coinDiscount = 0;

    if (useCoins && currentCoins > 0) {
      // 10 coins = $1 discount, max discount = baseTotal
      const maxCoinsApplicable = Math.floor(baseTotal * 10);
      coinsUsed = Math.min(currentCoins, maxCoinsApplicable);
      coinDiscount = Math.round((coinsUsed / 10) * 100) / 100;
    }

    const subtotalAfterCoins = Math.max(0, baseTotal - coinDiscount);
    const depositAmount = item.type === 'rent' ? (item.deposit || 0) : 0;
    const totalPaid = Math.round((subtotalAfterCoins + depositAmount) * 100) / 100;

    // Coins earned: 1 coin per $1 paid (subtotal)
    const coinsEarned = Math.floor(subtotalAfterCoins);

    // Update user's coin wallet
    user.coins = currentCoins - coinsUsed + coinsEarned;
    user.completedDeals = (user.completedDeals || 0) + 1;

    // Generate simulated pickup code & dates
    const pickupPass = 'PASS-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const returnDate = new Date();
    returnDate.setDate(now.getDate() + days);

    const order = {
      id: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
      user: user.key,
      itemId: item.id,
      title: item.title,
      cat: item.cat,
      type: item.type,
      days: days,
      dailyPrice: item.price,
      deposit: depositAmount,
      totalPaid: totalPaid,
      discountFromCoins: coinDiscount,
      coinsUsed: coinsUsed,
      coinsEarned: coinsEarned,
      seller: item.seller,
      sellerId: item.sellerId,
      location: item.location,
      pickupPass: pickupPass,
      status: item.type === 'rent' ? 'active_rental' : 'completed',
      date: now.toISOString(),
      returnDueDate: item.type === 'rent' ? returnDate.toISOString() : null
    };

    this.state.orders.unshift(order);

    // Initialize initial message thread
    this.state.messages[order.id] = [
      {
        sender: 'System Notice',
        role: 'system',
        time: 'Just now',
        text: `Order ${order.id} confirmed! Pickup pass is ${order.pickupPass}. Collect at ${order.location}.`
      }
    ];

    this.closeModal();
    this.openModal('orderSuccess', { order, item });
    this.addToast(`Order confirmed! You earned +${coinsEarned} campus coins.`, 'success');
    this.notify();
  }

  updateRentalStatus(orderId, nextStatus) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = nextStatus;
    if (nextStatus === 'picked_up') {
      this.addToast(`Item marked as picked up! Return due by ${new Date(order.returnDueDate).toLocaleDateString()}.`, 'info');
    } else if (nextStatus === 'completed') {
      this.addToast(`Rental completed & returned in good condition. Deposit $${order.deposit} refunded!`, 'success');
    }
    this.notify();
  }

  // --- Campus Perks Store ---
  redeemPerk(perkId) {
    const user = this.getCurrentUser();
    if (!user) {
      this.openModal('login', { note: 'Sign in to redeem perks.' });
      return;
    }

    const perk = this.state.perks.find(p => p.id === perkId);
    if (!perk) return;

    if (user.coins < perk.cost) {
      this.addToast(`Not enough coins. You need ${perk.cost} coins (current: ${user.coins}).`, 'error');
      return;
    }

    user.coins -= perk.cost;
    const voucherCode = 'VCH-' + Math.random().toString(36).substring(2, 7).toUpperCase();

    const redemption = {
      id: 'RED-' + Date.now(),
      userId: user.key,
      perkId: perk.id,
      title: perk.title,
      cost: perk.cost,
      voucherCode,
      date: new Date().toISOString()
    };

    this.state.redeemedPerks.unshift(redemption);
    this.addToast(`Redeemed "${perk.title}"! Voucher code: ${voucherCode}`, 'success');
    this.notify();
  }

  // --- Peer Messages ---
  sendChatMessage(threadId, text) {
    const user = this.getCurrentUser();
    if (!user || !text.trim()) return;

    if (!this.state.messages[threadId]) {
      this.state.messages[threadId] = [];
    }

    const msg = {
      sender: user.name,
      role: user.role.toLowerCase(),
      time: 'Just now',
      text: text.trim()
    };

    this.state.messages[threadId].push(msg);
    this.notify();
  }

  // --- Toast Notifications ---
  addToast(message, type = 'info') {
    const id = Date.now() + Math.random();
    this.state.ui.toasts.push({ id, message, type });
    this.notify();

    setTimeout(() => {
      this.removeToast(id);
    }, 4000);
  }

  removeToast(id) {
    this.state.ui.toasts = this.state.ui.toasts.filter(t => t.id !== id);
    this.notify();
  }
}

export const store = new Store();
