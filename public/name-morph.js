(() => {
  const name = document.getElementById('hero-name');
  const canvas = name?.querySelector('canvas');
  const text = name?.querySelector('.hero-name-text');
  if (!name || !canvas || !text || !('getContext' in canvas)) return;

  const forceMotion = new URLSearchParams(window.location.search).get('motion') === 'on';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !forceMotion) return;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>/?';
  const settleTime = 3300;
  const revealTime = 650;
  let frame = 0;

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value) {
    return Math.max(0, Math.min(1, value));
  }

  function finish() {
    cancelAnimationFrame(frame);
    name.classList.remove('is-morphing');
    text.style.removeProperty('opacity');
    canvas.style.display = 'none';
    canvas.style.removeProperty('opacity');
  }

  function targetPoints(width, height, style) {
    const drawing = document.createElement('canvas');
    drawing.width = width;
    drawing.height = height;
    const context = drawing.getContext('2d', { willReadFrequently: true });
    if (!context) return [];

    context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    if ('letterSpacing' in context) context.letterSpacing = style.letterSpacing;
    const metrics = context.measureText('Xiran Cheng');
    const baseline = (height + metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
    context.fillStyle = '#fff';
    context.fillText('Xiran Cheng', (width - metrics.width) / 2, baseline);

    const pixels = context.getImageData(0, 0, width, height).data;
    const points = [];
    const spacing = Math.max(3, Math.round(parseFloat(style.fontSize) / 24));
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (pixels[(y * width + x) * 4 + 3] > 100) points.push([x, y]);
      }
    }
    return points;
  }

  async function start() {
    if (name.dataset.morphStarted === 'true') return;
    name.dataset.morphStarted = 'true';
    await document.fonts.ready;
    if (document.hidden) {
      const onVisible = () => {
        if (document.hidden) return;
        document.removeEventListener('visibilitychange', onVisible);
        run();
      };
      document.addEventListener('visibilitychange', onVisible);
      return;
    }
    run();
  }

  function run() {
    const bounds = text.getBoundingClientRect();
    const width = Math.ceil(bounds.width);
    const height = Math.ceil(bounds.height);
    if (width < 60 || height < 30) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(width * ratio);
    canvas.height = Math.ceil(height * ratio);
    context.scale(ratio, ratio);
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    const targets = targetPoints(width, height, getComputedStyle(text));
    if (targets.length < 40) return;
    const count = Math.min(720, targets.length);
    const characters = Array.from({ length: count }, (_, index) => {
      const target = targets[Math.round(index * (targets.length - 1) / Math.max(1, count - 1))];
      return {
        x: random(0, width),
        y: random(0, height),
        targetX: target[0],
        targetY: target[1],
        delay: 420 + target[0] / width * 720 + random(0, 390),
        glyph: alphabet[Math.floor(random(0, alphabet.length))],
        phase: random(0, Math.PI * 2),
      };
    });

    name.classList.add('is-morphing');
    text.style.opacity = '0';
    canvas.style.display = 'block';
    const startedAt = performance.now();

    function draw(now) {
      const elapsed = now - startedAt;
      if (elapsed >= settleTime + revealTime) {
        finish();
        return;
      }

      const reveal = clamp((elapsed - settleTime) / revealTime);
      context.clearRect(0, 0, width, height);
      canvas.style.opacity = String(1 - reveal);
      text.style.opacity = String(reveal);

      for (let index = 0; index < characters.length; index++) {
        const character = characters[index];
        const progress = clamp((elapsed - character.delay) / 1720);
        const eased = 1 - Math.pow(1 - progress, 3);
        const drift = (1 - eased) * 2.5;
        const x = character.x + (character.targetX - character.x) * eased + Math.sin(elapsed / 120 + character.phase) * drift;
        const y = character.y + (character.targetY - character.y) * eased + Math.cos(elapsed / 140 + character.phase) * drift;
        const size = Math.max(5, Math.round(13 - eased * 8));
        const glyph = progress < 0.72
          ? alphabet[(index * 13 + Math.floor(elapsed / 85)) % alphabet.length]
          : character.glyph;

        context.font = `${size}px monospace`;
        context.fillStyle = `rgba(245,245,247,${0.34 + eased * 0.58})`;
        context.fillText(glyph, x, y);
      }
      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);
    window.addEventListener('resize', finish, { once: true });
    window.addEventListener('pagehide', finish, { once: true });
  }

  if (window.__nameMorphHydrated) start();
  else window.addEventListener('name-morph-hydrated', start, { once: true });
})();
