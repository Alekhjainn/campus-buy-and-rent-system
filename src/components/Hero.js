/**
 * CampusLoop Hero Component
 * Displays circular campus mission, live circular metrics, and callouts
 */

import { renderIcon } from '../data/icons.js';

export function renderHero(state) {
  const activeItemsCount = state.items.filter(i => i.status === 'live').length;
  const totalOrders = state.orders.length;
  const totalCirculatingCoins = Object.values(state.users).reduce((sum, u) => sum + (u.coins || 0), 0);
  const estCO2SavedKg = Math.round((activeItemsCount * 4.2) + (totalOrders * 8.6));

  return `
    <section class="hero">
      <div class="wrap">
        <div class="hero-eyebrow">
          <i></i> The Official Campus Circular Economy
        </div>
        <h1 class="display-title">
          Good things,
          <span>keep moving.</span>
        </h1>

        <div class="hero-meta-row">
          <p class="hero-lead">
            A trusted peer-to-peer ecosystem for students and faculty to borrow, rent, and pass on textbooks, tech, and dorm essentials with zero waste.
          </p>

          <div class="hero-stats-banner">
            <div class="h-stat-item">
              <span class="h-stat-num">${activeItemsCount}</span>
              <span class="h-stat-label">Active Items</span>
            </div>
            <div class="h-stat-item">
              <span class="h-stat-num">${totalCirculatingCoins}</span>
              <span class="h-stat-label">Coins Circulating</span>
            </div>
            <div class="h-stat-item">
              <span class="h-stat-num">${estCO2SavedKg} kg</span>
              <span class="h-stat-label">Est. CO₂ Diverted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
