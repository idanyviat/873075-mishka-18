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
