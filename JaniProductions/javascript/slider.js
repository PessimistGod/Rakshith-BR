const slider = document.querySelector('.slider');
let isPaused = false;

function moveSlider() {
  if (!isPaused) {
    const firstSlide = slider.firstElementChild;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${firstSlide.offsetWidth}px)`;
    slider.appendChild(firstSlide);
  }
}

// Move the slider automatically every 3 seconds
setInterval(moveSlider, 3000);

// Pause on mouse hover
slider.addEventListener('mouseover', () => {
  isPaused = true;
});

// Resume on mouse leave
slider.addEventListener('mouseout', () => {
  isPaused = false;
});

// Smoothly fade in and out on window resize
let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  slider.style.transition = 'transform 0.5s ease-in-out';

  resizeTimeout = setTimeout(() => {
    slider.style.transition = 'none';
  }, 500);
});
