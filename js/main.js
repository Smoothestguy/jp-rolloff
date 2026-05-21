/* ============================================================
   JP Roll-Off Service — main.js
   Nav scroll state, mobile menu, language toggle, form, stats counter
   ============================================================ */

(() => {
  'use strict';

  // ---------- NAV: scroll state ----------
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- NAV: mobile menu ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navEl = document.querySelector('.nav');
  if (navToggle && navEl) {
    navToggle.addEventListener('click', () => {
      const isOpen = navEl.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on link click
    document.querySelectorAll('.nav-mobile a').forEach(a => {
      a.addEventListener('click', () => {
        navEl.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- LANGUAGE TOGGLE (EN / ES) ----------
  // Stored client-side; full i18n later as Phase 2.
  const langToggles = document.querySelectorAll('[data-lang-toggle]');
  const storedLang = localStorage.getItem('jp-lang') || 'EN';

  const applyLang = (lang) => {
    document.documentElement.lang = lang === 'ES' ? 'es' : 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
      const en = el.getAttribute('data-en');
      const es = el.getAttribute('data-es');
      if (lang === 'ES' && es) el.textContent = es;
      else if (en) el.textContent = en;
    });
    langToggles.forEach(t => {
      const enLabel = t.querySelector('[data-lang="EN"]');
      const esLabel = t.querySelector('[data-lang="ES"]');
      if (enLabel) enLabel.classList.toggle('lang-active', lang === 'EN');
      if (esLabel) esLabel.classList.toggle('lang-active', lang === 'ES');
    });
    localStorage.setItem('jp-lang', lang);
  };

  applyLang(storedLang);
  langToggles.forEach(t => {
    t.addEventListener('click', () => {
      const current = localStorage.getItem('jp-lang') || 'EN';
      applyLang(current === 'EN' ? 'ES' : 'EN');
    });
  });

  // ---------- SCROLL REVEAL ----------
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- STATS COUNTER ----------
  const stats = document.querySelectorAll('[data-count]');
  if (stats.length && 'IntersectionObserver' in window) {
    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)).toLocaleString() + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          sio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(el => sio.observe(el));
  }

  // ---------- QUICK QUOTE FORM ----------
  const form = document.querySelector('[data-quote-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // Build mailto fallback until a backend is wired up
      const body = encodeURIComponent(
        `Name: ${data.name || ''}\n` +
        `Phone: ${data.phone || ''}\n` +
        `Email: ${data.email || ''}\n` +
        `Service Address: ${data.address || ''}\n` +
        `Dumpster Size: ${data.size || ''}\n` +
        `Delivery Date: ${data.date || ''}\n` +
        `Project Details: ${data.notes || ''}\n`
      );
      window.location.href = `mailto:office@jprolloff.com?subject=Quote%20Request%20-%20${encodeURIComponent(data.name || 'Web')}&body=${body}`;

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Opening your email…';
        setTimeout(() => { btn.textContent = original; }, 4000);
      }
    });
  }

  // ---------- CURRENT YEAR ----------
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
