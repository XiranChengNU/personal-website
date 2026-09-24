(() => {
  const name = document.getElementById('hero-name');
  const canvas = name?.querySelector('canvas');
  const text = name?.querySelector('.hero-name-text');
  if (!name || !canvas || !text || !('getContext' in canvas)) return;
  const forceMotion = new URLSearchParams(window.location.search).get('motion') === 'on';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !forceMotion) return;

  const philosophers = ['Socrates', 'Zhuangzi', 'Nietzsche', 'Arendt'];
  const sequence = [...philosophers, 'Xiran Cheng'];
  const transitionMs = 650;
  const pauseMs = 240;
  const initialHoldMs = 300;
  let frame = 0;

  function finish() {
    cancelAnimationFrame(frame);
    name.classList.remove('is-morphing');
    canvas.style.display = 'none';
  }

  function paintLabel(context, label, width, height, style) {
    const baseSize = parseFloat(style.fontSize);
    const font = (size) => `${style.fontWeight} ${size}px ${style.fontFamily}`;
    context.font = font(baseSize);
    if ('letterSpacing' in context) context.letterSpacing = style.letterSpacing;
    const unscaledWidth = context.measureText(label).width;
    const size = baseSize * Math.min(1, (width - 4) / Math.max(1, unscaledWidth));
    context.font = font(size);
    const metrics = context.measureText(label);
    context.fillStyle = '#fff';
    context.textBaseline = 'alphabetic';
    const baseline = (height + metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
    context.fillText(label, (width - metrics.width) / 2, baseline);
  }

  function sample(label, width, height, style, spacing) {
    const drawing = document.createElement('canvas');
    drawing.width = width;
    drawing.height = height;
    const context = drawing.getContext('2d', { willReadFrequently: true });
    if (!context) return [];
    paintLabel(context, label, width, height, style);

    const pixels = context.getImageData(0, 0, width, height).data;
    const points = [];
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (pixels[(y * width + x) * 4 + 3] > 100) points.push([x, y]);
      }
    }
    return points;
  }

  function matchCount(points, count) {
    if (!points.length) return Array.from({ length: count }, () => [0, 0]);
    return Array.from({ length: count }, (_, index) =>
      points[Math.round(index * (points.length - 1) / Math.max(1, count - 1))]);
  }

  async function start() {
    if (name.dataset.morphStarted === 'true') return;
    name.dataset.morphStarted = 'true';
    await document.fonts.ready;
    if (document.hidden) {
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) start();
      }, { once: true });
      return;
    }

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

    const style = getComputedStyle(text);
    const spacing = Math.max(2, Math.round(parseFloat(style.fontSize) / 32));
    const samples = sequence.map((label) => sample(label, width, height, style, spacing));
    const count = Math.min(2600, Math.max(...samples.map((points) => points.length)));
    if (count < 40) return;
    const shapes = samples.map((points) => matchCount(points, count));
    const duration = transitionMs + pauseMs;
    const total = initialHoldMs + (shapes.length - 1) * duration;
    const startedAt = performance.now();

    name.classList.add('is-morphing');
    canvas.style.display = 'block';

    function draw(now) {
      const elapsed = now - startedAt;
      if (elapsed >= total) {
        finish();
        return;
      }

      const motionTime = Math.max(0, elapsed - initialHoldMs);
      const segment = Math.min(shapes.length - 2, Math.floor(motionTime / duration));
      const progress = Math.min(1, (motionTime - segment * duration) / transitionMs);
      const from = shapes[segment];
      const to = shapes[segment + 1];
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#f5f5f7';
      const dot = Math.max(1.5, spacing * 0.88);
      context.globalAlpha = Math.min(1, 0.15 + Math.min(progress, 1 - progress) * 4);

      for (let index = 0; index < count; index++) {
        const delay = from[index][0] / width * 0.14;
        const t = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
        const eased = t * t * (3 - 2 * t);
        const x = from[index][0] + (to[index][0] - from[index][0]) * eased;
        const y = from[index][1] + (to[index][1] - from[index][1]) * eased;
        context.fillRect(x, y, dot, dot);
      }
      if (progress < 0.25) {
        context.globalAlpha = 1 - progress / 0.25;
        paintLabel(context, sequence[segment], width, height, style);
      } else if (progress > 0.75) {
        context.globalAlpha = (progress - 0.75) / 0.25;
        paintLabel(context, sequence[segment + 1], width, height, style);
      }
      context.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);
    window.addEventListener('resize', finish, { once: true });
    window.addEventListener('pagehide', finish, { once: true });
  }

  if (window.__nameMorphHydrated) start();
  else window.addEventListener('name-morph-hydrated', start, { once: true });
})();
