// OVERLAY EFFECT
if (document.getElementById('head')) {
  const hfx = 50;
  let pos = 0;
  let isActive = false;
  function header_active(scrollPos) {
    if (hfx < scrollPos) {
      document.getElementById('head').classList.add('active');
    } else {
      document.getElementById('head').classList.remove('active');
    }
  }
  document.addEventListener('scroll', (e) => {
    pos = window.scrollY;
    if (!isActive) {
      window.requestAnimationFrame(() => {
        header_active(pos);
        isActive = false;
      });
      isActive = true;
    }
  });
}
