/**
 * CampusLoop - Exact Original UI & Complete Functionality
 */

import './styles/main.css';

/* ---------- data ---------- */
var CATS = ["Mobility", "Study", "Creative", "Home", "Tech"];
var DEFAULT_ICON = { Mobility: "bike", Study: "book", Creative: "camera", Home: "chair", Tech: "laptop" };
var ICONS = {
  bike: '<circle cx="24" cy="64" r="16"/><circle cx="72" cy="64" r="16"/><path d="M24 64 40 36h22l10 28M40 36l12 28M62 36l4-8h8M34 28h12"/>',
  calc: '<rect x="22" y="10" width="52" height="76" rx="6"/><rect x="30" y="18" width="36" height="14" rx="2"/><g fill="currentColor" stroke="none"><circle cx="36" cy="46" r="3.5"/><circle cx="48" cy="46" r="3.5"/><circle cx="60" cy="46" r="3.5"/><circle cx="36" cy="58" r="3.5"/><circle cx="48" cy="58" r="3.5"/><circle cx="60" cy="58" r="3.5"/><circle cx="36" cy="70" r="3.5"/><circle cx="48" cy="70" r="3.5"/><circle cx="60" cy="70" r="3.5"/></g>',
  camera: '<rect x="10" y="28" width="76" height="52" rx="8"/><circle cx="48" cy="54" r="15"/><path d="m32 28 6-10h20l6 10"/>',
  chair: '<path d="M30 12h36v36H30zM24 52h48v10H24zM32 62v24M64 62v24"/>',
  coat: '<path d="M32 12 16 24 8 42l14 6 4-6v44h44V42l4 6 14-6-8-18-16-12-16 22z"/>',
  book: '<path d="M14 20h28q6 0 6 6v54q-4-4-10-4H14zM82 20H54q-6 0-6 6v54q4-4 10-4h24z"/>',
  laptop: '<rect x="16" y="22" width="64" height="42" rx="4"/><path d="M8 76h80"/>'
};

function svgIcon(name) {
  return '<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.book) + '</svg>';
}

var USERS = {
  student: { key: "student", role: "Student", name: "Alex Morgan", email: "student@loop.campus", password: "student123", detail: "B.Sc. Biology, year 2", tier: "Silver", coins: 40 },
  faculty: { key: "faculty", role: "Faculty", name: "Dr. Sam Rivera", email: "faculty@loop.campus", password: "faculty123", detail: "Department of Chemistry", tier: "Gold", coins: 120 }
};

function seedState() {
  return {
    session: "student", // default signed in as Alex Morgan so users see full UI immediately
    coins: { student: USERS.student.coins, faculty: USERS.faculty.coins },
    nextId: 6,
    orders: [],
    items: [
      { id: 1, title: "Ridgeback City Bike", desc: "Reliable commuter bike, recently tuned.", cat: "Mobility", type: "rent", price: 18, seller: "Maya Chen", tier: "Gold", icon: "bike", status: "live", owner: null },
      { id: 2, title: "TI-84 Plus calculator", desc: "Exam-ready and in excellent condition.", cat: "Study", type: "rent", price: 6, seller: "Noah Williams", tier: "Bronze", icon: "calc", status: "live", owner: null },
      { id: 3, title: "Mirrorless camera kit", desc: "Weekend project kit with two batteries.", cat: "Creative", type: "rent", price: 35, seller: "Leila Okafor", tier: "Gold", icon: "camera", status: "live", owner: null },
      { id: 4, title: "Quiet study chair", desc: "Comfortable chair for a better study corner.", cat: "Home", type: "buy", price: 24, seller: "Campus Collective", tier: "Silver", icon: "chair", status: "live", owner: null },
      { id: 5, title: "Lab coat, clean and ready", desc: "Freshly cleaned coat for practical sessions.", cat: "Study", type: "rent", price: 8, seller: "Campus Collective", tier: "Bronze", icon: "coat", status: "live", owner: null }
    ]
  };
}

