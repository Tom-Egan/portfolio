// 1. Declare variables at the TOP
let index = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');
const wrapper = document.getElementById('slidesWrapper');
let startX = 0;
let endX = 0;
const threshold = 50; // Minimum distance in pixels to count as a swipe




// 2. Central function to update visual state
function updateDisplay() {
    // Remove 'active' from ALL slides and dots
    slides.forEach(slide => slide.classList.remove('slide-active'));
    dots.forEach(dot => dot.classList.remove('dot-active'));

    // Shift wrapper left by (index * 100)%
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    // Add 'active' to the CURRENT one
    slides[index].classList.add('slide-active');
    dots[index].classList.add('dot-active');
}

// Capture the starting position
wrapper.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
});

// Capture the ending position and determine direction
wrapper.addEventListener('pointerup', (e) => {
    endX = e.clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = startX - endX;

    if (swipeDistance > threshold) {
        // Swiped Left -> Show Next Slide
        index = (index + 1) % slides.length; // Use modulo operator for looping
        updateDisplay();
    } else if (swipeDistance < -threshold) {
        // Swiped Right -> Show Previous Slide
        index = (index - 1 + slides.length) % slides.length;
        updateDisplay();
    }
}

// 3. Button logic: Update the index, then call updateDisplay
function changeSlide(step) {
    index = (index + step + slides.length) % slides.length;
    updateDisplay();
}

// 4. Dot logic: Set index directly, then call updateDisplay
function currentSlide(n) {
    index = n;
    updateDisplay();
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length; // Use modulo operator for looping
    updateDisplay();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateDisplay();
});

