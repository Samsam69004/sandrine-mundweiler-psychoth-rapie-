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
