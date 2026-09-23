(() => {
  function start() {
    const infoButton = document.getElementById('photo-info-toggle');
    const infoPanel = document.getElementById('photo-info-panel');
    const infoClose = document.getElementById('photo-info-close');
    const zoomButton = document.getElementById('photo-zoom');
    const lightbox = document.getElementById('photo-lightbox');
    const lightboxClose = document.getElementById('photo-lightbox-close');
    if (!infoButton || !infoPanel || !infoClose || !zoomButton || !lightbox || !lightboxClose) return;

    function showInfo(open, restoreFocus = true) {
      infoPanel.hidden = !open;
      infoButton.setAttribute('aria-expanded', String(open));
      if (open) infoClose.focus();
      else if (restoreFocus) infoButton.focus();
    }

    infoButton.addEventListener('click', () => showInfo(infoPanel.hidden));
    infoClose.addEventListener('click', () => showInfo(false));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !infoPanel.hidden) showInfo(false);
    });

    zoomButton.addEventListener('click', () => {
      if (!infoPanel.hidden) showInfo(false, false);
      lightbox.showModal();
    });
    lightboxClose.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('close', () => zoomButton.focus());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
