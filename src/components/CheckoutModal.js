/**
 * CampusLoop CheckoutModal Component
 * Interactive checkout with days calculator, coin discounts, deposit calculation, and instant booking
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderCheckoutModal(item, currentDays = 1, useCoinsChecked = false) {
  if (!item) return '';

  const currentUser = store.getCurrentUser();
  const isRent = item.type === 'rent';
  const coinsBalance = currentUser?.coins || 0;

  const days = Math.max(1, Math.min(14, currentDays));
  const baseSubtotal = isRent ? item.price * days : item.price;

  // 10 coins = $1
  const maxCoinsUsable = Math.min(coinsBalance, Math.floor(baseSubtotal * 10));
  const actualCoinsUsed = useCoinsChecked ? maxCoinsUsable : 0;
  const coinDiscount = Math.round((actualCoinsUsed / 10) * 100) / 100;

  const subtotalAfterCoins = Math.max(0, baseSubtotal - coinDiscount);
  const deposit = isRent ? (item.deposit || 0) : 0;
  const grandTotal = Math.round((subtotalAfterCoins + deposit) * 100) / 100;
  const coinsEarned = Math.floor(subtotalAfterCoins);

  // Return date
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + days);

  return `
    <div class="modal-sheet" role="dialog" aria-labelledby="co-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${renderIcon('close')}
      </button>

      <div class="modal-header">
        <div style="font-family: var(--mono); font-size: 0.75rem; color: var(--green-text); font-weight: 700; text-transform: uppercase;">
          Checkout &amp; Pickup Pass
        </div>
        <h2 id="co-modal-title" style="margin-top: 4px;">${escapeHtml(item.title)}</h2>
        <p class="lead">From ${escapeHtml(item.seller)} &bull; Pick up at ${escapeHtml(item.location)}</p>
      </div>

      <form id="checkout-form" data-item-id="${item.id}">
        ${isRent ? `
          <div class="form-field">
            <label class="form-label" for="co-days-input">
              Rental Duration: <span id="co-days-display" style="color:var(--green-text);">${days} day${days > 1 ? 's' : ''}</span>
            </label>
            <div style="display: flex; align-items: center; gap: 12px;">
              <input 
                id="co-days-input" 
                class="form-input" 
                type="range" 
                min="1" 
                max="14" 
                value="${days}" 
                style="flex: 1;"
              />
              <span class="mono" style="font-weight: 700; min-width: 48px; text-align: right;">${days} d</span>
            </div>
            <div class="form-hint">
              Due back by: <strong>${returnDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</strong>
            </div>
          </div>
        ` : ''}

        ${coinsBalance > 0 ? `
          <div style="margin: 16px 0; padding: 12px; background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.2); border-radius: var(--radius-sm);">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                id="co-use-coins" 
                ${useCoinsChecked ? 'checked' : ''} 
                style="width: 18px; height: 18px; accent-color: var(--green);"
              />
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 0.875rem; color: var(--coin);">
                  Apply Campus Coins
                </div>
                <div style="font-size: 0.75rem; color: var(--ink-secondary);">
                  Wallet balance: ${coinsBalance} coins &bull; Max redemption: ${maxCoinsUsable} coins (-$${(maxCoinsUsable/10).toFixed(2)})
                </div>
              </div>
            </label>
          </div>
        ` : ''}

        <!-- Live Cost Breakdown -->
        <div class="checkout-summary-box">
          <div class="checkout-row">
            <span>${isRent ? `$${item.price} &times; ${days} day${days > 1 ? 's' : ''}` : 'Item Price'}</span>
            <span>$${baseSubtotal.toFixed(2)}</span>
          </div>

          ${coinDiscount > 0 ? `
            <div class="checkout-row coins-applied">
              <span>Coins Discount (${actualCoinsUsed} coins)</span>
              <span>-$${coinDiscount.toFixed(2)}</span>
            </div>
          ` : ''}

          ${isRent && deposit > 0 ? `
            <div class="checkout-row">
              <span title="Fully refunded when returned on time in good condition">Refundable Deposit</span>
              <span>+$${deposit.toFixed(2)}</span>
            </div>
          ` : ''}

          <div class="checkout-row total-row">
            <span>Total Payable</span>
            <span>$${grandTotal.toFixed(2)}</span>
          </div>

          <div class="checkout-row" style="margin-top: 8px; font-family: var(--mono); font-size: 0.8125rem; color: var(--green-text);">
            <span>Reward on this order:</span>
            <span>+${coinsEarned} coins</span>
          </div>
        </div>

        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-ghost" style="flex: 1;" data-action="close-modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-lime" style="flex: 2;">
            Confirm &amp; Generate Pickup Pass ${renderIcon('arrowRight')}
          </button>
        </div>
      </form>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
