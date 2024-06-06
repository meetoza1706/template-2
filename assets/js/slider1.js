let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  buttons = document.querySelectorAll('.car-owl-button > div');
  buttons.forEach(function(button, i) {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlide(currentIndex);
  let buttons = document.querySelectorAll('.car-owl-button > div');
  buttons.forEach(function(button, i) {
    button.addEventListener("click", function() {
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      showSlide(i);
      currentIndex = i;
    });
  });

  setInterval(nextSlide, 4500);
});
  