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
      const value = (lang === 'ES' && es) ? es : en;
      if (value == null) return;
      if (el.hasAttribute('data-html')) el.innerHTML = value;
      else el.textContent = value;
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
      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      const notes = (data.notes || '') + (data.date ? ' | Requested date: ' + data.date : '');
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, phone: data.phone, email: data.email, address: data.address, size: data.size, notes: notes, source: 'site-form' })
      }).then((r) => {
        if (!r.ok) throw new Error('save failed');
        if (btn) btn.textContent = 'Request sent ✓';
        form.reset();
      }).catch(() => {
        // Fallback: open a prefilled email so the lead still reaches the office.
        const body = encodeURIComponent(
          `Name: ${data.name || ''}\n` +
          `Phone: ${data.phone || ''}\n` +
          `Email: ${data.email || ''}\n` +
          `Service Address: ${data.address || ''}\n` +
          `Dumpster Size: ${data.size || ''}\n` +
          `Delivery Date: ${data.date || ''}\n` +
          `Project Details: ${data.notes || ''}\n`
        );
        window.location.href = `mailto:Office@jprolloff.net?subject=Quote%20Request%20-%20${encodeURIComponent(data.name || 'Web')}&body=${body}`;
        if (btn) btn.textContent = 'Opening your email…';
      }).finally(() => {
        setTimeout(() => { if (btn) { btn.disabled = false; btn.textContent = original; } }, 4000);
      });
    });
  }

  // ---------- TRUCK SCROLL REVEAL ----------
  // Single scrollProgress value (0..1 across the section) drives every animated property.
  // Vehicle x: -150% → 150% over [0.10, 0.80]
  // Headline clip-path inset(0 100% 0 0) → inset(0 0% 0 0) over [0.35, 0.65]
  // Wheel rotation derived from real horizontal travel ÷ wheel circumference.
  const truckSection = document.querySelector('.truck-reveal');
  if (truckSection) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      const headline = truckSection.querySelector('.truck-reveal-headline');
      const vehicle  = truckSection.querySelector('.truck-reveal-vehicle');
      const wheels   = truckSection.querySelectorAll('.truck-wheel');

      const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), hi);
      const lerp  = (a, b, t) => a + (b - a) * t;

      let ticking = false;
      const update = () => {
        const rect  = truckSection.getBoundingClientRect();
        const winH  = window.innerHeight;
        const total = winH + rect.height;
        const t = clamp((winH - rect.top) / total, 0, 1);

        // ---- Truck drives left → right (one pass) ----
        // Travel distance is computed dynamically so the truck always fully crosses
        // the section regardless of viewport width. xPct is expressed as a % of the
        // vehicle's own width (since translate3d uses that as its reference).
        const sectionWidthPx  = truckSection.offsetWidth || 1;
        const vehicleWidthPx2 = vehicle.offsetWidth || 1;
        // Final position: left edge of truck is 10% past the section's right edge.
        const maxXPct = ((sectionWidthPx * 1.10) / vehicleWidthPx2) * 100;
        const tVehicle = clamp((t - 0.05) / 0.85, 0, 1);
        const xPct = lerp(0, maxXPct, tVehicle);
        vehicle.style.transform = `translate3d(${xPct}%, -50%, 0)`;

        // ---- Headline reveal tracks the truck's TRAILING (left) edge ----
        // Only the area the truck has already passed is exposed.
        const leftEdgePx  = (xPct / 100) * vehicleWidthPx2;
        const leftEdgePct = (leftEdgePx / sectionWidthPx) * 100;
        const insetRight  = clamp(100 - leftEdgePct, 0, 100);
        headline.style.clipPath = `inset(0 ${insetRight}% 0 0)`;

        // ---- Wheel rotation tied to current x position ----
        // Real geometry: travelPx / (π × wheelWidth) = rotations
        const vehicleWidthPx = vehicle.offsetWidth || 1;
        const wheelWidthPx   = wheels[0] ? wheels[0].offsetWidth : 1;
        const travelPx       = (xPct / 100) * vehicleWidthPx;
        const circumference  = Math.PI * wheelWidthPx;
        const degrees        = (travelPx / circumference) * 360;
        wheels.forEach(w => { w.style.transform = `rotate(${degrees}deg)`; });

        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      update();
    }
  }

  // ---------- SERVICE AREA MAP (Leaflet + OpenStreetMap) ----------
  const mapEl = document.getElementById('service-map');
  if (mapEl && typeof L !== 'undefined') {
    const HQ = [39.0353, -76.9077]; // Beltsville
    const cities = [
      { name: 'Beltsville (HQ)', coords: [39.0353, -76.9077], hq: true },
      { name: 'Greenbelt',       coords: [39.0046, -76.8755] },
      { name: 'College Park',    coords: [38.9897, -76.9378] },
      { name: 'Laurel',          coords: [39.0993, -76.8483] },
      { name: 'Hyattsville',     coords: [38.9559, -76.9456] },
      { name: 'Bowie',           coords: [38.9437, -76.7300] },
      { name: 'Riverdale Park',  coords: [38.9626, -76.9333] },
      { name: 'Silver Spring',   coords: [38.9907, -77.0261] },
      { name: 'Takoma Park',     coords: [38.9779, -77.0075] },
      { name: 'Landover',        coords: [38.9356, -76.8889] },
      { name: 'Lanham',          coords: [38.9676, -76.8556] },
      { name: 'Cheverly',        coords: [38.9279, -76.9156] },
      { name: 'Bladensburg',     coords: [38.9387, -76.9314] },
      { name: 'Rockville',       coords: [39.0840, -77.1528] },
      { name: 'Upper Marlboro',  coords: [38.8157, -76.7494] }
    ];

    const map = L.map(mapEl, {
      center: HQ,
      zoom: 10,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    });

    // Dark tile theme matching the section's aesthetic (CartoDB Dark Matter — free, no key)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19
    }).addTo(map);

    // Service radius — ~25 mi (40 km) around Beltsville
    L.circle(HQ, {
      radius: 40000,
      color: '#CC0000',
      weight: 2,
      fillColor: '#CC0000',
      fillOpacity: 0.10
    }).addTo(map);

    // Custom markers — red dot for cities, larger red pin for HQ
    const dotIcon = L.divIcon({
      className: 'service-map-marker',
      html: '<span class="service-map-dot"></span>',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
    const hqIcon = L.divIcon({
      className: 'service-map-marker is-hq',
      html: '<span class="service-map-dot"></span>',
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    cities.forEach(c => {
      L.marker(c.coords, { icon: c.hq ? hqIcon : dotIcon, title: c.name })
        .addTo(map)
        .bindTooltip(c.name, { permanent: false, direction: 'top', offset: [0, -8] });
    });
  }

  // ---------- CURRENT YEAR ----------
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ---------- ADDRESS AUTOCOMPLETE (Photon API, no key required) ----------
  document.querySelectorAll('#qf-address, #cf-address, #qm-address').forEach(initAddressAutocomplete);

  function initAddressAutocomplete(input) {
    const wrap = document.createElement('div');
    wrap.className = 'addr-autocomplete';
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);

    const dropdown = document.createElement('ul');
    dropdown.className = 'addr-autocomplete-list';
    dropdown.setAttribute('role', 'listbox');
    dropdown.hidden = true;
    wrap.appendChild(dropdown);

    let debounceTimer;
    let currentResults = [];
    let activeIdx = -1;

    const closeDropdown = () => { dropdown.hidden = true; activeIdx = -1; };

    const formatResult = (feature) => {
      const p = feature.properties || {};
      const parts = [];
      if (p.housenumber && (p.street || p.name)) parts.push(`${p.housenumber} ${p.street || p.name}`);
      else if (p.street) parts.push(p.street);
      else if (p.name) parts.push(p.name);
      const city = p.city || p.town || p.village || p.county;
      if (city) parts.push(city);
      if (p.state) parts.push(p.state);
      if (p.postcode) parts.push(p.postcode);
      return parts.filter(Boolean).join(', ');
    };

    const renderList = (results) => {
      currentResults = results;
      activeIdx = -1;
      dropdown.innerHTML = '';
      if (!results.length) { closeDropdown(); return; }
      results.forEach((r) => {
        const li = document.createElement('li');
        li.className = 'addr-autocomplete-item';
        li.setAttribute('role', 'option');
        li.textContent = r.display;
        li.addEventListener('mousedown', (e) => {
          e.preventDefault();
          input.value = r.display;
          closeDropdown();
        });
        dropdown.appendChild(li);
      });
      dropdown.hidden = false;
    };

    const fetchSuggestions = async (query) => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=8&lang=en&lat=39.0353&lon=-76.9077&zoom=10`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        const results = (data.features || [])
          .filter(f => {
            const p = f.properties || {};
            return p.country === 'United States' || p.countrycode === 'US';
          })
          .map(f => ({ display: formatResult(f) }))
          .filter(r => r.display);
        renderList(results);
      } catch (_) { /* silent — user can still type manually */ }
    };

    input.addEventListener('input', () => {
      const q = input.value.trim();
      clearTimeout(debounceTimer);
      if (q.length < 3) { closeDropdown(); return; }
      debounceTimer = setTimeout(() => fetchSuggestions(q), 250);
    });

    input.addEventListener('keydown', (e) => {
      if (dropdown.hidden) return;
      const items = dropdown.querySelectorAll('.addr-autocomplete-item');
      if (!items.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % items.length;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = (activeIdx - 1 + items.length) % items.length;
      } else if (e.key === 'Enter' && activeIdx >= 0) {
        e.preventDefault();
        input.value = currentResults[activeIdx].display;
        closeDropdown();
        return;
      } else if (e.key === 'Escape') {
        closeDropdown();
        return;
      } else {
        return;
      }
      items.forEach((el, i) => el.classList.toggle('is-active', i === activeIdx));
      const active = items[activeIdx];
      if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest' });
    });

    input.addEventListener('blur', () => setTimeout(closeDropdown, 150));
  }

  // ---------- QUOTE WIZARD MODAL ----------
  const qm = document.getElementById('quote-modal');
  if (qm) {
    const steps = qm.querySelectorAll('[data-qm-step]');
    const bar = qm.querySelector('.qm-progress-bar');
    const FORM_STEPS = 4; // steps before the thank-you screen
    const lead = { size: '', address: '', name: '', phone: '', email: '' };
    let lastFocus = null;
    let scrollLockY = 0;

    const go = (n) => {
      steps.forEach((s) => s.classList.toggle('is-active', s.getAttribute('data-qm-step') === String(n)));
      const num = parseInt(n, 10) || 1; // "2a"/"2b" -> 2 for the progress bar
      if (bar) bar.style.width = (Math.min(num, FORM_STEPS) / FORM_STEPS) * 100 + '%';
      const active = qm.querySelector('.qm-step.is-active');
      const focusable = active && active.querySelector('input, .qm-choice, .qm-size, button');
      if (focusable) { try { focusable.focus(); } catch (e) {} }
    };
    // Robust scroll lock — position:fixed actually holds on iOS Safari, overflow:hidden does not.
    const lockScroll = () => {
      scrollLockY = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + scrollLockY + 'px';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    };
    const unlockScroll = () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollLockY);
    };

    // Keep the modal pinned to the VISIBLE area when the mobile keyboard opens.
    // visualViewport shrinks as the keyboard rises; without this a fixed/centered
    // panel sits behind the keyboard. We size the modal to the visible area and,
    // as a bottom-sheet on mobile, that parks it right above the keyboard.
    const panel = qm.querySelector('.qm-panel');
    const vv = window.visualViewport;
    const fitViewport = () => {
      if (!vv) return;
      qm.style.top = vv.offsetTop + 'px';
      qm.style.bottom = 'auto';
      qm.style.height = vv.height + 'px';
      if (panel) panel.style.maxHeight = (vv.height - 16) + 'px';
    };
    let vvBound = false;
    const bindViewport = () => {
      if (vv && !vvBound) {
        vv.addEventListener('resize', fitViewport);
        vv.addEventListener('scroll', fitViewport);
        vvBound = true;
      }
      fitViewport();
    };
    const unbindViewport = () => {
      if (vv && vvBound) {
        vv.removeEventListener('resize', fitViewport);
        vv.removeEventListener('scroll', fitViewport);
        vvBound = false;
      }
      qm.style.top = '';
      qm.style.bottom = '';
      qm.style.height = '';
      if (panel) panel.style.maxHeight = '';
    };
    // When a field is focused, ease it into the middle of the visible panel.
    qm.querySelectorAll('input').forEach((inp) => inp.addEventListener('focus', () => {
      setTimeout(() => { try { inp.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {} }, 250);
    }));

    const open = () => {
      lastFocus = document.activeElement;
      qm.hidden = false;
      lockScroll();
      bindViewport();
      go(1);
    };
    const close = () => {
      qm.hidden = true;
      unbindViewport();
      unlockScroll();
      if (lastFocus) { try { lastFocus.focus(); } catch (e) {} }
    };

    document.querySelectorAll('[data-quote-open]').forEach((el) => {
      el.addEventListener('click', (e) => { e.preventDefault(); open(); });
    });
    qm.querySelectorAll('[data-qm-close]').forEach((el) => el.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !qm.hidden) close(); });

    // Step 1 — language (reuses the site-wide applyLang)
    qm.querySelectorAll('[data-qm-lang]').forEach((b) => b.addEventListener('click', () => {
      applyLang(b.getAttribute('data-qm-lang'));
      go(2);
    }));
    // Step 2 — size
    qm.querySelectorAll('[data-qm-size]').forEach((b) => b.addEventListener('click', () => {
      lead.size = b.getAttribute('data-qm-size');
      go(3);
    }));

    // "Not sure" → plain-English helper question → size recommendation
    const REC = {
      '10': { en: 'the 10-yard — just right for a garage, attic, or yard cleanout.', es: 'el de 10 yardas — ideal para limpiar un garaje, ático o jardín.' },
      '15': { en: 'the 15-yard — sized for a one-room remodel like a kitchen or bath.', es: 'el de 15 yardas — para renovar un cuarto, como una cocina o un baño.' },
      '20': { en: 'the 20-yard — our most popular, perfect for a whole-house cleanout or multi-room remodel.', es: 'el de 20 yardas — el más popular, perfecto para vaciar una casa o remodelar varios cuartos.' },
      '25': { en: 'the 25-yard — built for big remodels, additions, and new builds.', es: 'el de 25 yardas — para remodelaciones grandes, ampliaciones y construcción nueva.' },
      '30': { en: 'the 30-yard — our biggest, for major demolition and commercial jobs.', es: 'el de 30 yardas — el más grande, para demolición mayor y trabajos comerciales.' }
    };
    const helpBtn = qm.querySelector('[data-qm-help]');
    if (helpBtn) helpBtn.addEventListener('click', () => go('2a'));
    qm.querySelectorAll('[data-qm-rec]').forEach((b) => b.addEventListener('click', () => {
      const yd = b.getAttribute('data-qm-rec');
      lead.size = yd;
      const sizeEl = qm.querySelector('[data-qm-rec-size]');
      if (sizeEl) sizeEl.textContent = yd + ' yd';
      const txt = qm.querySelector('[data-qm-rec-text]');
      if (txt) {
        txt.setAttribute('data-en', 'We recommend ' + REC[yd].en);
        txt.setAttribute('data-es', 'Recomendamos ' + REC[yd].es);
      }
      applyLang(localStorage.getItem('jp-lang') || 'EN');
      go('2b');
    }));
    // Explicit step jumps (helper back / recommendation buttons)
    qm.querySelectorAll('[data-qm-goto]').forEach((b) => b.addEventListener('click', () => go(b.getAttribute('data-qm-goto'))));
    // Back buttons
    qm.querySelectorAll('[data-qm-back]').forEach((b) => b.addEventListener('click', () => {
      const cur = parseInt(qm.querySelector('.qm-step.is-active').getAttribute('data-qm-step'), 10);
      go(Math.max(1, cur - 1));
    }));
    // Step 3 — address → continue
    const addrInput = qm.querySelector('#qm-address');
    const addrErr = qm.querySelector('[data-qm-error-address]');
    qm.querySelector('[data-qm-next]').addEventListener('click', () => {
      if (!addrInput.value.trim()) { addrErr.hidden = false; addrInput.focus(); return; }
      addrErr.hidden = true;
      lead.address = addrInput.value.trim();
      go(4);
    });
    // Step 4 — contact → submit
    const contactErr = qm.querySelector('[data-qm-error-contact]');
    qm.querySelector('[data-qm-submit]').addEventListener('click', () => {
      lead.name = qm.querySelector('#qm-name').value.trim();
      lead.phone = qm.querySelector('#qm-phone').value.trim();
      lead.email = qm.querySelector('#qm-email').value.trim();
      if (!lead.name || !lead.phone) { contactErr.hidden = false; return; }
      contactErr.hidden = true;
      const sizeLabel = lead.size === 'not-sure' ? 'Not sure — needs help picking' : lead.size + ' Yard';

      // Show the thank-you immediately, save the lead to the dashboard in the
      // background, and fall back to a prefilled email only if the save fails.
      go(5);
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: lead.name, phone: lead.phone, email: lead.email, address: lead.address, size: sizeLabel, source: 'quote-wizard' })
      }).then((r) => { if (!r.ok) throw new Error('save failed'); }).catch(() => {
        const body = encodeURIComponent(
          'New quote request from the website:\n\n' +
          'Dumpster: ' + sizeLabel + '\n' +
          'Service address: ' + lead.address + '\n' +
          'Name: ' + lead.name + '\n' +
          'Phone: ' + lead.phone + '\n' +
          'Email: ' + (lead.email || '—') + '\n'
        );
        const a = document.createElement('a');
        a.href = 'mailto:Office@jprolloff.net?subject=' + encodeURIComponent('Quote Request — ' + lead.name) + '&body=' + body;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
    });
  }

  // ---------- IMMERSIVE FLEET (#sizes) sticky-scroll parallax ----------
  // Progressive enhancement: only on >=768px and when motion is allowed.
  // Drives slide crossfade + layered parallax from a single scroll-progress value.
  const fleet = document.querySelector('.fleet');
  if (fleet) {
    const track = fleet.querySelector('.fleet-track');
    const slides = Array.from(fleet.querySelectorAll('.fleet-slide'));
    const pills = Array.from(fleet.querySelectorAll('.fleet-pill'));
    const count = slides.length;
    const clampF = (n, lo, hi) => Math.min(Math.max(n, lo), hi);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const enhanced = count > 1 && window.innerWidth >= 768 && !reduced;

    if (enhanced) {
      fleet.classList.add('is-enhanced');

      let ticking = false;
      const update = () => {
        ticking = false;
        const rect = track.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        const progress = clampF(-rect.top / (scrollable || 1), 0, 1);
        const slideFloat = progress * (count - 1);
        const active = Math.round(slideFloat);
        for (let i = 0; i < slides.length; i++) {
          const sl = slides[i];
          const d = i - slideFloat;                       // signed distance from the active position
          sl.style.opacity = String(clampF(1.35 - Math.abs(d) * 2.3, 0, 1)); // plateau near center, crossfade at edges
          sl.classList.toggle('is-active', i === active);
          const img = sl.querySelector('[data-fleet-img]');
          const bg = sl.querySelector('[data-fleet-bg]');
          if (img) img.style.transform = 'translate3d(0,' + (d * -26).toFixed(1) + 'px,0)';      // foreground rises faster
          if (bg) bg.style.transform = 'translate(-50%, calc(-50% + ' + (d * 72).toFixed(1) + 'px))'; // bg number drifts deeper
        }
        for (let i = 0; i < pills.length; i++) pills[i].classList.toggle('is-active', i === active);
      };
      const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });

      pills.forEach((p, i) => p.addEventListener('click', () => {
        const rect = track.getBoundingClientRect();
        const trackTop = window.scrollY + rect.top;
        const scrollable = rect.height - window.innerHeight;
        window.scrollTo({ top: trackTop + (i / (count - 1)) * scrollable, behavior: 'smooth' });
      }));

      update();
    } else {
      // Static layout: jump pills scroll to the matching slide.
      pills.forEach((p, i) => p.addEventListener('click', () => {
        if (slides[i]) slides[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }));
    }
  }
})();
