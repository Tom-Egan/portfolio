let menuOpen = false;

function toggleMenu() {
  const overlay = document.getElementById("nav-overlay");
  const hamLine1 = document.getElementById("ham-line1");
  const hamLine2 = document.getElementById("ham-line2");
  const hamLine3 = document.getElementById("ham-line3");
  const navBtn = document.getElementById("navBtn");


  if (menuOpen) {
    // close the mneu
    navBtn.style.position = 'absolute';
    overlay.style.position = 'absolute';
    overlay.style.height = '200px';
    overlay.style.width = '200px';
    overlay.style.borderBottomLeftRadius = '50%';
    overlay.style.top = '-120px';
    overlay.style.right = '-100px';
    hamLine1.style.transform = 'rotate(0deg)';
    hamLine1.style.top = '0px';
    hamLine1.style.left = '4px';
    hamLine2.style.opacity = '1';
    hamLine3.style.transform = 'rotate(0deg)';
    hamLine3.style.top = '16px';
    hamLine3.style.left = '4px';
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.marginLeft = "500px";
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
    hamLine1.style.transform = 'rotate(45deg)';
    hamLine1.style.top = '10px';
    hamLine1.style.left = '7px';
    hamLine2.style.opacity = '0';
    hamLine3.style.transform = 'rotate(-45deg)';
    hamLine3.style.top = '10px';
    hamLine3.style.left = '2px';
    document.querySelectorAll(".nav-link").forEach(function(element) {
      element.style.marginLeft = "0px";
    });
    menuOpen = true;
  }
}