/**
 * CampusLoop FilterBar Component
 * Search, category pills, rent/buy toggle, and sorting controls
 */

import { CATEGORIES } from '../data/initialState.js';
import { renderIcon } from '../data/icons.js';

export function renderFilterBar(state) {
  const { searchQuery, selectedCategory, selectedType, selectedSort } = state.ui;

  return `
    <div class="filters-section">
      <div class="wrap">
        <div class="filters-row">
          <div class="search-bar">
            ${renderIcon('search')}
            <input 
              id="search-input" 
              type="search" 
              placeholder="Search items, textbooks, equipment, sellers..." 
              value="${searchQuery.replace(/"/g, '&quot;')}"
              autocomplete="off"
            />
            ${searchQuery ? `
              <button class="search-clear-btn" data-action="clear-search" title="Clear search">
                ${renderIcon('close')}
              </button>
            ` : ''}
          </div>

          <div class="filter-controls">
            <div class="type-toggle" role="group" aria-label="Transaction Type">
              <button class="type-toggle-btn ${selectedType === 'all' ? 'active' : ''}" data-action="set-type" data-type="all">All</button>
              <button class="type-toggle-btn ${selectedType === 'rent' ? 'active' : ''}" data-action="set-type" data-type="rent">Rent</button>
              <button class="type-toggle-btn ${selectedType === 'buy' ? 'active' : ''}" data-action="set-type" data-type="buy">Buy</button>
            </div>

            <div class="custom-select">
              <select id="sort-select" data-action="set-sort">
                <option value="recommended" ${selectedSort === 'recommended' ? 'selected' : ''}>Recommended</option>
                <option value="price-asc" ${selectedSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-desc" ${selectedSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${selectedSort === 'rating' ? 'selected' : ''}>Highest Rated Sellers</option>
              </select>
              ${renderIcon('chevronDown')}
            </div>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="category-pills">
          ${CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return `
              <button class="cat-pill ${isSelected ? 'active' : ''}" data-action="set-category" data-cat="${cat.id}">
                ${renderIcon(cat.icon)}
                <span>${cat.name}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
