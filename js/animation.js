'use strict';

(function () {

  const aboutUsBlock = document.querySelector('.about-us');
  const workersBlock = document.querySelector('.workers');
  const servicesBlock = document.querySelector('.services');
  const portfolioBlock = document.querySelector('.portfolio');
  const contactBlock = document.querySelector('.contact');

  const allBlocksForAnimation = [aboutUsBlock, workersBlock, servicesBlock, portfolioBlock, contactBlock];

  let options = {
    threshold: .4
  };

  function aboutUsAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('animated');
      }
    });
  }

  const observer = new IntersectionObserver(aboutUsAnimation, options);

  allBlocksForAnimation.forEach(block => observer.observe(block));



})();
