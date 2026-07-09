//Swiper
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
const audio = document.querySelector("#lauschen-audio");
const animation = document.querySelector(".lausch-animation");
const vollbildButton = document.querySelector("#button-vollbild");

if (audio && animation && vollbildButton) {
  vollbildButton.addEventListener("click", async () => {
    const istVollbild = animation.classList.toggle("is-fullscreen");
  });

  animation.addEventListener("click", async () => {
    const istVollbild = animation.classList.toggle("is-fullscreen");
  });
}

//darkmode
const darkmodeButton = document.getElementById('darkmode-toggle');
const root = document.documentElement;
const storageKey = 'theme';
console.log(darkmodeButton)

if (!darkmodeButton) {
  // return;
}

const gespeichertesTheme = localStorage.getItem(storageKey);
console.log(gespeichertesTheme)
if (gespeichertesTheme === 'light' || gespeichertesTheme === 'dark') {
  root.setAttribute('data-theme', gespeichertesTheme);
}

darkmodeButton.addEventListener('click', function () {
  const aktuellesTheme = root.getAttribute('data-theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const naechstesTheme = aktuellesTheme === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', naechstesTheme);
  localStorage.setItem(storageKey, naechstesTheme);
});

//mobile Ansicht
const button = document.getElementById('navigation-toggle');
const overlay = document.getElementById('navigation-overlay');
const navigationLinks = document.querySelectorAll('.seiten-navigation a');

const schliessen = () => {
  document.documentElement.removeAttribute('nav-sichtbar');
  button.setAttribute('aria-expanded', 'false');
};

button.addEventListener('click', () => {
  document.documentElement.toggleAttribute('nav-sichtbar');
  const istOffen = document.documentElement.hasAttribute('nav-sichtbar');
  button.setAttribute('aria-expanded', istOffen ? 'true' : 'false');
});

overlay.addEventListener('click', schliessen);
navigationLinks.forEach(link => link.addEventListener('click', schliessen));
