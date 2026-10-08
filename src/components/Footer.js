/**
 * CampusLoop Footer Component
 */

import { renderIcon } from '../data/icons.js';

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="wrap footer-in">
        <div class="footer-left">
          <div style="font-weight: 700; color: var(--ink); display: flex; align-items: center; gap: 6px;">
            <span>Loop<span style="color:var(--green-text);">.</span>campus</span>
          </div>
          <span class="footer-pill">${renderIcon('leaf')} Certified Circular Campus Hub</span>
        </div>

        <div style="display: flex; gap: 20px; font-size: 0.8125rem; flex-wrap: wrap;">
          <span>Zero Electronic Waste Policy</span>
          <span>Faculty Review Standards</span>
          <span>Station Attendant Protocol</span>
        </div>

        <div style="font-size: 0.75rem; color: var(--muted); font-family: var(--mono);">
          v2.0 Production Build &bull; Campus Circular Economy Initiative
        </div>
      </div>
    </footer>
  `;
}