var KEY = "loop-campus-v1";
var state = seedState();
try {
  var raw = localStorage.getItem(KEY);
  if (raw) {
    var p = JSON.parse(raw);
    if (p && p.items && p.coins) state = p;
  }
} catch (e) {}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {}
}

var ui = {
  view: "market",
  q: "",
  cat: "all",
  type: "all",
  menu: false,
  modal: null,
  loginRole: "student",
  newType: "rent",
  pending: null,
  toastTimer: null
};

/* ---------- helpers ---------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, function(c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function money(n) {
  n = Math.round(n * 100) / 100;
  return "$" + (n % 1 === 0 ? n : n.toFixed(2));
}

function me() {
  return state.session ? USERS[state.session] : null;
}

function coinsOf() {
  return state.session ? state.coins[state.session] : 0;
}

function find(id) {
  for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].id === id) return state.items[i];
  }
  return null;
}

function toast(msg) {
  var r = document.getElementById("toast-root");
  if (!r) return;
  r.innerHTML = '<div class="toast" role="status">' + esc(msg) + '</div>';
  clearTimeout(ui.toastTimer);
  ui.toastTimer = setTimeout(function() {
    r.innerHTML = "";
  }, 3200);
}

var I = {
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  coin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 7v4"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  chev: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  sliders: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>',
  spark: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M10 4l1.8 5.2L17 11l-5.2 1.8L10 18l-1.8-5.2L3 11l5.2-1.8zM18 3l.8 2.2L21 6l-2.2.8L18 9l-.8-2.2L15 6l2.2-.8z"/></svg>',
  mark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
};

/* ---------- header ---------- */
function headerHTML() {
  var u = me();
  var menu = "";
  if (u && ui.menu) {
    menu = '<div class="menu" role="menu"><div class="who">' + esc(u.name) + '</div><div class="sub">' + esc(u.role) + ' account</div>' +
      '<button data-action="nav" data-view="profile" role="menuitem">My profile</button>' +
      '<button data-action="quick-switch" role="menuitem">Switch to ' + (u.key === "student" ? "Faculty" : "Student") + '</button>' +
      '<button data-action="logout" role="menuitem">Sign out</button></div>';
  }
  return '<header class="top"><div class="top-in">' +
    '<button class="brand" data-action="nav" data-view="market" aria-label="Loop.campus home"><span class="mark">' + I.mark + '</span><span>Loop<span class="dot">.</span><span class="campus">campus</span></span></button>' +
    '<nav class="nav" aria-label="Main">' +
      '<button data-action="nav" data-view="market"' + (ui.view === "market" ? ' aria-current="page"' : '') + '>Marketplace</button>' +
      '<button data-action="nav" data-view="profile"' + (ui.view === "profile" ? ' aria-current="page"' : '') + '>My profile</button>' +
    '</nav>' +
    '<div class="top-right">' +
      '<span class="coins">' + I.coin + '<span>' + coinsOf() + ' coins</span></span>' +
      '<button class="btn btn-lg" data-action="list">List an item ' + I.arrow + '</button>' +
      '<div class="avwrap"><button class="avatar" data-action="avatar" aria-label="' + (u ? "Account menu" : "Sign in") + '" aria-haspopup="true">' + (u ? esc(u.name.replace("Dr. ", "").charAt(0)) : "?") + '</button>' + menu + '</div>' +
    '</div></div></header>';
}

