/**
 * CampusLoop Header Component
 * Top bar with role switcher, navigation, coins wallet, theme toggle & account controls
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderHeader(state) {
  const currentUser = store.getCurrentUser();
  const activeView = state.ui.view;
  const pendingCount = state.items.filter(i => i.status === 'pending').length;
  const isFaculty = currentUser?.role === 'Faculty';
  const theme = state.theme;

  return `
    <!-- Fast Demo Account Switcher Strip -->
    <div class="demo-bar">
      <div class="wrap demo-bar-in">
        <div class="demo-left">
          <span class="demo-badge">Active Role</span>
          <span>${currentUser ? `${currentUser.name} (${currentUser.role})` : 'Guest'}</span>
        </div>
        <div class="demo-switcher">
          <span style="font-size:0.75rem; color:var(--muted); margin-right:4px;">Switch Demo Persona:</span>
          <button class="demo-user-btn ${currentUser?.key === 'student' ? 'active' : ''}" data-action="switch-user" data-user="student">
            Alex Morgan (Student)
          </button>
          <button class="demo-user-btn ${currentUser?.key === 'faculty' ? 'active' : ''}" data-action="switch-user" data-user="faculty">
            Dr. Sam Rivera (Faculty Reviewer)
          </button>
          <button class="demo-user-btn ${currentUser?.key === 'student2' ? 'active' : ''}" data-action="switch-user" data-user="student2">
            Maya Chen (Senior Student)
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="header">
      <div class="wrap header-in">
        <button class="brand" data-action="nav" data-view="market" aria-label="CampusLoop Home">
          <span class="brand-mark">${renderIcon('mark')}</span>
          <span>Loop<span class="dot">.</span><span class="campus">campus</span></span>
        </button>

        <nav class="nav" aria-label="Primary Navigation">
          <button class="nav-link ${activeView === 'market' ? 'active' : ''}" data-action="nav" data-view="market">
            Marketplace
          </button>
          <button class="nav-link ${activeView === 'perks' ? 'active' : ''}" data-action="nav" data-view="perks">
            Campus Perks Store
          </button>
          <button class="nav-link ${activeView === 'profile' ? 'active' : ''}" data-action="nav" data-view="profile">
            My Dashboard
            ${isFaculty && pendingCount > 0 ? `<span class="nav-badge" title="${pendingCount} listings awaiting review">${pendingCount} review</span>` : ''}
          </button>
        </nav>

        <div class="header-right">
          ${currentUser ? `
            <button class="coins-badge" data-action="nav" data-view="perks" title="Your Campus Coins balance (10 coins = $1 discount)">
              ${renderIcon('coin')}
              <span>${currentUser.coins || 0} coins</span>
            </button>
          ` : ''}

          <button class="btn btn-sm btn-lime" data-action="open-list-modal">
            ${renderIcon('plus')} List an Item
          </button>

          <button class="theme-btn" data-action="toggle-theme" title="Toggle Light / Dark mode" aria-label="Toggle Theme">
            ${theme === 'dark' ? renderIcon('sun') : renderIcon('moon')}
          </button>

          ${currentUser ? `
            <button class="user-avatar-btn" data-action="nav" data-view="profile" title="${currentUser.name} (${currentUser.role})">
              ${currentUser.avatar}
            </button>
          ` : `
            <button class="btn btn-sm btn-ghost" data-action="open-login-modal">Sign in</button>
          `}
        </div>
      </div>
    </header>
  `;
}
