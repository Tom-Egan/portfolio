// ==============================
// Hero Fade In/Out 
// ==============================

// document.addEventListener('DOMContentLoaded', (event) => {
//   const trigger = document.getElementById('heroAnimTrigger');
//   const target = document.getElementById('heroAnimTarget');
//   const tldr = document.getElementById('tldr');

//   // Options for the observer (e.g., 0% visibility needed to trigger)
//   const options = {
//     root: null, // observe relative to the viewport
//     rootMargin: '0px',
//     threshold: 0.1 // Trigger when 10% of the trigger element is visible
//   };

//   // Callback function for when the intersection status changes
//   const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // Element is entering the viewport
//         target.classList.add('hero-fade');
//         tldr.classList.remove('tldr-show');
//       } else {
//         // Element is exiting the viewport (scrolling back up or away)
//         target.classList.remove('hero-fade');
//         tldr.classList.add('tldr-show');
//       }
//     });
//   };

//   // Create the observer and start observing the trigger element
//   const observer = new IntersectionObserver(observerCallback, options);
//   observer.observe(trigger);
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const trigger = document.getElementById('exe_sum_trigger');
  const exeSumText1 = document.getElementById('anim-enter-right1');
  const exeSumText2 = document.getElementById('anim-enter-right2');
  const exeSumText3 = document.getElementById('anim-enter-right3');
  const exeSumText4 = document.getElementById('anim-enter-right4');
  const exeSumImage = document.getElementById('anim-enter-left1');

  // Options for the observer (e.g., 0% visibility needed to trigger)
  const options = {
    root: null, // observe relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the trigger element is visible
  };

  // Callback function for when the intersection status changes
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is entering the viewport
        exeSumText1.classList.add('fade-in-right');
        exeSumText2.classList.add('fade-in-right');
        exeSumText3.classList.add('fade-in-right');
        exeSumText4.classList.add('fade-in-right');
        exeSumImage.classList.add('fade-in-left');
      } else {
        // Element is exiting the viewport (scrolling back up or away)
        exeSumText1.classList.remove('fade-in-right');
        exeSumText2.classList.remove('fade-in-right');
        exeSumText3.classList.remove('fade-in-right');
        exeSumText4.classList.remove('fade-in-right');
        exeSumImage.classList.remove('fade-in-left');
      }
    });
  };

  // Create the observer and start observing the trigger element
  const observer = new IntersectionObserver(observerCallback, options);
  observer.observe(trigger);
});





// ==============================
// Progress Bar 
// ==============================

// window.addEventListener('scroll', () => {
//   const bar = document.getElementById('progress-bar');
//   const scrolled = window.scrollY;
//   const viewportHeight = window.innerHeight; // This is your 100vh hero height
//   const fullHeight = document.documentElement.scrollHeight;

//   // 1. Calculate the 'remaining' scrollable distance AFTER the hero
//   // We subtract viewportHeight twice: once for the hero, once for the final screen view
//   const trackableHeight = fullHeight - (viewportHeight * 2);

//   // 2. Logic: Only fill if we are past the hero section
//   if (scrolled > viewportHeight) {
//     const progress = ((scrolled - viewportHeight) / trackableHeight) * 100;
//     // Math.min/max ensures it stays between 0 and 100%
//     bar.style.width = Math.min(Math.max(progress, 0), 100) + "%";
//   } else {
//     bar.style.width = "0%";
//   }
// });





