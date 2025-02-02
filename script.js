let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let mobil=document.querySelector('.mobile-nav')
let active=document.querySelector('.mobile-div')

const toggleButton = document.getElementById('toggleMenu');
const menu = document.querySelector('.menu');



toggleButton.addEventListener('click', function() {
    menu.classList.toggle('active');
});

;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].clientWidth; // Get width of one slide
  const offset = -index * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

function moveSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

showSlide(slideIndex); // Show initial slide


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
