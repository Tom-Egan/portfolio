const navMobileQuery = window.matchMedia("(max-width: 700px)");

const subnav = document.getElementById("subnav");
const ulSubnav = document.getElementById("ul-subnav");
const subnavOpenBtn = document.getElementById("mobileSubNavBtn");
const subnavCloseBtn = document.getElementById("closeMobileSubNavBtn");
const summaryLink = document.getElementById("summaryLink");
const home = document.getElementById("homebtn");
const backToTopMobile = document.getElementById("toTopMobile");

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

  // nav has margin-top: -41, factor that in 
stuckOffset = subnav.getBoundingClientRect().top + window.scrollY - 12;

  window.addEventListener("scroll", onDesktopScroll);
  onDesktopScroll();
}

/* ================================
   MOBILE ACTIONS
================================ */

function openMobileSubnav() {
  subnav.classList.add("is-open");
  document.body.classList.add("nav-locked");
}

function closeMobileSubnav() {
  subnav.classList.remove("is-open");
  document.body.classList.remove("nav-locked");
}


/* ================================
   DESKTOP SCROLL
================================ */

stuckOffset = subnav.offsetTop;

function onDesktopScroll() {
  if (window.scrollY >= stuckOffset) {
    subnav.classList.add("fixed");
  } else {
    subnav.classList.remove("fixed");
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
