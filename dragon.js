/**
 * Interactive Dragon Rig (Vector S-Curve Flight Engine)
 * Features:
 * - White / Red / Black color combo matching Quantum Coders theme
 * - TOTALLY HIDDEN at scroll = 0 / Slide 0 (the QC logo is its home/lair)
 * - Emerges gracefully out from UNDER the top navigation QC logo as you slide/scroll down
 * - Slithers back into the QC logo and disappears completely when scrolling back to 0
 * - Whiskers & hair on the mouth completely REMOVED for a clean, fierce, aerodynamic draconic snout
 * - Single set of magnificent dragon wings (redundant wings removed)
 * - Rigid spine kinematics: Zero rubber-band elasticity/stretching
 * - Exclusively follows the scroll slider path (NO cursor following)
 * - 100% static when idle
 * - Click dragon to smooth-scroll back to top
 */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var xmlns = 'http://www.w3.org/2000/svg';
  var xlinkns = 'http://www.w3.org/1999/xlink';

  // Inject or retrieve full-screen SVG
  var svg = document.getElementById('dragon-screen-svg');
  if (!svg) {
    svg = document.createElementNS(xmlns, 'svg');
    svg.setAttribute('id', 'dragon-screen-svg');
    svg.setAttribute('aria-hidden', 'true');
    // Totally hidden at scroll = 0 (slide 0)
    svg.style.opacity = '0';
    svg.style.visibility = 'hidden';
    svg.style.pointerEvents = 'none';
    svg.innerHTML = [
      '<defs>',
      '  <!-- Fierce Aerodynamic Dragon Head: Horns & Crest ONLY, ZERO Hair/Whiskers on Mouth -->',
      '  <g id="Cabeza">',
      '    <!-- Majestic Back-Swept Horns: Pure White with Crimson Trim (Originates at Crown, Away from Mouth) -->',
      '    <path style="fill: #FFFFFF; stroke: #FF2B2B; stroke-width: 0.8;" d="M-8,-4 Q4,-12 18,-18 Q7,-8 -3,-2 Z"/>',
      '    <path style="fill: #FFFFFF; stroke: #FF2B2B; stroke-width: 0.8;" d="M-8,4 Q4,12 18,18 Q7,8 -3,2 Z"/>',
      '    <!-- Secondary Inner Horn Spikes -->',
      '    <path style="fill: #FF2B2B; stroke: #090A0F; stroke-width: 0.6;" d="M-3,-2 Q6,-6 19,-8 Q8,-4 0,-1 Z"/>',
      '    <path style="fill: #FF2B2B; stroke: #090A0F; stroke-width: 0.6;" d="M-3,2 Q6,6 19,8 Q8,4 0,1 Z"/>',
      '    <!-- Main Dragon Skull: Sleek, Aerodynamic Jawline, ZERO Mouth Hair / Whiskers -->',
      '    <path style="fill: #090A0F; stroke: #FF2B2B; stroke-width: 1.2; stroke-linejoin: round;" d="M-32,0 Q-26,-4 -16,-5.5 Q-6,-9 2,-8 Q10,-3 12,0 Q10,3 2,8 Q-6,9 -16,5.5 Q-26,4 -32,0 Z"/>',
      '    <!-- Snout Bridge Armor Plate -->',
      '    <path style="fill: #141721; stroke: #FF2B2B; stroke-width: 0.7;" d="M-28,0 L-20,-2.5 L-10,-3 L-2,-1 L-2,1 L-10,3 L-20,2.5 Z"/>',
      '    <!-- Central Ridge Crest Line -->',
      '    <line x1="-24" y1="0" x2="4" y2="0" stroke="#FF2B2B" stroke-width="1.6" stroke-linecap="round"/>',
      '    <!-- Piercing Crimson Eyes with Slit Pupils and White Highlight -->',
      '    <ellipse cx="-13" cy="-4.5" rx="3.2" ry="1.8" fill="#FF2B2B" transform="rotate(-12 -13 -4.5)"/>',
      '    <ellipse cx="-13" cy="-4.5" rx="1.2" ry="1.5" fill="#090A0F" transform="rotate(-12 -13 -4.5)"/>',
      '    <circle cx="-13.8" cy="-4.8" r="0.8" fill="#FFFFFF"/>',
      '    <ellipse cx="-13" cy="4.5" rx="3.2" ry="1.8" fill="#FF2B2B" transform="rotate(12 -13 4.5)"/>',
      '    <ellipse cx="-13" cy="4.5" rx="1.2" ry="1.5" fill="#090A0F" transform="rotate(12 -13 4.5)"/>',
      '    <circle cx="-13.8" cy="4.2" r="0.8" fill="#FFFFFF"/>',
      '    <!-- Clean Aerodynamic Nostrils (No Hair, No Whiskers) -->',
      '    <ellipse cx="-27" cy="-1.4" rx="1.1" ry="0.6" fill="#FF2B2B"/>',
      '    <ellipse cx="-27" cy="1.4" rx="1.1" ry="0.6" fill="#FF2B2B"/>',
      '  </g>',
      '  <!-- Single Set of Wings with Black-Crimson-White Fire Gradient -->',
      '  <g id="Aletas">',
      '    <linearGradient id="DragonGrad_Wings" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0935974, 0, 0, 0.188782, -20.55, 0)" spreadMethod="pad" x1="-819.2" y1="0" x2="819.2" y2="0">',
      '      <stop offset="0" style="stop-color: #090A0F; stop-opacity: 1"/>',
      '      <stop offset="0.45" style="stop-color: #FF2B2B; stop-opacity: 1"/>',
      '      <stop offset="1" style="stop-color: #FFFFFF; stop-opacity: 1"/>',
      '    </linearGradient>',
      '    <path style="fill: url(#DragonGrad_Wings); stroke: #090A0F; stroke-width: 0.8;" d="M29.75,-36.85Q-17.75 -61.45 -42.05 -40.95L-45.35 -38.35L-53.7 -41.15L-51.15 -44.85Q-34.85 -68.4 21 -57.8Q-32.2 -72.1 -50.25 -50Q-53.85 -45.65 -56.05 -41.95L-64.7 -43.35L-60.6 -50.3Q-45.9 -75.55 5.1 -79.35Q-2.2 -79.8 -9.45 -79.15Q-16.2 -78.55 -22.85 -77.15Q-29.85 -75.65 -36.5 -73Q-43.05 -70.4 -48.8 -66.85Q-54.55 -63.35 -56.8 -60.3L-60.5 -55.4Q-62.95 -52.1 -67 -43.55L-70.55 -43.55L-76.35 -42.95Q-74.6 -49.1 -71.85 -54.85Q-68.9 -61.25 -64.8 -67.1Q-60.8 -73 -55.45 -77.55Q-49.9 -82.35 -43.65 -85.85L-30.6 -92.7Q-24.05 -95.95 -17 -98.25Q-63.75 -86.35 -73.65 -57.1Q-75.75 -50.75 -77.45 -42.75Q-82.9 -41.75 -88 -39.65Q-87.65 -46.65 -86.3 -53.05Q-79.8 -89.8 -36.65 -117.2Q-80.65 -94.5 -87.55 -59.55Q-88.65 -54.15 -88.95 -39.4L-89.8 -38.85L-92.7 -37.6Q-93.75 -44.35 -94.1 -51.15Q-94.4 -58.2 -93.25 -65.1Q-92.15 -72.5 -90.05 -79.65Q-88.05 -86.55 -85 -93Q-82.1 -99.3 -78.45 -105.15Q-74.6 -111.35 -70.25 -117.25Q-65.95 -123.1 -61.1 -128.55Q-70.3 -119.35 -77.9 -108.7Q-86 -97.3 -90.8 -84.05Q-95.8 -70.5 -96 -56.15Q-96.1 -46 -94.05 -36.05L-93.25 -31.55Q-93.5 -35.65 -92.35 -36Q-79.85 -42 -66.6 -40.45Q-52.45 -38.85 -39.2 -33.25Q-28.3 -29.9 -21.25 -24.15Q-17.8 -23.3 -8.6 -15.6Q-12.1 -20.75 -16.75 -24.5Q-24.55 -30.7 -34.25 -34.05L-42.55 -37Q-38.9 -41.25 -31.5 -43.25Q-24.05 -45.3 -16.2 -46.3Q-8.35 -47.35 -1 -46Q5.95 -44.75 12.75 -42.85Q19.85 -40.9 29.75 -36.85M-92.45,-27.35L-94.95 -36.25Q-109.7 -105 -27.95 -154.65Q-98.65 -103.8 -91.75 -39.4L-89.95 -40.2Q-92.2 -105.25 -5.6 -130.9Q-78.8 -99.95 -87.45 -40.9Q-83.15 -42.95 -78.45 -43.95Q-70 -101.3 17.65 -103.8Q-56.9 -93.4 -74.5 -44.55L-67.4 -45.45Q-49.1 -94.95 39.25 -75.65Q-36.75 -84.35 -62.25 -44.25L-57.3 -43.6Q-31.65 -86.5 56.15 -46.05Q-20.3 -73.35 -51.35 -41.7L-45.95 -39.75Q-17.85 -71.35 51.85 -24.8Q-8.7 -56.4 -39.75 -37.05Q-28.15 -34.05 -14.25 -24.45Q-8.6 -19.85 -5.8 -16.95Q5.95 -2.4 20 0Q5.95 2.4 -5.8 16.95Q-8.6 19.85 -14.25 24.45Q-28.15 34.05 -39.75 37.05Q-8.7 56.4 51.85 24.8Q-17.85 71.35 -45.95 39.75L-51.35 41.7Q-20.3 73.35 56.15 46.1Q-31.65 86.5 -57.3 43.65L-62.25 44.3Q-36.75 84.35 39.25 75.7Q-49.1 94.95 -67.4 45.5L-74.5 44.6Q-56.9 93.4 17.65 103.85Q-70 101.3 -78.45 43.95Q-83.15 42.95 -87.45 40.9Q-78.8 99.95 -5.6 130.9Q-92.2 105.25 -89.95 40.25L-91.75 39.4Q-98.65 103.8 -27.95 154.65Q-109.7 105 -94.95 36.3L-92.45 27.35Q-93.05 33.9 -92.05 34.75Q-91.1 35.55 -88.95 36.7L-87.95 37Q-83.7 38.25 -79.05 38.8L-77.25 38.95Q-72.55 39.3 -67.5 38.85L-65.45 38.65Q-44.4 36.05 -17.8 19.6Q-9.9 12.8 -15.15 4.4Q-18.15 3.15 -19 0Q-18.15 -3.15 -15.15 -4.4Q-9.9 -12.8 -17.8 -19.6L-17.8 -19.55Q-44.4 -36.05 -65.45 -38.6L-67.5 -38.8Q-72.55 -39.3 -77.25 -38.95L-79.05 -38.75Q-83.7 -38.25 -87.95 -36.95L-88.95 -36.65Q-91.1 -35.55 -92.05 -34.7Q-93.05 -33.9 -92.45 -27.35M-8.6,15.6Q-17.8 23.3 -21.25 24.2Q-28.3 29.9 -39.2 33.3Q-52.45 38.85 -66.6 40.5Q-79.85 42 -92.35 36Q-93.5 35.65 -93.25 31.55L-94.05 36.1Q-96.1 46.05 -96 56.15Q-95.8 70.5 -90.8 84.1Q-86 97.3 -77.9 108.75Q-70.3 119.35 -61.1 128.6Q-65.95 123.1 -70.25 117.25Q-74.6 111.35 -78.45 105.15Q-82.1 99.3 -85 93Q-88.05 86.55 -90.05 79.7Q-92.15 72.5 -93.25 65.1Q-94.4 58.2 -94.1 51.2Q-93.75 44.35 -92.7 37.6L-89.8 38.9L-88.95 39.45Q-88.65 54.15 -87.55 59.55Q-80.65 94.5 -36.65 117.25Q-79.8 89.8 -86.3 53.1Q-87.65 46.65 -88 39.65Q-82.9 41.75 -77.45 42.75Q-75.75 50.75 -73.65 57.15Q-63.75 86.35 -17 98.3Q-24.05 95.95 -30.6 92.75L-43.65 85.9Q-49.9 82.35 -55.45 77.6Q-60.8 73 -64.8 67.15Q-68.9 61.25 -71.85 54.85Q-74.6 49.1 -76.35 42.95L-70.55 43.6L-67 43.6Q-62.95 52.1 -60.5 55.4L-56.8 60.35Q-54.55 63.35 -48.8 66.9Q-43.05 70.4 -36.5 73Q-29.85 75.65 -22.85 77.15Q-16.2 78.55 -9.45 79.15Q-2.2 79.8 5.1 79.35Q-45.9 75.55 -60.6 50.3L-64.7 43.4L-56.05 41.95Q-53.85 45.65 -50.25 50Q-32.2 72.1 21 57.85Q-34.85 68.4 -51.15 44.85L-53.7 41.2L-45.35 38.35L-42.05 40.95Q-17.75 61.45 29.75 36.85Q19.85 40.9 12.75 42.9Q5.95 44.75 -1 46Q-8.35 47.35 -16.2 46.35Q-24.05 45.3 -31.5 43.3Q-38.9 41.25 -42.55 37.05L-34.25 34.05Q-24.55 30.7 -16.75 24.5Q-12.1 20.75 -8.6 15.6"/>',
      '  </g>',
      '  <!-- Sharp Dragon Claws (Black limbs, Crimson joints, Pure White Talons) -->',
      '  <g id="Garras">',
      '    <path d="M-6,0 L-18,-24 L-28,-36 M-18,-24 L-14,-38 M-18,-24 L-24,-40" stroke="#090A0F" stroke-width="5" stroke-linecap="round" fill="none"/>',
      '    <path d="M-6,0 L-18,24 L-28,36 M-18,24 L-14,38 M-18,24 L-24,40" stroke="#090A0F" stroke-width="5" stroke-linecap="round" fill="none"/>',
      '    <path d="M-18,-24 L-22,-30 M-18,24 L-22,30" stroke="#FF2B2B" stroke-width="3.5" stroke-linecap="round" fill="none"/>',
      '    <path d="M-28,-36 L-35,-45 M-14,-38 L-17,-49 M-24,-40 L-29,-52" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" fill="none"/>',
      '    <path d="M-28,36 L-35,44 M-14,38 L-17,49 M-24,40 L-29,52" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" fill="none"/>',
      '  </g>',
      '  <!-- Dragon Spine Vertebrae (Obsidian Body with Crimson-to-White Flame Spines) -->',
      '  <g id="Espina">',
      '    <linearGradient id="DragonGrad_SpineTop" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0229492, 0, 0, -0.0152893, 0, 0.05)" spreadMethod="pad" x1="-819.2" y1="0" x2="819.2" y2="0">',
      '      <stop offset="0" style="stop-color: #090A0F; stop-opacity: 1"/>',
      '      <stop offset="0.4" style="stop-color: #FF2B2B; stop-opacity: 1"/>',
      '      <stop offset="1" style="stop-color: #FFFFFF; stop-opacity: 1"/>',
      '    </linearGradient>',
      '    <path style="fill: url(#DragonGrad_SpineTop); stroke: #090A0F; stroke-width: 0.5;" d="M-18.8,0Q-17.85 -5.7 -12.3 -9.6Q-11.2 -5.35 -6.5 -8.25L-6.45 -8.2L-6.2 -8.3Q1.25 -16.25 6.65 -12.4Q0.05 -12.55 0 -5.95Q2.7 -2.4 7.75 -4.1Q18 -1.45 18.8 0L-18.8 0"/>',
      '    <linearGradient id="DragonGrad_SpineBot" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0229492, 0, 0, 0.0152893, 0, -0.05)" spreadMethod="pad" x1="-819.2" y1="0" x2="819.2" y2="0">',
      '      <stop offset="0" style="stop-color: #090A0F; stop-opacity: 1"/>',
      '      <stop offset="0.4" style="stop-color: #FF2B2B; stop-opacity: 1"/>',
      '      <stop offset="1" style="stop-color: #FFFFFF; stop-opacity: 1"/>',
      '    </linearGradient>',
      '    <path style="fill: url(#DragonGrad_SpineBot); stroke: #090A0F; stroke-width: 0.5;" d="M18.8,0Q18 1.45 7.75 4.1Q2.7 2.4 0 5.95Q0.05 12.55 6.65 12.4Q1.25 16.25 -6.2 8.35Q-6.35 8.25 -6.45 8.25L-6.5 8.25Q-11.2 5.35 -12.3 9.6Q-17.85 5.7 -18.8 0L18.8 0"/>',
      '  </g>',
      '  <!-- Barbed Flame Tail Plume (Black Spine, Crimson Core, White Flame Barbs) -->',
      '  <g id="Cola">',
      '    <path d="M12,0 Q-15,-8 -38,-1 Q-15,8 12,0" fill="#090A0F" stroke="#FF2B2B" stroke-width="1.2"/>',
      '    <path d="M-6,0 Q-22,-14 -34,-22 Q-20,-8 -12,0" fill="#FF2B2B"/>',
      '    <path d="M-6,0 Q-22,14 -34,22 Q-20,8 -12,0" fill="#FF2B2B"/>',
      '    <path d="M-22,-8 Q-32,-16 -42,-18 Q-30,-6 -20,-3" fill="#FFFFFF"/>',
      '    <path d="M-22,8 Q-32,16 -42,18 Q-30,6 -20,3" fill="#FFFFFF"/>',
      '  </g>',
      '</defs>',
      '<g id="dragon-screen"></g>'
    ].join('\n');
    document.body.appendChild(svg);
  }

  var screen = svg.querySelector('#dragon-screen');
  var N = 38;
  var elems = [];

  // Helper to find navigation logo coordinates (exact placement under QC logo home)
  function getLogoAnchor() {
    var logo = document.querySelector('.brand-logo-img') || document.querySelector('.brand-link');
    if (logo) {
      var r = logo.getBoundingClientRect();
      return {
        x: r.left + r.width * 0.5,
        y: r.top + r.height * 0.5
      };
    }
    return { x: 110, y: 34 };
  }

  var logoInit = getLogoAnchor();
  var startX = logoInit.x;
  var startY = logoInit.y;

  // Initialize tucked completely inside the logo lair
  for (var i = 0; i < N; i++) {
    elems[i] = { use: null, x: startX, y: startY };
  }

  function prepend(useId, idx) {
    var elem = document.createElementNS(xmlns, 'use');
    elem.setAttributeNS(xlinkns, 'xlink:href', '#' + useId);
    elem.setAttribute('class', 'dragon-elem');
    elems[idx].use = elem;
    screen.prepend(elem);
  }

  // Prepend elements so head renders on top:
  // - i = 1: Cabeza (Head - clean aerodynamic snout, zero mouth hair)
  // - i = 7: ONE set of Wings (Aletas)
  // - i = 16: Garras (Sharp Dragon Talons/Claws)
  // - i = N-1: Cola (Barbed Flame Tail Plume)
  // - all others: Espina (Spine Vertebrae)
  for (var i = 1; i < N; i++) {
    if (i === 1) prepend('Cabeza', i);
    else if (i === 7) prepend('Aletas', i);
    else if (i === 16) prepend('Garras', i);
    else if (i === N - 1) prepend('Cola', i);
    else prepend('Espina', i);
  }


  // State
  var phase = 0;
  var swimVel = 0;
  var lastSY = window.scrollY || window.pageYOffset;
  var isScrolling = false;
  var scrollTimer = null;

  // Track scroll activity: body moves strictly when sliding/scrolling along slider path
  window.addEventListener('scroll', function () {
    isScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      isScrolling = false;
    }, 140);
  }, { passive: true });

  // Helper to find Event Calendar title coordinates (final resting lair)
  function getCalendarTitleAnchor() {
    var title = document.querySelector('#calendar .section-title-huge') ||
                document.querySelector('#calendar .section-header') ||
                document.getElementById('calendar');
    if (title) {
      var r = title.getBoundingClientRect();
      var w = window.innerWidth;
      var targetX;
      var targetY;
      if (w <= 768) {
        // On mobile: position comfortably beside/above title text within viewport
        targetX = Math.min(w - 55, Math.max(45, w * 0.72));
        targetY = r.top + Math.min(26, r.height * 0.35);
      } else {
        // On desktop: rest elegantly beside the "EVENT CALENDAR" title text
        targetX = Math.min(w - 100, Math.max(r.right + 60, w * 0.62));
        targetY = r.top + r.height * 0.5;
      }
      return {
        x: targetX,
        y: targetY,
        pageY: r.top + (window.scrollY || window.pageYOffset)
      };
    }
    return null;
  }

  // Main 60fps kinematic loop: Strictly follows the scroll slider path
  function run() {
    if (!document.hidden) {
      var y = window.scrollY || window.pageYOffset;
      var dy = Math.abs(y - lastSY);
      lastSY = y;

      var logoPos = getLogoAnchor();
      var calPos = getCalendarTitleAnchor();
      var w = window.innerWidth;
      var h = window.innerHeight;
      var isMobile = w <= 768;

      // Track scroll velocity cleanly across mobile touch, momentum, and desktop
      // Mobile touch scrolling fires massive dy deltas — clamp harder
      var velGain = isMobile ? 0.003 : 0.008;
      var velCap = isMobile ? 0.45 : 0.85;
      if (dy > 0.4) {
        swimVel = Math.min(velCap, swimVel * 0.80 + dy * velGain);
      } else {
        swimVel *= isMobile ? 0.82 : 0.88;
        if (swimVel < 0.0005) swimVel = 0;
      }

      // =======================================================================
      // Emergence & Rest Mechanism:
      // - At y <= 2 (slide 0 / top of page): TOTALLY HIDDEN in top QC logo home
      // - As user slides/scrolls: Emerges gracefully out from UNDER the QC logo,
      //   slithering across Hero, About, and Core Cadre
      // - RESTS BESIDE the Event Calendar Title: Once reached, it perches beside
      //   the title and NEVER travels further below it even when scrolling further down
      // - Scrolling back to top: Slithers back under the logo and disappears completely
      // =======================================================================
      if (y <= 2) {
        svg.style.opacity = '0';
        svg.style.visibility = 'hidden';
        svg.style.pointerEvents = 'none';

        // Collapse all vertebrae directly into the QC logo home
        for (var k = 0; k < N; k++) {
          elems[k].x = logoPos.x;
          elems[k].y = logoPos.y;
          if (elems[k].use) {
            elems[k].use.setAttributeNS(
              null,
              'transform',
              'translate(' + logoPos.x.toFixed(1) + ',' + logoPos.y.toFixed(1) + ') scale(0.01)'
            );
          }
        }
      } else {
        svg.style.visibility = 'visible';

        // Opacity smoothly scales up over first 120px of scroll
        var emerge = Math.min(1, Math.max(0, y / 120));
        svg.style.opacity = emerge.toFixed(3);
        svg.style.pointerEvents = 'none';

        // Destination: beside the Event Calendar title
        var destX = calPos ? calPos.x : (w * 0.72);
        var destY = calPos ? calPos.y : (h * 0.45);

        // Scroll distance required to bring Event Calendar title into rest position
        var calPageY = calPos ? calPos.pageY : (h * 2.2);
        var scrollReach = Math.max(150, calPageY - h * 0.38);

        // Progress along flight track towards Event Calendar title (0 = logo, 1 = resting beside title)
        var flightProgress = Math.min(1, Math.max(0, y / scrollReach));

        // Smooth cubic ease for flight trajectory
        var easeP = flightProgress * flightProgress * (3 - 2 * flightProgress);

        // Lateral S-curve flight track weaving across the page before resting (adapted for mobile screen width)
        var crossWidth = isMobile ? (w * 0.42) : (w * 0.70);
        var sWaveX = Math.sin(flightProgress * Math.PI * 2.8) * (crossWidth * 0.36) * (1 - easeP * 0.88);

        // Interpolate position from QC logo home to Calendar rest position
        var targetX = logoPos.x * (1 - easeP) + destX * easeP + sWaveX;
        var targetY = logoPos.y * (1 - easeP) + destY * easeP;

        // STRICT CONSTRAINT: Once at or past the Event Calendar title,
        // lock directly beside the title and NEVER travel below it!
        if (flightProgress >= 0.999 || targetY > destY) {
          targetX = destX;
          targetY = destY;
        }

        if (swimVel > 0.0005) {
          // Slower phase accumulation on mobile so body undulation is gentler
          phase += swimVel * (isMobile ? 0.08 : 0.14);
        }

        // Leader head follows target position smoothly
        // SLOWER on mobile (0.09) so the head glides gracefully instead of snapping
        var leader = elems[0];
        var followSpeed = isMobile ? 0.09 : 0.14;
        leader.x += (targetX - leader.x) * followSpeed;
        leader.y += (targetY - leader.y) * followSpeed;

        var baseScale = isMobile ? 0.28 : 0.44;
        // Scale grows as it emerges out of the QC logo home
        var emergeScale = baseScale * (0.45 + emerge * 0.55);

        // Rigid Distance Kinematics (Zero Rubber-Band Elasticity):
        // Scale target distance proportionally so mobile vertebrae stay seamlessly dense
        var scaleFactor = emergeScale / 0.44;

        for (var i = 1; i < N; i++) {
          var e = elems[i];
          var ep = elems[i - 1];

          var dx = e.x - ep.x;
          var dy = e.y - ep.y;
          var curDist = Math.hypot(dx, dy) || 1;

          // Strict, non-stretching inter-vertebrae distance proportionally scaled for mobile
          var targetDist = ((54 - i * 0.44) / 4.4) * scaleFactor;

          var nx = dx / curDist;
          var ny = dy / curDist;

          // Position e strictly targetDist behind ep with high firmness
          var desiredX = ep.x + nx * targetDist;
          var desiredY = ep.y + ny * targetDist;

          // Firm follow factor: tight vertebrae chain, eliminates elasticity
          var firmFactor = isMobile ? 0.88 : 0.86;
          e.x += (desiredX - e.x) * firmFactor;
          e.y += (desiredY - e.y) * firmFactor;

          // Forward Angle: In Cabeza asset, snout points at -X (-32, 0).
          // Math.atan2(e.y - ep.y, e.x - ep.x) rotates -X to point directly FORWARD in flight direction!
          var a = Math.atan2(e.y - ep.y, e.x - ep.x);

          // Natural lateral wave (perpendicular to spine) only while sliding, constrained on mobile
          if (swimVel > 0.001) {
            var maxWave = isMobile ? 1.0 : 2.0;
            var wave = Math.sin(phase - i * 0.28) * (swimVel * maxWave);
            e.x += -Math.sin(a) * wave;
            e.y += Math.cos(a) * wave;
          }

          var scale = ((162 + 4 * (1 - i)) / 50) * emergeScale;
          var deg = (180 / Math.PI) * a;

          e.use.setAttributeNS(
            null,
            'transform',
            'translate(' + ((ep.x + e.x) / 2).toFixed(1) + ',' + ((ep.y + e.y) / 2).toFixed(1) + ') rotate(' + deg.toFixed(1) + ') scale(' + scale.toFixed(3) + ')'
          );
        }
      }
    }
    requestAnimationFrame(run);
  }

  requestAnimationFrame(run);
})();
