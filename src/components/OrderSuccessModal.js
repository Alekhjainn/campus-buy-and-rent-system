/**
 * CampusLoop OrderSuccessModal Component
 * Digital receipt & Campus Pickup Pass with simulated QR verification
 */

import { renderIcon } from '../data/icons.js';

export function renderOrderSuccessModal(order, item) {
  if (!order) return '';

  return `
    <div class="modal-sheet" role="dialog" aria-labelledby="success-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${renderIcon('close')}
      </button>

      <div class="modal-header" style="text-align: center;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: var(--green-text); display: grid; place-items: center; margin: 0 auto 12px;">
          ${renderIcon('check')}
        </div>
        <h2 id="success-modal-title">Order Confirmed!</h2>
        <p class="lead" style="margin-bottom: 12px;">
          Your campus reservation for <strong>${escapeHtml(order.title)}</strong> is active.
        </p>
      </div>

      <!-- Campus Pickup Pass Card -->
      <div class="pass-card">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; color: var(--green-text);">
          ${renderIcon('qr')}
          <span>Campus Pickup Verification Pass</span>
        </div>

        <div class="pass-code">${order.pickupPass}</div>

        <div style="font-size: 0.875rem; color: var(--ink-secondary); line-height: 1.4;">
          Show this code to the desk attendant or seller at:<br/>
          <strong>${escapeHtml(order.location)}</strong>
        </div>

        ${order.returnDueDate ? `
          <div style="margin-top: 12px; font-size: 0.8125rem; color: var(--muted); border-top: 1px dashed var(--line-strong); padding-top: 8px;">
            Return due by: <strong>${new Date(order.returnDueDate).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</strong>
          </div>
        ` : ''}
      </div>

      <!-- Rewards Banner -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.2); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 8px; color: var(--coin); font-weight: 600;">
          ${renderIcon('coin')}
          <span>Coins Earned</span>
        </div>
        <div style="font-family: var(--mono); font-weight: 700; color: var(--coin);">
          +${order.coinsEarned} coins
        </div>
      </div>

      <div style="display: flex; gap: 10px;">
        <button class="btn btn-ghost" style="flex: 1;" data-action="open-chat-modal" data-order-id="${order.id}">
          ${renderIcon('chat')} Message Seller
        </button>
        <button class="btn btn-lime" style="flex: 1;" data-action="nav" data-view="profile">
          View in Dashboard
        </button>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
