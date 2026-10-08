/**
 * CampusLoop PerksView Component
 * Dedicated page for Campus Circular Tokenomics & Perks Store
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderPerksView(state) {
  const currentUser = store.getCurrentUser();
  const coinsBalance = currentUser?.coins || 0;
  const userRedemptions = currentUser ? state.redeemedPerks.filter(r => r.userId === currentUser.key) : [];

  return `
    <main class="wrap" style="padding: 48px 0 96px;">
      <!-- Hero Banner for Perks -->
      <div style="background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.25); border-radius: var(--radius-lg); padding: clamp(28px, 5vw, 44px); margin-bottom: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
          <div style="max-width: 640px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; color: var(--coin); font-weight: 700; background: rgba(165,100,16,0.12); padding: 4px 10px; border-radius: var(--radius-pill); margin-bottom: 12px;">
              ${renderIcon('spark')} Circular Economy Rewards
            </div>
            <h1 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.04em; margin: 0 0 12px; color: var(--ink);">
              Turn your circular habits into real campus perks.
            </h1>
            <p style="margin: 0; color: var(--ink-secondary); font-size: 1.0625rem; line-height: 1.6;">
              Every time you lend, borrow, or buy second-hand on CampusLoop, you earn <strong>1 Campus Coin per $1</strong>. Use coins for instant checkout discounts (10 coins = $1 off) or redeem them below for campus-sponsored amenities.
            </p>
          </div>

          <div style="background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px 28px; text-align: center; box-shadow: var(--shadow-sm); min-width: 220px;">
            <div style="font-family: var(--mono); font-size: 0.75rem; color: var(--muted); text-transform: uppercase;">
              Your Active Balance
            </div>
            <div style="font-size: 3rem; font-weight: 800; color: var(--coin); line-height: 1.1; margin: 6px 0;">
              ${coinsBalance}
            </div>
            <div style="font-size: 0.8125rem; color: var(--muted);">Campus Coins</div>
          </div>
        </div>
      </div>

      <!-- Active Claimed Vouchers -->
      ${userRedemptions.length > 0 ? `
        <div style="margin-bottom: 48px;">
          <h2 style="font-size: 1.5rem; letter-spacing: -0.03em; margin: 0 0 14px;">Your Active Reward Vouchers</h2>
          <div class="table-card">
            ${userRedemptions.map(r => `
              <div class="profile-item-row">
                <div class="p-row-grow">
                  <div class="p-row-title">${escapeHtml(r.title)}</div>
                  <div class="p-row-sub">Claimed on ${new Date(r.date).toLocaleDateString()} &bull; Present at campus vendor</div>
                </div>
                <div class="order-pass-pill" style="font-size:1.1rem; color:var(--green-text); font-weight:800;">
                  ${r.voucherCode}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Perks Catalog -->
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
        <div>
          <h2 style="font-size: 1.6rem; letter-spacing: -0.03em; margin: 0 0 4px;">Available Campus Perks</h2>
          <p style="color: var(--muted); margin: 0; font-size: 0.9375rem;">
            Redeem directly using your balance. Vouchers are saved to your dashboard.
          </p>
        </div>
      </div>

      <div class="perks-grid">
        ${state.perks.map(perk => {
          const canAfford = coinsBalance >= perk.cost;
          return `
            <div class="perk-card">
              <div class="perk-icon-wrap">
                ${renderIcon(perk.icon || 'gift')}
              </div>
              <div style="font-size: 0.75rem; font-family: var(--mono); color: var(--muted); text-transform: uppercase; margin-bottom: 4px;">
                ${perk.category}
              </div>
              <h3 style="margin: 0 0 8px; font-size: 1.2rem; font-weight: 700;">
                ${escapeHtml(perk.title)}
              </h3>
              <p style="margin: 0 0 18px; color: var(--muted); font-size: 0.9375rem; line-height: 1.5; flex: 1;">
                ${escapeHtml(perk.desc)}
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line); padding-top: 16px;">
                <span class="perk-cost-tag" style="font-size: 1.1rem;">${perk.cost} coins</span>
                <button 
                  class="btn btn-sm ${canAfford ? 'btn-lime' : 'btn-ghost'}" 
                  data-action="redeem-perk" 
                  data-perk-id="${perk.id}"
                  ${!canAfford ? 'disabled title="Collect more coins on checkouts"' : ''}
                >
                  ${canAfford ? 'Redeem Perk' : 'Need more coins'}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </main>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
