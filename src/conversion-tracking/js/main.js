// Tab switching for Conversion Tracking Page
function switchTab(index, el) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const content = {
    titles: [
      'Meta Pixel & CAPI',
      'Google Ads Conversion Tracking',
      'TikTok Pixel & Events API',
      'Pinterest Tag Integration',
      'Snapchat Pixel Tracking',
      'Custom Event Tracking'
    ],
    descs: [
      'Track PageViews, AddToCart, and Purchases with 100% accuracy using Meta Conversions API (CAPI) alongside the standard Pixel.',
      'Send accurate conversion data to Google Ads to optimize your bidding and improve your ROAS with enhanced conversions and server-side tracking.',
      'Capture every event on TikTok with the latest Pixel and Events API integration. Track complete customer journeys from discovery to purchase.',
      'Reach your audience on Pinterest with precise tracking. Measure the impact of your Pins and optimize your shopping campaigns for better performance.',
      'Grow your brand on Snapchat by tracking app and web conversions. Use server-side events to ensure no data is lost to privacy restrictions.',
      'Need to track something unique? Set up custom events for any action on your store, from newsletter signups to specific button clicks.'
    ]
  };

  const titleEl = document.querySelector('.tab-panel-text h3');
  const descEl = document.querySelector('.tab-panel-text p');

  if (titleEl && descEl) {
    titleEl.textContent = content.titles[index];
    descEl.textContent = content.descs[index];
  }
}

// FAQ accordion
function toggleFaq(trigger) {
  const item = trigger.parentElement;
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Attach to window for global access
window.switchTab = switchTab;
window.toggleFaq = toggleFaq;
