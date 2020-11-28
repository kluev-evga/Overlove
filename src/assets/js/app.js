"use strict"
import Glide from '@glidejs/glide'


document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".header");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        header.classList.toggle("menu_open");
    })

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
        swipeThreshold: 50,
        dragThreshold: 100,
        touchAngle: 45,
        animationDuration: 350,
        rewind: false,
        breakpoints: {
            1580: {
                perView: 4
            },
            1280: {
                perView: 3
            },
            992: {
                perView: 2.5
            },
            768: {
                perView: 2
            },
            640: {
                perView: 2
            },
            480: {
                perView: 1.5
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



})