/* ---------- marketplace ---------- */
function visibleItems() {
  var q = ui.q.trim().toLowerCase();
  return state.items.filter(function(it) {
    var show = it.status === "live" || (it.status === "pending" && it.owner && it.owner === state.session) || (it.status === "pending" && state.session === "faculty");
    if (!show) return false;
    if (ui.cat !== "all" && it.cat !== ui.cat) return false;
    if (ui.type !== "all" && it.type !== ui.type) return false;
    if (q && (it.title + " " + it.desc + " " + it.cat + " " + it.seller).toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
}

function cardHTML(it) {
  var own = it.owner && it.owner === state.session;
  var pending = it.status === "pending";
  var action = pending ? '<span class="state pending">In review</span>' :
    (own ? '<button class="btn btn-ghost" disabled>Your item</button>' : '<button class="btn" data-action="get" data-id="' + it.id + '">Get it ' + I.arrow + '</button>');
  return '<article class="card">' +
    '<div class="thumb" style="background:var(--t-' + it.cat.toLowerCase() + ')"><span class="tag">' + esc(it.cat) + '</span>' + (pending ? '<span class="pending-chip">Pending review</span>' : '') + svgIcon(it.icon || DEFAULT_ICON[it.cat]) + '</div>' +
    '<div class="card-body">' +
      '<div class="kindrow"><span class="kind">' + (it.type === "rent" ? "Rent" : "Buy") + '</span>' + (it.type === "rent" ? '<span class="unit">/ Day</span>' : '') + '</div>' +
      '<h3>' + esc(it.title) + '</h3><p class="desc">' + esc(it.desc) + '</p>' +
      '<div class="seller"><span class="av">' + esc(it.seller.replace("Dr. ", "").charAt(0)) + '</span><span>' + esc(it.seller) + '</span><span class="tier ' + esc(it.tier) + '">' + esc(it.tier) + '</span></div>' +
      '<div class="buyrow"><div class="price">' + money(it.price) + (it.type === "rent" ? '<small>/ day</small>' : '') + '</div>' + action + '</div>' +
    '</div></article>';
}

function gridHTML() {
  var list = visibleItems();
  if (!list.length) {
    return '<div class="empty"><strong>Nothing matches yet</strong>Try a different search or clear the filters.<br><button class="btn" data-action="clear">Clear filters</button></div>';
  }
  return list.map(cardHTML).join("");
}

function updateGrid() {
  var g = document.getElementById("grid"), c = document.getElementById("count");
  if (g) g.innerHTML = gridHTML();
  if (c) c.textContent = visibleItems().length + " items";
}

function selectHTML(id, label, opts, val) {
  return '<span class="sel"><label class="sr" for="' + id + '">' + label + '</label><select id="' + id + '" title="' + label + '">' +
    opts.map(function(o) { return '<option value="' + o[0] + '"' + (o[0] === val ? " selected" : "") + '>' + o[1] + '</option>'; }).join("") + '</select>' + I.chev + '</span>';
}

function marketHTML() {
  var catOpts = [["all", "All"]].concat(CATS.map(function(c) { return [c, c]; }));
  var typeOpts = [["all", "All"], ["rent", "Rent"], ["buy", "Buy"]];
  return '<main class="wrap">' +
    '<section class="hero">' +
      '<div class="eyebrow"><i></i>The campus circular</div>' +
      '<h1 class="display">Good things,<span>keep moving.</span></h1>' +
      '<div class="hero-row"><p>A trusted place to pass on what you no longer need — and find what you do.</p>' +
      '<div class="note">' + I.spark + '<span>Members earn coins on every checkout</span></div></div>' +
    '</section>' +
    '<div class="filters" role="search">' +
      '<div class="search">' + I.search + '<label class="sr" for="q">Search the campus marketplace</label><input id="q" type="search" placeholder="Search the campus marketplace..." value="' + esc(ui.q) + '" autocomplete="off"></div>' +
      '<div class="selects">' + I.sliders + selectHTML("f-cat", "Category", catOpts, ui.cat) + selectHTML("f-type", "Rent or buy", typeOpts, ui.type) + '</div>' +
    '</div>' +
    '<div class="sec-head"><div><div class="kicker">Fresh on campus</div><h2>Find your next useful thing</h2></div><span class="count" id="count">' + visibleItems().length + ' items</span></div>' +
    '<section class="grid" id="grid" aria-label="Listings">' + gridHTML() + '</section>' +
  '</main>';
}

/* ---------- profile ---------- */
function profileHTML() {
  var u = me();
  if (!u) {
    return '<main class="wrap"><div class="signin-box"><h1>Your profile</h1><p>Sign in as a student or faculty member to see your coins, orders, and listings.</p><button class="btn btn-lg" data-action="login">Sign in ' + I.arrow + '</button></div></main>';
  }
  var orders = state.orders.filter(function(o) { return o.user === u.key; }).reverse();
  var mine = state.items.filter(function(i) { return i.owner === u.key; });
  var queue = state.items.filter(function(i) { return i.status === "pending"; });
  var h = '<main class="wrap"><div class="profile">' +
    '<div class="p-head"><div class="p-av">' + esc(u.name.replace("Dr. ", "").charAt(0)) + '</div>' +
    '<div><h1>' + esc(u.name) + '</h1><span class="role-chip">' + esc(u.role) + '</span><div class="p-meta">' + esc(u.detail) + ' &middot; ' + esc(u.email) + '</div></div>' +
    '<div class="stats"><div class="stat"><div class="n">' + coinsOf() + '</div><div class="l">coins</div></div>' +
    '<div class="stat"><div class="n">' + orders.length + '</div><div class="l">orders</div></div>' +
    '<div class="stat"><div class="n">' + mine.length + '</div><div class="l">listings</div></div></div></div>';

  if (u.key === "faculty") {
    h += '<section class="block"><h2>Review queue</h2><div class="rows">';
    if (!queue.length) h += '<div class="none">No listings waiting. Student listings appear here for approval.</div>';
    queue.forEach(function(i) {
      h += '<div class="row"><div class="grow"><div class="t">' + esc(i.title) + '</div><div class="s">' + esc(i.cat) + ', ' + (i.type === "rent" ? "rent" : "buy") + ' at ' + money(i.price) + (i.type === "rent" ? " / day" : "") + ' by ' + esc(i.seller) + '</div></div>' +
        '<div class="actions"><button class="btn" data-action="approve" data-id="' + i.id + '">Approve</button><button class="btn btn-danger" data-action="reject" data-id="' + i.id + '">Reject</button></div></div>';
    });
    h += '</div></section>';
  }

  h += '<section class="block"><h2>My orders</h2><div class="rows">';
  if (!orders.length) h += '<div class="none">No orders yet. Pick something from the marketplace to start earning coins.</div>';
  orders.forEach(function(o) {
    h += '<div class="row"><div class="grow"><div class="t">' + esc(o.title) + '</div><div class="s">' + (o.type === "rent" ? "Rented for " + o.days + (o.days > 1 ? " days" : " day") : "Bought") + ' on ' + new Date(o.date).toLocaleDateString() + '</div></div>' +
      '<span class="earn">+' + o.earned + ' coins</span><span class="amt">' + money(o.paid) + '</span></div>';
  });
  h += '</div></section>';

  h += '<section class="block"><h2>My listings</h2><div class="rows">';
  if (!mine.length) h += '<div class="none">You haven\'t listed anything yet.</div>';
  mine.forEach(function(i) {
    h += '<div class="row"><div class="grow"><div class="t">' + esc(i.title) + '</div><div class="s">' + esc(i.cat) + ', ' + money(i.price) + (i.type === "rent" ? " / day" : "") + '</div></div>' +
      '<span class="state ' + (i.status === "live" ? "live" : "pending") + '">' + (i.status === "live" ? "Live" : "In review") + '</span>' +
      '<button class="btn btn-danger" data-action="withdraw" data-id="' + i.id + '">Withdraw</button></div>';
  });
  h += '</div></section></div></main>';
  return h;
}

/* ---------- render ---------- */
function render() {
  var app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = headerHTML() + (ui.view === "profile" ? profileHTML() : marketHTML());
}

/* ---------- modals ---------- */
function openModal(html, focusSel) {
  var r = document.getElementById("modal-root");
  if (!r) return;
  r.innerHTML = '<div class="overlay" data-action="overlay"><div class="modal" role="dialog" aria-modal="true">' + html + '</div></div>';
  ui.modal = true;
  var f = r.querySelector(focusSel || "input,select,textarea,button");
  if (f) f.focus();
}

function closeModal() {
  var r = document.getElementById("modal-root");
  if (r) r.innerHTML = "";
  ui.modal = null;
}

function loginHTML(note) {
  var role = ui.loginRole, u = USERS[role];
  return '<h2>Sign in to Loop.campus</h2><p class="lead">' + esc(note || "Choose your profile to continue.") + '</p>' +
    '<div class="seg" role="group" aria-label="Profile type">' +
      '<button type="button" data-action="login-role" data-role="student" aria-pressed="' + (role === "student") + '">Student</button>' +
      '<button type="button" data-action="login-role" data-role="faculty" aria-pressed="' + (role === "faculty") + '">Faculty</button></div>' +
    '<form id="login-form" novalidate>' +
      '<label class="f">Email<input id="l-email" type="email" autocomplete="username" placeholder="' + esc(u.email) + '"></label>' +
      '<label class="f">Password<input id="l-pass" type="password" autocomplete="current-password" placeholder="Password"></label>' +
      '<div class="hint"><span>Demo ' + role + ' login<br><code>' + esc(u.email) + ' / ' + esc(u.password) + '</code></span><button type="button" data-action="fill">Fill in</button></div>' +
      '<p class="err" id="l-err" role="alert"></p>' +
      '<div class="modal-actions"><button type="button" class="btn btn-ghost" data-action="close">Cancel</button><button type="submit" class="btn">Sign in as ' + esc(u.role.toLowerCase()) + '</button></div>' +
    '</form>';
}

function openLogin(note) {
  openModal(loginHTML(note), "#l-email");
}

function listHTML() {
  var u = me();
  return '<h2>List an item</h2><p class="lead">' + (u.key === "student" ? "A faculty member reviews new student listings before they go live." : "Faculty listings go live right away.") + '</p>' +
    '<form id="list-form" novalidate>' +
      '<label class="f">Title<input id="n-title" maxlength="60" placeholder="e.g. Organic chemistry textbook"></label>' +
      '<label class="f">Description<textarea id="n-desc" maxlength="140" placeholder="Condition, what\'s included"></textarea></label>' +
      '<label class="f">Category<select id="n-cat">' + CATS.map(function(c) { return '<option>' + c + '</option>'; }).join("") + '</select></label>' +
      '<div class="seg" role="group" aria-label="Rent or buy"><button type="button" data-action="n-type" data-type="rent" aria-pressed="true">Rent per day</button><button type="button" data-action="n-type" data-type="buy" aria-pressed="false">Sell</button></div>' +
      '<label class="f">Price in dollars<input id="n-price" type="number" min="1" step="1" placeholder="10"></label>' +
      '<p class="err" id="n-err" role="alert"></p>' +
      '<div class="modal-actions"><button type="button" class="btn btn-ghost" data-action="close">Cancel</button><button type="submit" class="btn">List item</button></div>' +
    '</form>';
}

function checkoutHTML(it) {
  var rent = it.type === "rent";
  return '<h2>' + esc(it.title) + '</h2><p class="lead">From ' + esc(it.seller) + '</p>' +
    '<form id="co-form" data-id="' + it.id + '">' +
      (rent ? '<label class="f">Rental days<input id="co-days" type="number" min="1" max="14" value="1"></label>' : '') +
      (coinsOf() > 0 ? '<label class="check"><input type="checkbox" id="co-use"> <span>Use my coins (10 coins = $1)</span></label>' : '') +
      '<div class="sum" id="co-sum"></div>' +
      '<div class="modal-actions" style="margin-top:18px"><button type="button" class="btn btn-ghost" data-action="close">Cancel</button><button type="submit" class="btn">Confirm</button></div>' +
    '</form>';
}

function calcCheckout(it) {
  var daysEl = document.getElementById("co-days"), useEl = document.getElementById("co-use");
  var days = 1;
  if (daysEl) { days = Math.max(1, Math.min(14, parseInt(daysEl.value, 10) || 1)); }
  var total = it.price * (it.type === "rent" ? days : 1);
  var use = useEl && useEl.checked ? Math.min(coinsOf(), Math.floor(total * 10)) : 0;
  var disc = use / 10;
  var pay = Math.max(0, Math.round((total - disc) * 100) / 100);
  return { days: days, total: total, use: use, disc: disc, pay: pay, earn: Math.floor(pay) };
}

function updateCheckout() {
  var form = document.getElementById("co-form");
  if (!form) return;
  var it = find(parseInt(form.getAttribute("data-id"), 10));
  if (!it) return;
  var c = calcCheckout(it);
  var h = '<div><span>' + (it.type === "rent" ? money(it.price) + ' x ' + c.days + (c.days > 1 ? ' days' : ' day') : 'Price') + '</span><span>' + money(c.total) + '</span></div>';
  if (c.use) h += '<div><span>Coins applied (' + c.use + ')</span><span>-' + money(c.disc) + '</span></div>';
  h += '<div class="tot"><span>You pay</span><span>' + money(c.pay) + '</span></div><div class="earn"><span>You earn</span><span>+' + c.earn + ' coins</span></div>';
  var sumEl = document.getElementById("co-sum");
  if (sumEl) sumEl.innerHTML = h;
}

/* ---------- actions ---------- */
function requireLogin(note, fn) {
  if (me()) return true;
  ui.pending = fn;
  openLogin(note);
  return false;
}

function startGet(id) {
  var it = find(id);
  if (!it) return;
  if (!requireLogin("Sign in to get this item.", function() { startGet(id); })) return;
  if (it.owner === state.session) { toast("This is your own listing."); return; }
  openModal(checkoutHTML(it), "#co-days,#co-use,button[type=submit]");
  updateCheckout();
}

function startList() {
  if (!requireLogin("Sign in to list an item.", startList)) return;
  openModal(listHTML(), "#n-title");
  ui.newType = "rent";
}

document.addEventListener("click", function(e) {
  var t = e.target.closest("[data-action]");
  if (!t) {
    if (ui.menu) { ui.menu = false; render(); }
    return;
  }
  var a = t.getAttribute("data-action");
  if (a === "overlay") { if (e.target === t) closeModal(); return; }
  if (a !== "avatar" && ui.menu) { ui.menu = false; }

  switch (a) {
    case "nav":
      ui.view = t.getAttribute("data-view");
      closeModal();
      render();
      window.scrollTo(0, 0);
      break;
    case "avatar":
      if (me()) { ui.menu = !ui.menu; render(); } else { openLogin(); }
      e.stopPropagation();
      break;
    case "quick-switch":
      var cur = me();
      var nextRole = cur && cur.key === "student" ? "faculty" : "student";
      state.session = nextRole;
      save();
      render();
      toast("Switched to " + USERS[nextRole].name + " (" + USERS[nextRole].role + ").");
      break;
    case "login":
      openLogin();
      break;
    case "login-role":
      ui.loginRole = t.getAttribute("data-role");
      var modalEl = document.querySelector(".modal");
      if (modalEl) modalEl.innerHTML = loginHTML();
      var emailEl = document.getElementById("l-email");
      if (emailEl) emailEl.focus();
      break;
    case "fill":
      var u = USERS[ui.loginRole];
      var em = document.getElementById("l-email");
      var pw = document.getElementById("l-pass");
      if (em) em.value = u.email;
      if (pw) pw.value = u.password;
      break;
    case "logout":
      state.session = null;
      save();
      ui.view = "market";
      render();
      toast("Signed out.");
      break;
    case "close":
      closeModal();
      break;
    case "list":
      startList();
      break;
    case "get":
      startGet(parseInt(t.getAttribute("data-id"), 10));
      break;
    case "clear":
      ui.q = "";
      ui.cat = "all";
      ui.type = "all";
      render();
      break;
    case "n-type":
      ui.newType = t.getAttribute("data-type");
      var btns = t.parentNode.querySelectorAll("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute("aria-pressed", btns[i] === t ? "true" : "false");
      }
      break;
    case "approve":
      var itApprove = find(parseInt(t.getAttribute("data-id"), 10));
      if (itApprove) {
        itApprove.status = "live";
        save();
        render();
        toast("Approved. " + itApprove.title + " is now live.");
      }
      break;
    case "reject":
    case "withdraw":
      var id = parseInt(t.getAttribute("data-id"), 10);
      state.items = state.items.filter(function(x) { return x.id !== id; });
      save();
      render();
      toast(a === "reject" ? "Listing rejected." : "Listing withdrawn.");
      break;
  }
});

document.addEventListener("submit", function(e) {
  e.preventDefault();
  var f = e.target;
  if (f.id === "login-form") {
    var email = document.getElementById("l-email").value.trim().toLowerCase();
    var pass = document.getElementById("l-pass").value;
    var u = USERS[ui.loginRole];
    if (email !== u.email || pass !== u.password) {
      var errEl = document.getElementById("l-err");
      if (errEl) errEl.textContent = "That email and password don't match the " + u.role.toLowerCase() + " account. Use Fill in for the demo details.";
      return;
    }
    state.session = u.key;
    save();
    closeModal();
    render();
    toast("Signed in as " + u.name + ".");
    var p = ui.pending;
    ui.pending = null;
    if (p) p();
  } else if (f.id === "list-form") {
    var title = document.getElementById("n-title").value.trim();
    var desc = document.getElementById("n-desc").value.trim();
    var price = parseFloat(document.getElementById("n-price").value);
    var err = document.getElementById("n-err");
    if (!title) { if (err) err.textContent = "Add a title so people can find your item."; return; }
    if (!desc) { if (err) err.textContent = "Add a short description."; return; }
    if (!(price > 0)) { if (err) err.textContent = "Enter a price above $0."; return; }
    var user = me();
    var item = {
      id: state.nextId++,
      title: title,
      desc: desc,
      cat: document.getElementById("n-cat").value,
      type: ui.newType || "rent",
      price: price,
      seller: user.name,
      tier: user.tier,
      icon: DEFAULT_ICON[document.getElementById("n-cat").value] || "book",
      status: user.key === "faculty" ? "live" : "pending",
      owner: user.key
    };
    state.items.unshift(item);
    save();
    closeModal();
    render();
    toast(item.status === "live" ? "Listed. Your item is live." : "Listed. A faculty member will review it soon.");
  } else if (f.id === "co-form") {
    var it = find(parseInt(f.getAttribute("data-id"), 10));
    var c = calcCheckout(it);
    state.coins[state.session] = coinsOf() - c.use + c.earn;
    state.orders.push({
      user: state.session,
      title: it.title,
      type: it.type,
      days: c.days,
      paid: c.pay,
      earned: c.earn,
      date: new Date().toISOString()
    });
    save();
    closeModal();
    render();
    toast("Order placed. You earned " + c.earn + " coins.");
  }
});

document.addEventListener("input", function(e) {
  if (e.target.id === "q") { ui.q = e.target.value; updateGrid(); }
  if (e.target.id === "co-days" || e.target.id === "co-use") updateCheckout();
});

document.addEventListener("change", function(e) {
  if (e.target.id === "f-cat") { ui.cat = e.target.value; updateGrid(); }
  if (e.target.id === "f-type") { ui.type = e.target.value; updateGrid(); }
  if (e.target.id === "co-use") updateCheckout();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    if (ui.modal) closeModal();
    else if (ui.menu) { ui.menu = false; render(); }
  }
});

// Initial boot
render();
