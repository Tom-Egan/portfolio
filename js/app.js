// Select all elements with the common class
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Options for the Intersection Observer
const observerOptions = {
    root: null, // observe within the browser viewport
    rootMargin: '0px',
    threshold: 0.1 // callback runs when 10% of element is visible
};

// Callback function to run when an element intersects
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'is-visible' class to the target element
            entry.target.classList.add('is-visible');
            // Optional: stop observing the element after it has animated once
            observer.unobserve(entry.target);
        }
        // If you want animations to reverse when scrolling out of view, add an else condition
        else {
            entry.target.classList.remove('is-visible');
        }
    });
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Tell the observer to observe each element in the list
elementsToAnimate.forEach(element => {
    observer.observe(element);
});


//=========================================
// Media Query - Add animation classes
//=========================================

// 1. Create a media query object for max-width: 635px
const mobileQuery = window.matchMedia("(max-width: 635px)");

function handleBreakpoint(e) {
    // Find all elements with the class ".card"
    const cards = document.querySelectorAll('.summary-card');
    // outside wrapper for cards, toggling between
    // a single, horizontal list and column for mobile
    const cardWrapper = document.getElementById("cardWrapper");

    if (e.matches) {
        // If screen is 635px or less, add the animation class
        cards.forEach(card => card.classList.add('animated-card'));
        // override card width 
        cards.forEach(card => card.style.minWidth = "100%");
        // on mobile, force outside wrapper to single column
        cardWrapper.classList.add('flex-wrap');
        cardWrapper.classList.remove('no-wrap');
        // remove horizontal scroll
        cardWrapper.style.overflowX = "clip";
    } else {
        // Optional: Remove it when the screen is larger than 635px
        cards.forEach(card => card.classList.remove('animated-card'));
        // reset card width to default
        cards.forEach(card => card.style.minWidth = "400px");
        // on desktop, force cards into single, horizontal list
   		cardWrapper.classList.remove('flex-wrap');
        cardWrapper.classList.add('no-wrap');
        // add horizontal scroll
        cardWrapper.style.overflowX = "auto";
    }
}

// 2. Register the listener to detect changes
mobileQuery.addEventListener("change", handleBreakpoint);

// 3. Run once on page load to check initial state
handleBreakpoint(mobileQuery);


//=========================================
// Navigation Arrows for Card List
//=========================================

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const scrollableList = document.getElementById('cardWrapper');

const scrollAmount = 412; // Amount to scroll in pixels per click

rightArrow.addEventListener('click', () => {
    // Scrolls the element to the right by the specified amount
    scrollableList.scrollLeft += scrollAmount;
});

leftArrow.addEventListener('click', () => {
    // Scrolls the element to the left by the specified amount
    scrollableList.scrollLeft -= scrollAmount;
});

// Optional: Hide/Show arrows based on scroll position
scrollableList.addEventListener('scroll', () => {
    // Hide left arrow if at the beginning
    if (scrollableList.scrollLeft === 0) {
        leftArrow.style.opacity = '0.2';
    } else {
        leftArrow.style.opacity = '1';
    }

    // Hide right arrow if at the end
    if (scrollableList.scrollLeft + scrollableList.clientWidth >= scrollableList.scrollWidth) {
        rightArrow.style.opacity = '0.2';
    } else {
        rightArrow.style.opacity = '1';
    }
});

// Initial check to set arrow visibility on page load
// This is important if the list is not scrollable initially
document.addEventListener('DOMContentLoaded', (event) => {
    if (scrollableList.scrollLeft === 0) {
        leftArrow.style.opacity = '0.2';
    }
});
