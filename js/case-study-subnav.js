const navMobileQuery = window.matchMedia("(max-width: 700px)");

const subnav = document.getElementById("subnav");
const subnavOpenBtn = document.getElementById("mobileSubNavBtn");
const subnavCloseBtn = document.getElementById("closeMobileSubNavBtn");
const subnavTopBtn = document.getElementById("toTopMobile");

let stuckOffset = 0;

/* ================================
   STATE SETTERS
================================ */

function setMode(mode) {
  subnav.dataset.mode = mode;
  subnav.dataset.pinned = "false";
}


function openNav() {
  enableTransitions();
  subnav.dataset.state = "open";
  document.body.classList.add("nav-locked");
}

function closeNav() {
  enableTransitions();
  subnav.dataset.state = "closed";
  document.body.classList.remove("nav-locked");
}


function disableTransitions() {
  subnav.dataset.transition = "off";
}

function enableTransitions() {
  subnav.dataset.transition = "on";
}


/* ================================
   SCROLL (DESKTOP ONLY)
================================ */

function onScroll() {
  subnav.dataset.pinned =
    window.pageYOffset >= stuckOffset ? "true" : "false";
}

function enableDesktopScroll() {
  subnav.dataset.pinned = "false";

  // Wait for layout to settle (critical)
  requestAnimationFrame(() => {
    stuckOffset = subnav.getBoundingClientRect().top + window.scrollY;
    window.addEventListener("scroll", onScroll);
    onScroll();
  });
}


function disableDesktopScroll() {
  window.removeEventListener("scroll", onScroll);
  subnav.dataset.pinned = "false";
}


/* ================================
   MOBILE NAV
================================ */

function enableMobileNav() {
  subnavOpenBtn.addEventListener("click", openNav);
  subnavCloseBtn.addEventListener("click", closeNav);
}

function disableMobileNav() {
  subnavOpenBtn.removeEventListener("click", openNav);
  subnavCloseBtn.removeEventListener("click", closeNav);
}

/* ================================
   MODE SWITCHING
================================ */

function setMobileMode() {
  disableDesktopScroll();
  disableTransitions();

  // FORCE closed position BEFORE mobile styles apply
  subnav.dataset.state = "closed";

  // Switch mode in the NEXT frame
  requestAnimationFrame(() => {
    setMode("mobile");
    enableMobileNav();

    // Re-enable transitions one frame later
    requestAnimationFrame(() => {
      enableTransitions();
    });
  });
}


function setDesktopMode() {
  disableMobileNav();
  setMode("desktop");
  enableDesktopScroll();
}

/* ================================
   BREAKPOINT HANDLER
================================ */

function handleBreakpoint(e) {

  disableTransitions();

  e.matches ? setMobileMode() : setDesktopMode();

   // Re-enable transitions *after* layout settles
  requestAnimationFrame(() => {
    enableTransitions();
  });
}

navMobileQuery.addEventListener("change", handleBreakpoint);

/* ================================
   INIT
================================ */

disableTransitions();

navMobileQuery.matches ? setMobileMode() : setDesktopMode();

subnavTopBtn.addEventListener("click", () => {
  if (subnav.dataset.mode !== "mobile") return;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  closeNav();
});

const subnavPanel = subnav.querySelector(".subnav-panel");

subnavPanel.addEventListener("click", (e) => {
  if (e.target === subnavPanel) return;

  if (subnav.dataset.mode !== "mobile") return;

  const target = e.target.closest("a, button");
  if (!target) return;

  // Prevent double-handling for back-to-top
  if (target.id === "toTopMobile") return;

  closeNav();
});


requestAnimationFrame(() => {
  subnav.dataset.ready = "true";
});

subnav.dataset.state = "closed";

