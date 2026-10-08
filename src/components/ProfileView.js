/**
 * CampusLoop ProfileView Component
 * Complete user dashboard: profile overview, active rentals, my listings, coin perks & moderation queue
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderProfileView(state) {
  const currentUser = store.getCurrentUser();
  if (!currentUser) {
    return `
      <main class="wrap" style="padding: 96px 0; text-align: center;">
        <h2 style="font-size: 2.2rem; margin-bottom: 8px;">Sign in to your Campus Account</h2>
        <p style="color: var(--muted); margin-bottom: 24px;">
          Access your coin wallet, active rentals, pickup passes, and listing reviews.
        </p>
        <button class="btn btn-lime btn-lg" data-action="open-login-modal">
          Sign In / Select Demo Profile
        </button>
      </main>
    `;
  }

  const isFaculty = currentUser.role === 'Faculty';
  const activeTab = state.ui.profileTab || 'orders';

  // Datasets for this user
  const userOrders = state.orders.filter(o => o.user === currentUser.key);
  const myListings = state.items.filter(i => i.owner === currentUser.key);
  const pendingQueue = state.items.filter(i => i.status === 'pending');
  const userRedemptions = state.redeemedPerks.filter(r => r.userId === currentUser.key);

  return `
    <main class="wrap profile-section">
      <!-- Profile Hero Card -->
      <div class="profile-hero-card">
        <div class="profile-avatar-large">
          ${currentUser.avatar}
        </div>

        <div class="profile-identity">
          <h1>${escapeHtml(currentUser.name)}</h1>
          <div class="profile-badges">
            <span class="profile-role-tag">${currentUser.role}</span>
            <span class="tier-badge ${currentUser.tier}">${currentUser.tier} Tier</span>
            <span class="profile-id-tag">${currentUser.campusId}</span>
          </div>
          <div class="profile-meta-text">
            ${escapeHtml(currentUser.major)} &bull; ${escapeHtml(currentUser.email)}
          </div>
        </div>

        <div class="profile-stats-grid">
          <div class="p-stat">
            <span class="p-stat-val" style="color: var(--coin);">${currentUser.coins || 0}</span>
            <span class="p-stat-lbl">Campus Coins</span>
          </div>
          <div class="p-stat">
            <span class="p-stat-val">${userOrders.length}</span>
            <span class="p-stat-lbl">Orders</span>
          </div>
          <div class="p-stat">
            <span class="p-stat-val">${myListings.length}</span>
            <span class="p-stat-lbl">My Listings</span>
          </div>
          <div class="p-stat">
            <span class="p-stat-val">${currentUser.reputation} ★</span>
            <span class="p-stat-lbl">Trust Score</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="profile-tabs-nav" aria-label="Dashboard sections">
        <button 
          class="p-tab-btn ${activeTab === 'orders' ? 'active' : ''}" 
          data-action="set-profile-tab" 
          data-tab="orders"
        >
          My Orders &amp; Rentals (${userOrders.length})
        </button>

        <button 
          class="p-tab-btn ${activeTab === 'listings' ? 'active' : ''}" 
          data-action="set-profile-tab" 
          data-tab="listings"
        >
          My Listings (${myListings.length})
        </button>

        <button 
          class="p-tab-btn ${activeTab === 'wallet' ? 'active' : ''}" 
          data-action="set-profile-tab" 
          data-tab="wallet"
        >
          Coin Rewards &amp; Perks
        </button>

        ${isFaculty ? `
          <button 
            class="p-tab-btn ${activeTab === 'queue' ? 'active' : ''}" 
            data-action="set-profile-tab" 
            data-tab="queue"
          >
            Review Queue
            ${pendingQueue.length > 0 ? `<span class="nav-badge">${pendingQueue.length}</span>` : ''}
          </button>
        ` : ''}
      </nav>

      <!-- Tab Content Panels -->
      ${activeTab === 'orders' ? renderOrdersTab(userOrders) : ''}
      ${activeTab === 'listings' ? renderListingsTab(myListings) : ''}
      ${activeTab === 'wallet' ? renderWalletTab(currentUser, userRedemptions, state.perks) : ''}
      ${activeTab === 'queue' && isFaculty ? renderQueueTab(pendingQueue) : ''}
    </main>
  `;
}

function renderOrdersTab(orders) {
  if (!orders.length) {
    return `
      <div class="table-card" style="padding: 48px 24px; text-align: center; color: var(--muted);">
        <h3 style="color: var(--ink); margin: 0 0 6px;">No orders or rentals yet</h3>
        <p>Explore the circular marketplace to rent equipment or purchase pre-loved textbooks.</p>
        <button class="btn btn-sm btn-lime" data-action="nav" data-view="market" style="margin-top: 12px;">
          Browse Marketplace
        </button>
      </div>
    `;
  }

  return `
    <div class="table-card">
      ${orders.map(order => {
        const isRent = order.type === 'rent';
        const isActive = order.status === 'active_rental';

        return `
          <div class="profile-item-row">
            <div class="p-row-grow">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="p-row-title">${escapeHtml(order.title)}</span>
                <span class="order-pass-pill" title="Pickup verification code">${order.pickupPass}</span>
              </div>
              <div class="p-row-sub">
                ${isRent ? `Rented for ${order.days} days &bull; ` : 'Purchased &bull; '}
                Seller: ${escapeHtml(order.seller)} &bull; Station: ${escapeHtml(order.location)}
              </div>
              ${order.returnDueDate && isActive ? `
                <div style="font-size: 0.75rem; color: var(--orange); margin-top: 4px; font-weight: 600;">
                  Due back: ${new Date(order.returnDueDate).toLocaleDateString()}
                </div>
              ` : ''}
            </div>

            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
              <span style="font-weight: 700; color: var(--ink);">$${order.totalPaid.toFixed(2)}</span>
              <span style="font-family: var(--mono); font-size: 0.75rem; color: var(--coin);">
                +${order.coinsEarned} coins
              </span>
            </div>

            <div style="display: flex; gap: 8px; align-items: center;">
              <button 
                class="btn btn-sm btn-ghost" 
                data-action="open-chat-modal" 
                data-order-id="${order.id}" 
                title="Chat with peer"
              >
                ${renderIcon('chat')} Message
              </button>

              ${isActive ? `
                <button 
                  class="btn btn-sm btn-lime" 
                  data-action="return-rental" 
                  data-order-id="${order.id}"
                >
                  Return Item
                </button>
              ` : `
                <span class="tier-badge Silver">Completed</span>
              `}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderListingsTab(listings) {
  if (!listings.length) {
    return `
      <div class="table-card" style="padding: 48px 24px; text-align: center; color: var(--muted);">
        <h3 style="color: var(--ink); margin: 0 0 6px;">You haven't listed anything yet</h3>
        <p>Give your idle calculator, bike, or gear a second life on campus while earning cash &amp; coins.</p>
        <button class="btn btn-sm btn-lime" data-action="open-list-modal" style="margin-top: 12px;">
          List an Item Now
        </button>
      </div>
    `;
  }

  return `
    <div class="table-card">
      ${listings.map(item => `
        <div class="profile-item-row">
          <div class="p-row-grow">
            <div class="p-row-title">${escapeHtml(item.title)}</div>
            <div class="p-row-sub">
              ${item.cat} &bull; $${item.price} ${item.type === 'rent' ? '/ day' : 'sale'} &bull; ${item.condition}
            </div>
          </div>

          <div>
            ${item.status === 'live' 
              ? `<span class="tier-badge Gold" style="background:var(--green-light); color:var(--green-text);">Live</span>`
              : `<span class="tier-badge" style="background:var(--gold-bg); color:var(--gold-ink);">Pending Review</span>`}
          </div>

          <div>
            <button class="btn btn-sm btn-danger" data-action="withdraw-listing" data-id="${item.id}">
              Withdraw
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderWalletTab(user, redemptions, perks) {
  return `
    <div>
      <!-- Wallet Info Card -->
      <div style="background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.25); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; color: var(--coin); font-weight: 700;">
              Circular Campus Wallet
            </div>
            <h2 style="margin: 6px 0; font-size: 2.2rem; color: var(--coin); font-weight: 800;">
              ${user.coins || 0} Campus Coins
            </h2>
            <p style="margin: 0; color: var(--ink-secondary); font-size: 0.9375rem; max-width: 60ch;">
              Earn 1 coin for every $1 spent on CampusLoop rentals &amp; buys. Use coins for $0.10 discount each at checkout, or redeem for real campus perks below!
            </p>
          </div>
        </div>
      </div>

      <!-- Active Vouchers -->
      ${redemptions.length > 0 ? `
        <div style="margin-bottom: 32px;">
          <h3 style="margin: 0 0 14px; font-size: 1.25rem;">Your Claimed Vouchers</h3>
          <div class="table-card">
            ${redemptions.map(r => `
              <div class="profile-item-row">
                <div class="p-row-grow">
                  <div class="p-row-title">${escapeHtml(r.title)}</div>
                  <div class="p-row-sub">Redeemed on ${new Date(r.date).toLocaleDateString()}</div>
                </div>
                <div class="order-pass-pill" style="font-size:1rem; color:var(--green-text); font-weight:800;">
                  ${r.voucherCode}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Perks Catalog -->
      <h3 style="margin: 0 0 6px; font-size: 1.25rem;">Available Campus Rewards</h3>
      <p style="color: var(--muted); margin: 0 0 20px; font-size: 0.9375rem;">
        Sponsored by Campus Sustainability &amp; Academic Services.
      </p>

      <div class="perks-grid">
        ${perks.map(perk => {
          const canAfford = (user.coins || 0) >= perk.cost;
          return `
            <div class="perk-card">
              <div class="perk-icon-wrap">
                ${renderIcon(perk.icon || 'gift')}
              </div>
              <div style="font-size: 0.75rem; font-family: var(--mono); color: var(--muted); text-transform: uppercase; margin-bottom: 4px;">
                ${perk.category}
              </div>
              <h4 style="margin: 0 0 8px; font-size: 1.125rem; font-weight: 700;">
                ${escapeHtml(perk.title)}
              </h4>
              <p style="margin: 0 0 18px; color: var(--muted); font-size: 0.875rem; line-height: 1.45; flex: 1;">
                ${escapeHtml(perk.desc)}
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line); padding-top: 14px;">
                <span class="perk-cost-tag">${perk.cost} coins</span>
                <button 
                  class="btn btn-sm ${canAfford ? 'btn-lime' : 'btn-ghost'}" 
                  data-action="redeem-perk" 
                  data-perk-id="${perk.id}"
                  ${!canAfford ? 'disabled title="Need more coins"' : ''}
                >
                  ${canAfford ? 'Redeem Voucher' : 'Not enough coins'}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderQueueTab(queue) {
  if (!queue.length) {
    return `
      <div class="table-card" style="padding: 48px 24px; text-align: center; color: var(--muted);">
        <h3 style="color: var(--ink); margin: 0 0 6px;">Moderation Queue is Clean</h3>
        <p>There are currently no student listings awaiting review. New student submissions will appear here.</p>
      </div>
    `;
  }

  return `
    <div>
      <div style="margin-bottom: 16px; font-size: 0.9375rem; color: var(--muted);">
        As a verified faculty reviewer, review student submissions to ensure they meet campus safety &amp; academic standards.
      </div>
      <div class="table-card">
        ${queue.map(item => `
          <div class="profile-item-row">
            <div class="p-row-grow">
              <div class="p-row-title">${escapeHtml(item.title)}</div>
              <div class="p-row-sub">
                ${item.cat} &bull; ${item.type === 'rent' ? `$${item.price} / day` : `$${item.price} sale`} &bull; Listed by <strong>${escapeHtml(item.seller)}</strong>
              </div>
              <div style="font-size: 0.8125rem; color: var(--ink-secondary); margin-top: 4px;">
                "${escapeHtml(item.desc)}"
              </div>
            </div>

            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm" data-action="approve-listing" data-id="${item.id}">
                ${renderIcon('check')} Approve
              </button>
              <button class="btn btn-sm btn-danger" data-action="reject-listing" data-id="${item.id}">
                Reject
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
