'use strict';
AOS.init();

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    freeMode: {
      enabled: false,
      sticky: true,
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 30
      },

      895: {
        slidesPerView: 2.5,
      },

      768: {
        slidesPerView: 2,
      },

      595: {
        slidesPerView: 1.5,
      },

      520: {
        slidesPerView: 1.2,
        spaceBetween: 40,
      },

      425: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          enabled: false,
        },
        autoplay: {
          enabled: false,
        },
      },

      375: {
        loopedSlides: 9,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 700,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
          clickable: true,
        },
        scrollbar: {
          enabled: false,
        },

        autoplay: {
          enabled: true,
          delay: 8500,
        },
      },

      320: {
        loopedSlides: 9,
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 700,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
          clickable: true,
        },
        scrollbar: {
          enabled: false,
        },

        autoplay: {
          enabled: true,
          delay: 8500,
        },
      },
    }
});

let cardContainer = document.getElementById('load_card_container');
let cardBtnOpen = document.getElementById('more_card');
let cardOpen = document.querySelectorAll('.card_open');

function openCardFunction(){
  cardOpen.forEach((item) => {item.classList.add('open')})
}

cardBtnOpen.addEventListener('click', () => {
  cardBtnOpen.classList.add('hidden');
  cardContainer.classList.add('open');
  openCardFunction();
})

let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let burgerNav = document.getElementById('burger_nav');
let closeBurger = document.getElementById('close_burger');
let bg = document.getElementById('bg')
const body = document.body;
const html = document.documentElement;

function allback(){
  bg.classList.remove('open')
  bg.classList.add('back');
  burgerBtn.classList.remove('open');
  burgerMenu.classList.add('back');
  setTimeout(()=>{
    bg.classList.remove('back');
    burgerMenu.classList.remove('back')
    bg.classList.remove('open');
    burgerNav.classList.remove('play');
    burgerMenu.classList.remove('open');
    burgerNav.classList.remove('play');
  }, 500)
}

burgerBtn.addEventListener('click', () =>{
  burgerBtn.classList.toggle('open');
  burgerMenu.classList.toggle('open');
  if(burgerBtn.classList.contains('open')){
      bg.classList.add('open');
      setTimeout(()=>{burgerNav.classList.add('play')}, 200);
      body.style.overflowY = 'hidden';
      html.style.overflowY = 'hidden'
      body.style.height = "100vh";
  } else {
      body.style.overflowY = 'auto';
      html.style.overflowY = 'auto';
      body.style.height = "auto";
      allback()
  }
})

closeBurger.addEventListener("click", () => {
  allback()
  body.style.overflowY = 'auto';
  html.style.overflowY = 'auto'
  body.style.height = "auto";
})
