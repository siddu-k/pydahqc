/**
 * QUANTUM CODERS // SHARED MOBILE MENU
 * Standalone fullscreen-overlay toggle for pages that do not load the
 * main script.js bundle (event.html). Pages loading script.js already
 * have this behavior — do NOT load both.
 */
(function () {
  var trigger = document.getElementById('menu-trigger');
  var overlay = document.getElementById('mobile-nav-overlay');
  if (!trigger || !overlay) return;

  var closeBtn = document.getElementById('mobile-nav-close');

  function set(open) {
    trigger.classList.toggle('active', open);
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    overlay.classList.toggle('active', open);
    overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    set(!overlay.classList.contains('active'));
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      set(false);
    });
  }

  overlay.querySelectorAll('[data-nav-close]').forEach(function (link) {
    link.addEventListener('click', function () { set(false); });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) set(false);
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) set(false);
  });
})();
