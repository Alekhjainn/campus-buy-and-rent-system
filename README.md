# CampusLoop 🌿
> **Peer-to-Peer Campus Circular Economy & Sharing Marketplace**

CampusLoop is a full-featured web application designed for university campuses. It enables students and faculty to borrow, rent, and pass on textbooks, lab gear, calculators, creative gear, and dorm essentials with zero waste, verified peer trust, and a circular coin rewards economy.

---

## 🌟 Key Features

### 1. 🛒 Circular Campus Marketplace
- **Category Browsing**: Filter by *Mobility*, *Study & Lab*, *Creative & Media*, *Dorm & Living*, and *Tech & Gadgets*.
- **Rent or Buy**: Choose daily rental equipment with refundable deposits or one-time purchases to permanently own.
- **Fast Live Search & Dynamic Sorting**: Filter instantly by title, description, category, campus pickup spot, or seller rating.
- **Rich Item Inspection**: Modal sheet view with condition tags, specifications, deposit terms, and campus station directions.

### 2. 🪙 Campus Coins & Circular Tokenomics
- **Earn on Every Transaction**: Earn **1 Campus Coin per $1 spent** on rentals and purchases.
- **Flexible Redemption**:
  - Apply coins for instant discounts at checkout (**10 coins = $1 off**).
  - Exchange coins in the **Campus Perks Store** for artisanal campus cafe coffee, library study room priority, high-res printing quotas, and 3D print filament credits.
- **Real-Time Digital Vouchers**: Instant unique voucher codes (`VCH-XXXXX`) generated upon perk redemption.

### 3. 🛡️ Faculty Peer Moderation System
- **Community Trust Model**: Student listings undergo peer moderation before being published live.
- **Instant Faculty Publishing**: Faculty listings go live immediately.
- **Review Queue**: Faculty reviewers can inspect student listings, view item descriptions and safety specs, and approve or reject with one click.

### 4. 🎟️ Digital Campus Pickup Pass & Peer Handoff
- **Verification PIN & Pass**: Every completed booking issues a secure campus pass (`PASS-XXXX`) with simulated QR pass.
- **Designated Campus Stations**: Central Library Service Desk, Student Union Hub, Science Quad Atrium, Makerspace Lobby, etc.
- **Peer Chat Messenger**: In-app messaging between renter and seller with quick-reply prompts to coordinate pickup and return handoffs.
- **Rental Lifecycle Manager**: Return rented items with 1 click to automatically release and refund security deposits.

### 5. 🎭 Instant Demo Persona Switcher
Switch between accounts directly from the top banner to test all workflows:
- **Alex Morgan** (*Student*): Biology Year 2 &bull; Silver Tier &bull; Active rentals & listings
- **Dr. Sam Rivera** (*Faculty Moderator*): Chemical Sciences &bull; Gold Tier &bull; Moderation Review Queue
- **Maya Chen** (*Senior Student*): Computer Science Year 3 &bull; Gold Tier

### 6. 🌓 Modern Aesthetics & Accessibility
- Curated organic emerald and cyber lime palette with deep dark mode support.
- Responsive across mobile, tablet, and desktop screens.
- Keyboard accessible (`Escape` to dismiss modals, focus states).
- Persistent state saved to `localStorage`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture

```
campusloop/
├── index.html               # Semantic HTML5 entrypoint with Google Fonts
├── package.json             # NPM package scripts & Vite config
├── vite.config.js           # Vite development & build setup
├── .gitignore               # Ignored build & node artifacts
├── README.md                # Project documentation
└── src/
    ├── main.js              # Application bootstrapper & event delegation
    ├── data/
    │   ├── initialState.js  # Campus data models, listings, users & perks
    │   └── icons.js         # Semantic vector SVG icon & illustration catalog
    ├── state/
    │   └── store.js         # Reactive store with localStorage persistence & coin ledger
    ├── styles/
    │   └── main.css         # CSS design system (tokens, themes, cards, modals, grid)
    └── components/
        ├── Header.js        # Persona switcher, branding, coins pill & theme toggle
        ├── Hero.js          # Circular stats & mission hero
        ├── FilterBar.js     # Search bar, category chips, rent/buy toggle & sort
        ├── ItemCard.js      # Marketplace card with category colors & condition tags
        ├── MarketplaceView.js# Main marketplace browser
        ├── ItemDetailModal.js# Deep specs modal with campus station location
        ├── CheckoutModal.js # Days slider, coin discount calculator & checkout
        ├── OrderSuccessModal.js# Digital Pickup Pass & simulated QR code
        ├── ListItemModal.js # Listing creation with faculty moderation rules
        ├── ProfileView.js   # User dashboard: orders, listings, perks, moderation
        ├── PerksView.js     # Campus Perks Store & coin exchange
        ├── ChatModal.js     # Peer-to-peer pickup coordination messenger
        ├── LoginModal.js    # Quick persona login & custom auth
        └── Footer.js        # Sustainability policy & campus hub disclosures
```

---

## 📄 License
MIT License. Built for the Campus Circular Economy Initiative.
