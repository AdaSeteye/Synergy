(function () {
  'use strict';

  // Header scroll state
  var header = document.querySelector('.header');
  var lastScroll = 0;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (y > 80) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
      document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
    });

    // Close nav when clicking a link (anchor)
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links (enhance native scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form submit (placeholder: replace with your backend or Formspree etc.)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Example: send to Formspree or your API
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = 'Message sent';
        form.reset();
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      }, 800);
    });
  }
})();
