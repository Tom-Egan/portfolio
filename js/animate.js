// const elements = document.querySelectorAll("[data-animate]");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach(entry => {
//       const el = entry.target;

//       // visibility from 0 → 1
//       const progress = entry.intersectionRatio;

//       el.style.opacity = progress;
//       el.style.transform = `translateY(${24 * (1 - progress)}px)`;

//       if (progress > 0.6) {
//         el.classList.add("locked");
//       }
//     });
//   },
//   {
//     threshold: Array.from({ length: 20 }, (_, i) => i / 20)
//   }
// );

// elements.forEach(el => observer.observe(el));

const elements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.2
  }
);

elements.forEach(el => observer.observe(el));