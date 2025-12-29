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
  // initMobileNav();
  // initIADiagram();
}

// ==========================
// Boot
// ==========================

loadIncludes().then(initSite);
