/**
 * CampusLoop ListItemModal Component
 * Form for listing items with role moderation disclosures, pickup locations, and presets
 */

import { CATEGORIES, CAMPUS_LOCATIONS } from '../data/initialState.js';
import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderListItemModal(formData = {}) {
  const currentUser = store.getCurrentUser();
  const isFaculty = currentUser?.role === 'Faculty';
  const type = formData.type || 'rent';

  return `
    <div class="modal-sheet modal-lg" role="dialog" aria-labelledby="list-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${renderIcon('close')}
      </button>

      <div class="modal-header">
        <h2 id="list-modal-title">List an Item on CampusLoop</h2>
        <p class="lead">
          ${isFaculty 
            ? 'As a verified Faculty member, your listing will be published immediately.'
            : 'Student listings undergo brief faculty peer review before going live to maintain campus trust.'}
        </p>
      </div>

      <form id="list-item-form">
        <div class="form-field">
          <label class="form-label" for="item-title">Item Title *</label>
          <input 
            id="item-title" 
            class="form-input" 
            placeholder="e.g. Organic Chemistry 8th Edition, Sony Wireless Headphones" 
            required 
            maxlength="80" 
            value="${escapeHtml(formData.title || '')}"
          />
        </div>

        <div class="form-row-2">
          <div class="form-field">
            <label class="form-label" for="item-category">Category *</label>
            <select id="item-category" class="form-select">
              ${CATEGORIES.filter(c => c.id !== 'all').map(c => `
                <option value="${c.id}" ${formData.cat === c.id ? 'selected' : ''}>${c.name}</option>
              `).join('')}
            </select>
          </div>

          <div class="form-field">
            <label class="form-label" for="item-condition">Item Condition *</label>
            <select id="item-condition" class="form-select">
              <option value="Like New">Like New (Mint / Unused)</option>
              <option value="Excellent" selected>Excellent (Gently used)</option>
              <option value="Good">Good (Normal minor wear)</option>
              <option value="Fair">Fair (Fully functional)</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">Transaction Format *</label>
          <div class="type-toggle" style="width: 100%; display: grid; grid-template-columns: 1fr 1fr;">
            <button 
              type="button" 
              class="type-toggle-btn ${type === 'rent' ? 'active' : ''}" 
              data-action="form-set-type" 
              data-type="rent"
            >
              Rent out (Per Day)
            </button>
            <button 
              type="button" 
              class="type-toggle-btn ${type === 'buy' ? 'active' : ''}" 
              data-action="form-set-type" 
              data-type="buy"
            >
              Sell permanently
            </button>
          </div>
        </div>

        <div class="form-row-2">
          <div class="form-field">
            <label class="form-label" for="item-price">
              ${type === 'rent' ? 'Daily Rental Price ($) *' : 'Selling Price ($) *'}
            </label>
            <input 
              id="item-price" 
              class="form-input" 
              type="number" 
              min="1" 
              step="0.5" 
              placeholder="10" 
              required 
              value="${formData.price || ''}"
            />
          </div>

          <div class="form-field">
            <label class="form-label" for="item-deposit">
              ${type === 'rent' ? 'Refundable Security Deposit ($)' : 'Original Retail Value ($)'}
            </label>
            <input 
              id="item-deposit" 
              class="form-input" 
              type="number" 
              min="0" 
              step="1" 
              placeholder="${type === 'rent' ? '20' : '80'}" 
              value="${formData.deposit || ''}"
            />
          </div>
        </div>

        <div class="form-field">
          <label class="form-label" for="item-location">Campus Pickup Point *</label>
          <select id="item-location" class="form-select">
            ${CAMPUS_LOCATIONS.map(loc => `
              <option value="${loc}">${loc}</option>
            `).join('')}
          </select>
        </div>

        <div class="form-field">
          <label class="form-label" for="item-desc">Description &amp; Included Accessories *</label>
          <textarea 
            id="item-desc" 
            class="form-textarea" 
            placeholder="Details about condition, cables or bags included, exam clearance notes..." 
            required 
            maxlength="240"
          >${escapeHtml(formData.desc || '')}</textarea>
        </div>

        <div id="list-form-error" style="color: var(--danger); font-size: 0.875rem; margin-bottom: 12px; display: none;"></div>

        <div style="display: flex; gap: 10px; margin-top: 24px;">
          <button type="button" class="btn btn-ghost" style="flex: 1;" data-action="close-modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-lime" style="flex: 2;">
            ${isFaculty ? 'Publish Listing' : 'Submit for Faculty Review'} ${renderIcon('arrowRight')}
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
