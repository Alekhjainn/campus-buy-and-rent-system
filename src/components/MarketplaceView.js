/**
 * CampusLoop MarketplaceView Component
 * Primary browsing view containing hero, filter bar, and reactive items grid
 */

import { renderHero } from './Hero.js';
import { renderFilterBar } from './FilterBar.js';
import { renderItemCard } from './ItemCard.js';
import { store } from '../state/store.js';

export function renderMarketplaceView(state) {
  const currentUser = store.getCurrentUser();
  const { searchQuery, selectedCategory, selectedType, selectedSort } = state.ui;

  // Filter items
  let items = state.items.filter(item => {
    // Visibility logic: show live items, or pending items to their owner or faculty moderators
    const canSee = item.status === 'live' || 
                   (currentUser && item.owner === currentUser.key) || 
                   (currentUser && currentUser.role === 'Faculty');
    if (!canSee) return false;

    // Category filter
    if (selectedCategory !== 'all' && item.cat !== selectedCategory) return false;

    // Type filter
    if (selectedType !== 'all' && item.type !== selectedType) return false;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const match = (
        (item.title || '').toLowerCase().includes(q) ||
        (item.desc || '').toLowerCase().includes(q) ||
        (item.cat || '').toLowerCase().includes(q) ||
        (item.seller || '').toLowerCase().includes(q) ||
        (item.location || '').toLowerCase().includes(q)
      );
      if (!match) return false;
    }

    return true;
  });

  // Sort items
  items.sort((a, b) => {
    if (selectedSort === 'price-asc') return a.price - b.price;
    if (selectedSort === 'price-desc') return b.price - a.price;
    if (selectedSort === 'rating') return (b.rating || 0) - (a.rating || 0);
    // 'recommended': prioritize live items, then newest
    return b.id - a.id;
  });

  return `
    <main>
      ${renderHero(state)}
      ${renderFilterBar(state)}

      <div class="wrap">
        <div class="section-meta-header">
          <div>
            <div class="sec-kicker">Campus Circular Listings</div>
            <h2 class="sec-title">
              ${selectedCategory === 'all' ? 'All Campus Essentials' : `${selectedCategory} Gear`}
            </h2>
          </div>
          <span class="items-count">${items.length} items available</span>
        </div>

        <section class="cards-grid" aria-label="Campus Listings">
          ${items.length > 0 
            ? items.map(renderItemCard).join('')
            : `
              <div class="empty-state">
                <h3>No items match your criteria</h3>
                <p>Try resetting the search terms or choosing a different category.</p>
                <button class="btn btn-sm btn-ghost" data-action="reset-filters">
                  Reset All Filters
                </button>
              </div>
            `
          }
        </section>
      </div>
    </main>
  `;
}
