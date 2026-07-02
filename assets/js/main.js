const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const skipLinkButton = document.querySelector(".skip-link[data-skip-to]");
if (skipLinkButton) {
  skipLinkButton.addEventListener("click", () => {
    const targetId = skipLinkButton.getAttribute("data-skip-to");
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    target.focus();
    target.scrollIntoView({ behavior: "auto", block: "start" });
  });
}

const mapConsentButton = document.querySelector("[data-map-consent]");
if (mapConsentButton) {
  mapConsentButton.addEventListener("click", () => {
    const mapUrl = mapConsentButton.getAttribute("data-map-url");
    const mapFrame = document.querySelector("[data-map-frame]");
    if (!mapUrl || !mapFrame || mapFrame.querySelector("iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.src = mapUrl;
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    mapFrame.hidden = false;
    mapFrame.appendChild(iframe);
    mapConsentButton.disabled = true;
    mapConsentButton.textContent = "Carte chargée";
  });
}

const imageZoomTrigger = document.querySelector("[data-zoom-image]");
const imageLightbox = document.querySelector("[data-image-lightbox]");
const imageLightboxImg = document.querySelector("[data-image-lightbox-img]");
const imageLightboxClose = document.querySelector("[data-image-lightbox-close]");

if (imageZoomTrigger && imageLightbox && imageLightboxImg) {
  const closeLightbox = () => {
    if (typeof imageLightbox.close === "function" && imageLightbox.open) {
      imageLightbox.close();
    }
  };

  imageZoomTrigger.addEventListener("click", () => {
    const imageUrl = imageZoomTrigger.getAttribute("data-zoom-image");
    const imageAlt = imageZoomTrigger.querySelector("img")?.alt || "Image agrandie";

    if (!imageUrl) return;

    imageLightboxImg.src = imageUrl;
    imageLightboxImg.alt = imageAlt;

    if (typeof imageLightbox.showModal === "function") {
      imageLightbox.showModal();
    } else {
      window.open(imageUrl, "_blank", "noopener,noreferrer");
    }
  });

  imageLightboxClose?.addEventListener("click", closeLightbox);
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

const yearTarget = document.querySelector("[data-year]");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
