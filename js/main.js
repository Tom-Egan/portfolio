// ==========================
// Utilities
// ==========================

// Footer copyright year
function updateCopyrightYear() {
  const yearEl = document.getElementById('current-year');
  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
}

// Duplicate for mobile footer
function updateCopyrightYear2() {
  const yearEl2 = document.getElementById('current-year2');
  if (!yearEl2) return;

  yearEl2.textContent = new Date().getFullYear();
}

// Calculates years + months since a given date
// Used in the resume template
function yearsAndMonthsSince(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }

  return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
}

// Inject years of service into resume
function updateYearsOfService() {
  const el = document.getElementById('yearsOfService');
  if (!el) return;

  el.textContent = yearsAndMonthsSince('2016-01-01');
}

// =====================================
// Accordion Menu for Table of Contents
// =====================================

function initAccordion() {
  const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

// ==========================
// Template Loader
// ==========================

async function loadIncludes() {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const file = el.getAttribute("data-include");

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error(err);
    }
  }
}


// ==========================
// Site Initialization
// ==========================

function initSite() {
  updateCopyrightYear();
  updateCopyrightYear2();
  updateYearsOfService();
  initAccordion();
}

// ==========================
// Boot
// ==========================

loadIncludes().then(initSite);
