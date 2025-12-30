const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('slide-active'));
    slides[index].classList.add('slide-active');
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Use modulo operator for looping
    showSlide(currentSlide);
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initial display (optional, if not set in HTML)
// showSlide(currentSlide);
