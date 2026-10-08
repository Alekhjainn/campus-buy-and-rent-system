/**
 * CampusLoop LoginModal Component
 * Account sign-in with fast demo credentials & role switcher
 */

import { renderIcon } from '../data/icons.js';
import { USERS } from '../data/initialState.js';

export function renderLoginModal(data = {}) {
  const note = data.note || 'Sign in to access your wallet, reserve items, and manage campus listings.';

  return `
    <div class="modal-sheet" role="dialog" aria-labelledby="login-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${renderIcon('close')}
      </button>

      <div class="modal-header">
        <h2 id="login-modal-title">Sign in to CampusLoop</h2>
        <p class="lead">${escapeHtml(note)}</p>
      </div>

      <!-- Quick Demo Account Picker -->
      <div style="background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 0.75rem; font-family: var(--mono); text-transform: uppercase; color: var(--muted); margin-bottom: 10px; font-weight: 700;">
          Instant One-Click Demo Personas:
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button class="btn btn-ghost" style="justify-content: flex-start; text-align: left; padding: 10px 14px;" data-action="fast-login" data-user="student">
            <span style="font-weight: 700;">Alex Morgan</span>
            <span style="color: var(--muted); font-size: 0.8125rem; margin-left: auto;">Student (Biology) &bull; 65 Coins</span>
          </button>
          <button class="btn btn-ghost" style="justify-content: flex-start; text-align: left; padding: 10px 14px;" data-action="fast-login" data-user="faculty">
            <span style="font-weight: 700;">Dr. Sam Rivera</span>
            <span style="color: var(--green-text); font-size: 0.8125rem; margin-left: auto;">Faculty Moderator &bull; 140 Coins</span>
          </button>
          <button class="btn btn-ghost" style="justify-content: flex-start; text-align: left; padding: 10px 14px;" data-action="fast-login" data-user="student2">
            <span style="font-weight: 700;">Maya Chen</span>
            <span style="color: var(--muted); font-size: 0.8125rem; margin-left: auto;">Senior Student (CS) &bull; 110 Coins</span>
          </button>
        </div>
      </div>

      <!-- Standard Form -->
      <form id="email-login-form">
        <div class="form-field">
          <label class="form-label" for="login-email">Campus Email</label>
          <input 
            id="login-email" 
            class="form-input" 
            type="email" 
            placeholder="alex.morgan@campus.edu" 
            value="${USERS.student.email}" 
            required 
          />
        </div>

        <div class="form-field">
          <label class="form-label" for="login-password">Password</label>
          <input 
            id="login-password" 
            class="form-input" 
            type="password" 
            value="${USERS.student.password}" 
            required 
          />
        </div>

        <div id="login-error" style="color: var(--danger); font-size: 0.875rem; margin-bottom: 12px; display: none;"></div>

        <div style="display: flex; gap: 10px; margin-top: 18px;">
          <button type="button" class="btn btn-ghost" style="flex: 1;" data-action="close-modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-lime" style="flex: 1;">
            Sign in ${renderIcon('arrowRight')}
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
