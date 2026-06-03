const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//lauschen

// Variablen 
const lauschenSection = document.querySelector('section#lauschen')
const lauschenButtonVollbild = lauschenSection.querySelector('button.vollbild')
const lauschenAnimation = lauschenSection.querySelector('.lausch-animation')

//Event Listener zum Toggeln einer Klasse
lauschenButtonVollbild.addEventListener('click', () => {
  lauschenSection.classList.toggle('vollbild')
})

lauschenAnimation.addEventListener('click', () => {
  lauschSection.classList.toggle('vollbild')
})