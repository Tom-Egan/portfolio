let menuOpen = false;

function toggleMenu() {
  const overlay = document.getElementById("nav-overlay");
  const hamLine1 = document.getElementById("ham-line1");
  const hamLine2 = document.getElementById("ham-line2");
  const hamLine3 = document.getElementById("ham-line3");
  const cornerCircle = document.getElementById("corner-circle-base");
  const navBtn = document.getElementById("navBtn");
  const overlayContainer = document.getElementById("overlay-container");



  if (menuOpen) {
    // close the mneu
    navBtn.style.position = 'absolute';
    overlay.style.position = 'absolute';
    overlay.style.height = '200px';
    overlay.style.width = '200px';
    overlay.style.borderBottomLeftRadius = '50%';
    overlay.style.top = '-120px';
    overlay.style.right = '-100px';
    overlay.style.background = 'var(--medium-green)';
    overlayContainer.style.maxWidth = '100%';
    cornerCircle.style.position = 'absolute';
    cornerCircle.style.height = '200px';
    cornerCircle.style.width = '200px';
    cornerCircle.style.borderBottomLeftRadius = '50%';
    cornerCircle.style.top = '-120px';
    cornerCircle.style.right = '-100px';
    hamLine1.style.transform = 'rotate(0deg)';
    hamLine1.style.top = '0px';
    hamLine1.style.left = '4px'
    hamLine1.style.color = 'var(--sand)';
    hamLine2.style.color = 'var(--sand)';
    hamLine3.style.color = 'var(--sand)';
    hamLine2.style.opacity = '1';
    hamLine3.style.transform = 'rotate(0deg)';
    hamLine3.style.top = '16px';
    hamLine3.style.left = '4px';
    
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.color = "var(--accent-teal)";
    });

    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.opacity = "0";
    });
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.pointerEvents = "none";
    });
    
    menuOpen = false;

  } else {
    // open the menu
    navBtn.style.position = 'fixed';
    overlay.style.position = 'fixed';
    overlay.style.height = '100%';
    overlay.style.width = '100%';
    overlay.style.borderBottomLeftRadius = '0';
    overlay.style.top = '0';
    overlay.style.right = '0';
    overlay.style.background = 'var(--dark-green)';
    overlayContainer.style.maxWidth = '800px';
    cornerCircle.style.position = 'fixed';
    cornerCircle.style.height = '120%';
    cornerCircle.style.width = '120%';
    cornerCircle.style.borderBottomLeftRadius = '0';
    cornerCircle.style.top = '0';
    cornerCircle.style.right = '0';
    hamLine1.style.transform = 'rotate(45deg)';
    hamLine1.style.top = '10px';
    hamLine1.style.left = '7px';
    hamLine1.style.color = 'var(--dark-green)';
    hamLine2.style.color = 'var(--dark-green)';
    hamLine3.style.color = 'var(--dark-green)';
    hamLine2.style.opacity = '0';
    hamLine3.style.transform = 'rotate(-45deg)';
    hamLine3.style.top = '10px';
    hamLine3.style.left = '2px';
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.color = "var(--sand)";
    });
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.opacity = "1";
    });
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.pointerEvents = "auto";
    });
    menuOpen = true;
  }
}