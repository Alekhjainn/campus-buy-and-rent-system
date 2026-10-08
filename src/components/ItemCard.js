/**
 * CampusLoop ItemCard Component
 * Displays marketplace item preview with category badge, condition, price, and actions
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderItemCard(item) {
  const currentUser = store.getCurrentUser();
  const isOwner = currentUser && item.owner === currentUser.key;
  const isPending = item.status === 'pending';

  let actionHtml;
  if (isPending) {
    actionHtml = `<span class="pending-review-chip" style="position:static;">Pending Moderation</span>`;
  } else if (isOwner) {
    actionHtml = `<button class="btn btn-sm btn-ghost" disabled>Your item</button>`;
  } else {
    actionHtml = `
      <button class="btn btn-sm" data-action="open-checkout-modal" data-id="${item.id}">
        ${item.type === 'rent' ? 'Rent' : 'Buy'} ${renderIcon('arrowRight')}
      </button>
    `;
  }

  const categorySlug = item.cat.toLowerCase();

  return `
    <article class="card" data-item-id="${item.id}">
      <div 
        class="card-thumb" 
        style="background: var(--t-${categorySlug}); cursor: pointer;" 
        data-action="open-detail-modal" 
        data-id="${item.id}"
        title="View ${item.title} details"
      >
        <span 
          class="badge-tag" 
          style="background: var(--surface); color: var(--t-${categorySlug}-ink);"
        >
          ${item.cat}
        </span>

        ${item.condition ? `
          <span class="condition-pill">${item.condition}</span>
        ` : ''}

        ${isPending ? `
          <span class="pending-review-chip">Pending review</span>
        ` : ''}

        ${renderIcon(item.icon || 'box')}
      </div>

      <div class="card-body">
        <div class="card-type-row">
          <span class="type-label">${item.type === 'rent' ? 'Rent' : 'Buy'}</span>
          ${item.type === 'rent' ? '<span class="unit-label">per day</span>' : '<span class="unit-label">to own</span>'}
        </div>

        <h3 
          class="card-title" 
          style="cursor: pointer;" 
          data-action="open-detail-modal" 
          data-id="${item.id}"
        >
          ${escapeHtml(item.title)}
        </h3>

        <p class="card-desc">${escapeHtml(item.desc)}</p>

        <div class="location-snippet" title="Pickup spot">
          ${renderIcon('location')}
          <span>${escapeHtml(item.location || 'Campus Center')}</span>
        </div>

        <div class="seller-row">
          <span class="seller-avatar">${escapeHtml(item.seller.charAt(0))}</span>
          <span style="display:flex; flex-direction:column;">
            <span>${escapeHtml(item.seller)}</span>
            <span style="font-size:0.75rem; color:var(--muted);">${item.rating ? `${item.rating} ★ (${item.reviewsCount || 5})` : 'Verified Peer'}</span>
          </span>
          <span class="tier-badge ${item.tier}">${item.tier}</span>
        </div>

        <div class="price-action-row">
          <div class="price-block">
            <span class="price-value">$${item.price}</span>
            <span class="price-sub">
              ${item.type === 'rent' ? 'per day + $'+ (item.deposit || 0) +' dep.' : 'one-time purchase'}
            </span>
          </div>

          <div style="display:flex; gap:6px; align-items:center;">
            <button class="btn btn-sm btn-ghost" data-action="open-detail-modal" data-id="${item.id}" title="Quick view">
              Details
            </button>
            ${actionHtml}
          </div>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
