// shared drawer logic
function setupDrawer() {
  const btn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('main-drawer');
  const close = document.getElementById('drawer-close');

  if(!btn || !drawer) return;

  function openDrawer(){
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden','false');
    btn.setAttribute('aria-expanded','true');
    // trap focus optionally
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden','true');
    btn.setAttribute('aria-expanded','false');
    btn.focus();
  }

  btn.addEventListener('click', openDrawer);
  close.addEventListener('click', closeDrawer);
  // close on backdrop click or ESC
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDrawer(); });
}
document.addEventListener('DOMContentLoaded', setupDrawer);
