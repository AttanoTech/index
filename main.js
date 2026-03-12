/* ── THEME TOGGLE ────────────────────────────────────── */
(function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    document.documentElement.classList.add('theme-animating');

    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('attano-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('attano-theme', 'light');
    }

    setTimeout(function () {
      document.documentElement.classList.remove('theme-animating');
    }, 400);
  });
})();

/* ── DIAG ANIMATIONS ─────────────────────────────────── */
(function () {
  var diags = document.querySelectorAll('.diag');

  diags.forEach(function (el, i) {
    var style = el.getAttribute('style') || '';
    var rotMatch = style.match(/rotate\((-?[\d.]+)deg\)/);
    var baseDeg = rotMatch ? parseFloat(rotMatch[1]) : 0;
    var baseOpacity = el.style.opacity !== '' ? parseFloat(el.style.opacity) : 1;

    el.style.setProperty('--base-rot', baseDeg + 'deg');
    el.style.setProperty('--base-opacity', baseOpacity);

    var type = i % 2 === 0 ? 'spin' : 'pulse';
    var duration = type === 'spin' ? (50 + i * 10) + 's' : (3 + i) + 's';

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (type === 'spin') {
            el.style.animation = 'diagSpin ' + duration + ' linear infinite';
          } else {
            el.style.animation = 'diagPulse ' + duration + ' ease-in-out infinite';
          }
        } else {
          el.style.animation = 'none';
          el.style.transform = 'rotate(' + baseDeg + 'deg)';
        }
      });
    }, { threshold: 0.05 });

    observer.observe(el);
  });
})();

/* ── TEAM CAROUSEL ───────────────────────────────────── */
(function () {
  var track = document.getElementById('teamCarousel');
  var btnPrev = document.getElementById('teamPrev');
  var btnNext = document.getElementById('teamNext');
  if (!track || !btnPrev || !btnNext) return;

  function cardWidth() {
    var card = track.querySelector('.team-card');
    if (!card) return 300;
    var gap = parseInt(getComputedStyle(track).gap) || 24;
    return card.offsetWidth + gap;
  }

  btnNext.addEventListener('click', function () {
    track.scrollBy({ left: cardWidth(), behavior: 'smooth' });
  });
  btnPrev.addEventListener('click', function () {
    track.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
  });

  var isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', function (e) {
    isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', function () { isDown = false; });
  track.addEventListener('mouseup', function () { isDown = false; });
  track.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
})();
