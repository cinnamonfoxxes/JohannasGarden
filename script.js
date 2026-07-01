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
const audio = document.querySelector("#lauschen-audio");
const animation = document.querySelector(".lausch-animation");
const vollbildButton = document.querySelector(".button-vollbild");

if (audio && animation && vollbildButton) {
  audio.addEventListener("play", () => {
    animation.classList.add("is-playing");
  });

  audio.addEventListener("pause", () => {
    animation.classList.remove("is-playing");
  });

  audio.addEventListener("ended", () => {
    animation.classList.remove("is-playing");
  });

  vollbildButton.addEventListener("click", async () => {
    const istVollbild = animation.classList.toggle("is-fullscreen");
    vollbildButton.setAttribute("aria-pressed", String(istVollbild));
    vollbildButton.textContent = istVollbild ? "Vollbild verlassen" : "Vollbild";

    // Optional: echter Browser-Vollbildmodus als Zusatz
    if (!document.fullscreenEnabled) {
      return;
    }

    try {
      if (istVollbild && document.fullscreenElement !== animation) {
        await animation.requestFullscreen();
      }

      if (!istVollbild && document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      // Wenn Fullscreen vom Browser blockiert wird, bleibt das CSS-Overlay aktiv.
    }
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

