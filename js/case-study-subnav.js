/* ---------- Breakpoint ---------- */
const navMobileQuery = window.matchMedia("(max-width: 700px)");

/* ---------- Elements ---------- */
const subnav = document.getElementById("subnav");
const mobileBtn = document.getElementById("mobileSubNavBtn");
const summaryLink = document.getElementById("summaryLink");
const summarySection = document.getElementById("summarySection");
const ul_subnav = document.getElementById('ul-subnav');

/* ---------- State ---------- */
let mobileEnabled = false;
let desktopEnabled = false;
let stuckOffset = 0;

/* =================================
   MOBILE NAV
================================= */

function enableMobileNav() {
  if (mobileEnabled) return;
  mobileEnabled = true;

  mobileBtn.addEventListener("click", openMobileMenu);
  subnav.classList.remove("subnav-desktop-nav");
  subnav.classList.add("subnav-mobile-nav");
  ul_subnav.classList.remove("desktop-nav");
  ul_subnav.classList.add("mobile-nav");
}

function disableMobileNav() {
  if (!mobileEnabled) return;
  mobileEnabled = false;

  mobileBtn.removeEventListener("click", openMobileMenu);

  subnav.classList.add("subnav-desktop-nav");
  subnav.classList.remove("subnav-mobile-nav");
  ul_subnav.classList.add("desktop-nav");
  ul_subnav.classList.remove("mobile-nav");
}

function openMobileMenu() {
  subnav.style.transform = "translate(0%, 0%)";
}

/* =================================
   DESKTOP STICKY NAV
================================= */

function enableDesktopNav() {
  if (desktopEnabled) return;
  desktopEnabled = true;

  stuckOffset = subnav.offsetTop + 12;

  window.addEventListener("scroll", onDesktopScroll);
  onDesktopScroll();

  subnav.classList.add("subnav-desktop-nav");
  subnav.classList.remove("subnav-mobile-nav");
  ul_subnav.classList.add("desktop-nav");
  ul_subnav.classList.remove("mobile-nav");
}

function disableDesktopNav() {
  if (!desktopEnabled) return;
  desktopEnabled = false;

  window.removeEventListener("scroll", onDesktopScroll);

  subnav.classList.remove("fixed");
  summaryLink.classList.remove("active-section");

  subnav.classList.remove("subnav-desktop-nav");
  subnav.classList.add("subnav-mobile-nav");
  ul_subnav.classList.remove("desktop-nav");
  ul_subnav.classList.add("mobile-nav");
}

function onDesktopScroll() {
  if (window.pageYOffset >= stuckOffset) {
    subnav.classList.add("fixed");
    subnav.classList.remove("subnav-desktop-nav");
    summaryLink.classList.add("active-section");
    ul_subnav.classList.add("desktop-nav");
  } else {
    subnav.classList.remove("fixed");
    subnav.classList.add("subnav-desktop-nav");
    summaryLink.classList.remove("active-section");
    ul_subnav.classList.add("desktop-nav");
  }
}

/* =================================
   BREAKPOINT HANDLING
================================= */

function handleBreakpoint(e) {
  if (e.matches) {
    // mobile
    disableDesktopNav();
    enableMobileNav();
  } else {
    // desktop
    disableMobileNav();
    enableDesktopNav();
  }
}

navMobileQuery.addEventListener("change", handleBreakpoint);

/* ---------- Init ---------- */
if (navMobileQuery.matches) {
  enableMobileNav();
} else {
  enableDesktopNav();
}
