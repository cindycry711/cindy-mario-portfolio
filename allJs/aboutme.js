// ZOOM FUNCTION!!
document.addEventListener('DOMContentLoaded', () => {
  const zoomable = document.getElementById('zoomable-img');
  const overlay = document.getElementById('zoom-overlay');
  const zoomImage = document.getElementById('zoom-image');

  if (zoomable && overlay && zoomImage) {
    zoomable.addEventListener('click', () => {
      zoomImage.src = zoomable.src;
      overlay.classList.add('show');
    });

    overlay.addEventListener('click', () => {
      overlay.classList.remove('show');
      zoomImage.src = "";
    });
  }
});