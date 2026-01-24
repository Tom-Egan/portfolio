/* =========================================
   Stacked Cards Interaction (Mobile Only)
========================================= */

/* ---------- Breakpoint ---------- */
const cardsMobileQuery = window.matchMedia("(max-width: 700px)");

/* ---------- Tunable constants ---------- */
const OVERLAP_DISTANCE_DEFAULT = 120;
const OVERLAP_DISTANCE_TALL = 350;

const MAX_SCALE_REDUCTION = 0.07;
const MAX_OPACITY_REDUCTION = 0.8;
const MAX_BLUR = 5;

/* ---------- State ---------- */
let cards = [];
let isEnabled = false;

/* ---------- Helpers ---------- */
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

/* ---------- Enable ---------- */
function enableStackedCards() {
  if (isEnabled) return;
  isEnabled = true;

  cards = Array.from(
    document.querySelectorAll(".list--scroll-cards .card")
  );

  if (!cards.length) return;

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Disable ---------- */
function disableStackedCards() {
  if (!isEnabled) return;
  isEnabled = false;

  window.removeEventListener("scroll", onScroll);

  cards.forEach(card => {
    card.style.transform = "";
    card.style.opacity = "";
    card.style.filter = "";
  });
}

/* ---------- Core scroll logic ---------- */
function onScroll() {
  cards.forEach((card, index) => {
    const nextCard = cards[index + 1];
    if (!nextCard) return;

    const cardRect = card.getBoundingClientRect();
    const nextRect = nextCard.getBoundingClientRect();

    /* detect tall cards */
    const overlapDistance =
      cardRect.height > 380
        ? OVERLAP_DISTANCE_TALL
        : OVERLAP_DISTANCE_DEFAULT;

    /*
      When next card top enters overlap zone
    */
    const overlap =
      overlapDistance - (nextRect.top - cardRect.top);

    const progress = clamp(overlap / overlapDistance);

    /* visual mapping */
    const scale = 1 - progress * MAX_SCALE_REDUCTION;
    const opacity = 1 - progress * MAX_OPACITY_REDUCTION;
    const blur = progress * MAX_BLUR;

    card.style.transform = `scale(${scale})`;
    card.style.opacity = opacity;
    card.style.filter = `blur(${blur}px)`;
  });
}

/* ---------- Media query wiring ---------- */
function handleBreakpoint(e) {
  if (e.matches) {
    enableStackedCards();
  } else {
    disableStackedCards();
  }
}

cardsMobileQuery.addEventListener("change", handleBreakpoint);

/* ---------- Init ---------- */
if (cardsMobileQuery.matches) {
  enableStackedCards();
}
