const navMain = document.querySelector('.navigation-bar');
const navToggle = document.querySelector('.navigation-bar__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation-bar--closed')) {
    navMain.classList.remove('navigation-bar--closed');
    navMain.classList.add('navigation-bar--opened');
  } else {
    navMain.classList.add('navigation-bar--closed');
    navMain.classList.remove('navigation-bar--opened');
  }
});

/*
* Slider
*/
const slides = document.querySelectorAll('.reviews__slide-item'),
      prev = document.querySelector('.btn-left'),
      next = document.querySelector('.btn-right');
let slideIndex = 1;

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => item.classList.add('hidden'));
  slides[slideIndex - 1].classList.remove('hidden');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prev.addEventListener('click', function() {
  plusSlides(-1);
});

next.addEventListener('click', function() {
  plusSlides(1);
});

showSlides(slideIndex);