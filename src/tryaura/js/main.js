// Tab switching
function switchTab(index, el) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const content = {
    titles: [
      'Try On Clothing',
      'Try On Accessories',
      'Product in Hand',
      'Change Model',
      'Change Background',
      'Product Videos'
    ],
    descs: [
      'Show how clothing items look on different body types, with realistic draping and fit, all without a photoshoot.',
      'Show how accessories like glasses, watches, or jewelry look when worn, without needing new photoshoots.',
      'Display your product being held or used in a realistic hand to add context and scale to your listings.',
      'Swap the model in your product photos to represent different demographics and reach broader audiences.',
      'Change the background behind your product to match any season, brand style, or campaign theme instantly.',
      'Generate short cinematic product videos that showcase your items moving and in use.'
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

// Attach to window for global access if needed (since they were in onclick)
window.switchTab = switchTab;
window.toggleFaq = toggleFaq;
