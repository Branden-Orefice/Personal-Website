'use strict';

const mobileNav = () => {
  const headerButton = document.querySelector('.header__bars');
  const mobileHam = document.querySelector('.mobile-ham__button');
  const mobileLinks = document.querySelectorAll('mobile-nav__link');


  let isMobileNavOpen = false;

  headerButton.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileHam.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      mobileHam.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  mobileLinks.forEach(links => {
    links.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileHam.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
};

export default mobileNav;