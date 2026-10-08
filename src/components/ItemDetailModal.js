/**
 * CampusLoop ItemDetailModal Component
 * Full modal showing specs, campus pickup spot, seller tier, deposit policy & booking action
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderItemDetailModal(item) {
  if (!item) return '';

  const currentUser = store.getCurrentUser();
  const isOwner = currentUser && item.owner === currentUser.key;
  const isRent = item.type === 'rent';
  const categorySlug = item.cat.toLowerCase();

  return `
    <div class="modal-sheet modal-lg" role="dialog" aria-labelledby="item-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${renderIcon('close')}
      </button>

      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <!-- Left: Image / Visual Thumbnail -->
        <div 
          style="
            flex: 1; 
            min-width: 240px; 
            height: 280px; 
            background: var(--t-${categorySlug}); 
            border-radius: var(--radius-md); 
            display: grid; 
            place-items: center; 
            color: var(--t-${categorySlug}-ink);
            position: relative;
          "
        >
          <span 
            class="badge-tag" 
            style="top: 14px; left: 14px; background: var(--surface); color: var(--t-${categorySlug}-ink);"
          >
            ${item.cat}
          </span>
          <span class="condition-pill" style="top: 14px; right: 14px;">
            ${item.condition || 'Good'} Condition
          </span>
          ${renderIcon(item.icon || 'box')}
        </div>

        <!-- Right: Specifications & Details -->
        <div style="flex: 1.3; min-width: 260px; display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.8125rem; color: var(--orange); font-weight: 700; text-transform: uppercase;">
            <span>${isRent ? 'Campus Rental' : 'Direct Purchase'}</span>
            <span style="color: var(--line-strong);">•</span>
            <span style="color: var(--muted);">${isRent ? 'Per Day Billing' : 'One-Time Payment'}</span>
          </div>

          <h2 id="item-modal-title" style="margin: 8px 0 10px; font-size: 1.6rem; letter-spacing: -0.04em; color: var(--ink);">
            ${escapeHtml(item.title)}
          </h2>

          <p style="margin: 0 0 16px; color: var(--muted); font-size: 0.9375rem; line-height: 1.55;">
            ${escapeHtml(item.details || item.desc)}
          </p>

          <!-- Campus Pickup Point Box -->
          <div style="background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px 14px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.875rem; color: var(--green-text);">
              ${renderIcon('location')}
              <span>Campus Pickup Station</span>
            </div>
            <div style="font-size: 0.8125rem; color: var(--ink-secondary); margin-top: 4px;">
              ${escapeHtml(item.location || 'Central Library - Ground Floor Service Desk')}
            </div>
          </div>

          <!-- Pricing & Deposit Summary -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; padding: 12px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: 16px;">
            <div>
              <div style="font-size: 1.8rem; font-weight: 800; color: var(--ink); line-height: 1;">
                $${item.price}
                <span style="font-size: 0.875rem; font-weight: 500; color: var(--muted);">
                  ${isRent ? '/ day' : ''}
                </span>
              </div>
              ${isRent ? `
                <div style="font-size: 0.75rem; color: var(--muted); margin-top: 4px;">
                  Refundable Security Deposit: $${item.deposit || 0}
                </div>
              ` : ''}
            </div>

            <!-- Seller Credibility Info -->
            <div style="text-align: right;">
              <div style="font-size: 0.875rem; font-weight: 600; color: var(--ink);">
                ${escapeHtml(item.seller)}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; justify-content: flex-end; margin-top: 2px;">
                <span style="font-size: 0.75rem; color: var(--muted);">${item.rating} ★</span>
                <span class="tier-badge ${item.tier}">${item.tier}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div style="display: flex; gap: 10px; margin-top: auto;">
            ${isOwner ? `
              <button class="btn btn-ghost" style="flex: 1;" disabled>This is your listing</button>
            ` : `
              <button class="btn btn-lime" style="flex: 1;" data-action="open-checkout-modal" data-id="${item.id}">
                ${isRent ? 'Reserve Rental' : 'Buy Now'} ${renderIcon('arrowRight')}
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
