/**
 * CampusLoop ChatModal Component
 * Peer-to-peer message thread to coordinate campus pickup & return handoffs
 */

import { renderIcon } from '../data/icons.js';
import { store } from '../state/store.js';

export function renderChatModal(orderId) {
  const state = store.getState();
  const currentUser = store.getCurrentUser();
  const order = state.orders.find(o => o.id === orderId);
  const thread = state.messages[orderId] || [];

  return `
    <div class="modal-sheet" role="dialog" aria-labelledby="chat-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${renderIcon('close')}
      </button>

      <div class="modal-header">
        <div style="font-family: var(--mono); font-size: 0.75rem; color: var(--green-text); font-weight: 700; text-transform: uppercase;">
          Peer Coordination &bull; ${orderId}
        </div>
        <h2 id="chat-modal-title" style="margin-top: 4px; font-size: 1.4rem;">
          ${order ? escapeHtml(order.title) : 'Campus Handshake'}
        </h2>
        <p class="lead" style="margin-bottom: 8px;">
          ${order ? `Station: ${escapeHtml(order.location)}` : 'Coordinate meetup details.'}
        </p>
      </div>

      <div class="chat-container">
        <div class="chat-history" id="chat-history">
          ${thread.map(msg => {
            const isMe = currentUser && msg.sender === currentUser.name;
            const bubbleClass = msg.role === 'system' ? 'system' : (isMe ? 'renter' : 'seller');
            return `
              <div class="chat-bubble ${bubbleClass}">
                <div style="font-size: 0.6875rem; opacity: 0.75; margin-bottom: 2px;">
                  ${escapeHtml(msg.sender)} &bull; ${msg.time}
                </div>
                <div>${escapeHtml(msg.text)}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Quick Prompts -->
        <div class="quick-prompts">
          <button class="prompt-chip" data-action="quick-reply" data-text="I am heading to the pickup station now!">
            Heading there now!
          </button>
          <button class="prompt-chip" data-action="quick-reply" data-text="Can we meet at 2:30 PM today?">
            Meet at 2:30 PM?
          </button>
          <button class="prompt-chip" data-action="quick-reply" data-text="Left the item with the library desk attendant. Thank you!">
            Left with desk
          </button>
        </div>

        <!-- Input Bar -->
        <form id="chat-send-form" data-order-id="${orderId}" class="chat-input-bar">
          <input 
            id="chat-input" 
            type="text" 
            placeholder="Type a message to peer..." 
            autocomplete="off" 
            required 
          />
          <button type="submit" class="btn btn-sm btn-lime" style="border-radius: 0; padding: 0 16px;">
            Send
          </button>
        </form>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
