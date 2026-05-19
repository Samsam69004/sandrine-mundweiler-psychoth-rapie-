const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const yearTarget = document.querySelector("[data-year]");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

// Cookie consent handling
function showCookieBanner() {
  const el = document.getElementById('cookie-consent');
  if (!el) return;
  el.style.display = 'block';
}

function hideCookieBanner() {
  const el = document.getElementById('cookie-consent');
  if (!el) return;
  el.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    const accepted = localStorage.getItem('cookie_consent');
    if (!accepted) showCookieBanner();

    const acceptBtn = document.getElementById('consent-accept');
    const declineBtn = document.getElementById('consent-decline');

    if (acceptBtn) acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'accepted');
      hideCookieBanner();
      // TODO: initialize analytics if desired
    });

    if (declineBtn) declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'declined');
      hideCookieBanner();
    });
  } catch (e) {
    // ignore storage errors
  }
});
