const navMobileQuery = window.matchMedia("(max-width: 700px)");

const subnav = document.getElementById("subnav");
const ulSubnav = document.getElementById("ul-subnav");
const subnavOpenBtn = document.getElementById("mobileSubNavBtn");
const subnavCloseBtn = document.getElementById("closeMobileSubNavBtn");
const summaryLink = document.getElementById("summaryLink");

let stuckOffset = 0;

/* ================================
   MODE SWITCHING
================================ */

function setMobileMode() {
  window.removeEventListener("scroll", onDesktopScroll);

  subnav.classList.remove("fixed");
  subnav.classList.add("subnav-mobile-nav");
  subnav.classList.remove("subnav-desktop-nav");

  ulSubnav.classList.add("mobile-nav");
  ulSubnav.classList.remove("desktop-nav");

  subnavOpenBtn.addEventListener("click", openMobileSubnav);
  subnavCloseBtn.addEventListener("click", closeMobileSubnav);
}

function setDesktopMode() {
  closeMobileSubnav();

  subnav.classList.remove("subnav-mobile-nav");
  subnav.classList.add("subnav-desktop-nav");

  ulSubnav.classList.remove("mobile-nav");
  ulSubnav.classList.add("desktop-nav");

  stuckOffset = subnav.offsetTop + 12;

  window.addEventListener("scroll", onDesktopScroll);
  onDesktopScroll();
}

/* ================================
   MOBILE ACTIONS
================================ */

function openMobileSubnav() {
  subnav.style.transform = "translate(0%, 0%)";
}

function closeMobileSubnav() {
  subnav.style.transform = "translate(0%, -100%)";
}

/* ================================
   DESKTOP SCROLL
================================ */

function onDesktopScroll() {
  if (window.pageYOffset >= stuckOffset) {
    subnav.classList.add("fixed");
    summaryLink.classList.add("active-section");
  } else {
    subnav.classList.remove("fixed");
    summaryLink.classList.remove("active-section");
  }
}

/* ================================
   BREAKPOINT HANDLER
================================ */

function handleBreakpoint(e) {
  if (e.matches) {
    setMobileMode();
  } else {
    setDesktopMode();
  }
}

navMobileQuery.addEventListener("change", handleBreakpoint);

/* ================================
   INIT
================================ */

if (navMobileQuery.matches) {
  setMobileMode();
} else {
  setDesktopMode();
}
