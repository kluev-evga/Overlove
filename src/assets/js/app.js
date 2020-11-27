"use strict"

// const burger = document.querySelector(".burger");
// const header = document.querySelector(".header");
// const nav = document.querySelector(".header nav");
// const menuOpen = document.querySelector(".menu-open");
// const menuClose = document.querySelector(".menu-close");

// burger.addEventListener("click", () => {
//     header.classList.toggle("open");
//     nav.classList.toggle("animate__slideInDown");
//     nav.classList.toggle("animate__slideOutUp");
// })


import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 5,
    focusAt: 0,
    gap: 40,
    autoplay: 5000,
    hoverpause: true,
    keyboard: true,
    bound: true,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: 1,
    touchAngle: 45,
    animationDuration: 350,
    rewind: false,
    breakpoints: {
        800: {
            perView: 2
        }
    }
}).mount();


new Glide('.glide-carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 0,
    autoplay: 5000,
    hoverpause: true,
    keyboard: true,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: 1,
    touchAngle: 45,
    animationDuration: 350,
}).mount();