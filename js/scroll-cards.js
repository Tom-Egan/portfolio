//=========================================
// Navigation Arrows for Card List
//=========================================

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const scrollableList = document.getElementById('cardWrapper');

const scrollAmount = 376; // Amount to scroll in pixels per click

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
        leftArrow.style.color = '#999';
    } else {
        leftArrow.style.color = '#fff';
    }

    // Hide right arrow if at the end
    if (scrollableList.scrollLeft + scrollableList.clientWidth >= scrollableList.scrollWidth) {
        rightArrow.style.color = '#999';
    } else {
        rightArrow.style.color = '#fff';
    }
});

// Initial check to set arrow visibility on page load
// This is important if the list is not scrollable initially
document.addEventListener('DOMContentLoaded', (event) => {
    if (scrollableList.scrollLeft === 0) {
        leftArrow.style.color = '#999';
    }
});