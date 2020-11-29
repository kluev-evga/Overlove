"use strict"
import Glide from '@glidejs/glide'
import WOW from "wow.js/dist/wow.min.js";


document.addEventListener("DOMContentLoaded", () => {
    ///////////////////////////////////////////////////////////////////_____SLIDER
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
        dragThreshold: 50,
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

    ///////////////////////////////////////////////////////////////////_____CAROUSEL
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
    ///////////////////////////////////////////////////////////////////_____BURGER

    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".header");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        header.classList.toggle("menu_open");
    })

    ///////////////////////////////////////////////////////////////////_____PREVIEW_CARDS
    document.querySelectorAll(".preview__card").forEach(item => {
        let x, y;

        function onmousemove(e) {
            let X = e.clientX - x + "px";
            let Y = e.clientY - y + "px";
            item.style = `background: radial-gradient(ellipse at top ${Y} left ${X}, #fff7 10%, #fff4 40%, #fff2);`
        }

        item.addEventListener("mouseenter", function() {
            let rect = this.getBoundingClientRect();
            x = rect.left;
            y = rect.top;
            this.addEventListener("mousemove", onmousemove);
        })
    })
    ///////////////////////////////////////////////////////////////////_____Observer

    const menuToggler = target => {
        const header = document.querySelector(".header");
        const previewCardsSection = document.querySelector(".preview__cards-section");
        const testimonial = document.querySelector(".testimonial");
        const slider = document.querySelector(".slider");
        const features = document.querySelector(".features");
        const carousel = document.querySelector(".carousel");
        const team = document.querySelector(".team");

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {

                if (entry.target === header) {
                    // console.log('header', entry.intersectionRatio);
                }
                if (entry.target === testimonial && entry.intersectionRatio > 0.4) {
                    // console.log('testimonial', entry.intersectionRatio);
                    testimonial.classList.add("active");
                }
                if (entry.target === previewCardsSection && entry.intersectionRatio > 0.4) {
                    // console.log('previewCards', entry.intersectionRatio);
                    previewCardsSection.classList.add("active");
                }
                if (entry.target === slider && entry.intersectionRatio > 0.4) {
                    slider.classList.add("active");
                }
                if (entry.target === features && entry.intersectionRatio > 0.4) {
                    features.classList.add("active");
                }
                if (entry.target === carousel && entry.intersectionRatio > 0.4) {
                    carousel.classList.add("active");
                }
                if (entry.target === team && entry.intersectionRatio > 0.4) {
                    team.classList.add("active");
                }
                if (entry.target === team && entry.intersectionRatio > 0.4) {
                    team.classList.add("active");
                }
                // data-observer


            });
        }, {
            threshold: [0.1, 0.5, 0.9]
        });

        io.observe(target);
    };

    document.querySelectorAll("[data-observer]").forEach(menuToggler);





    let wow = new WOW();
    wow.init();


    // wow animate__animated animate__zoomIn data-wow-delay="s"

    // let wow = new WOW({
    //     boxClass: 'wow', // animated element css class (default is wow)
    //     animateClass: 'animated', // animation css class (default is animated)
    //     offset: 0, // distance to the element when triggering the animation (default is 0)
    //     mobile: true, // trigger animations on mobile devices (default is true)
    //     live: true, // act on asynchronously loaded content (default is true)
    //     callback: function(box) {
    //         // the callback is fired every time an animation is started
    //         // the argument that is passed in is the DOM node being animated
    //     },
    //     scrollContainer: null, // optional scroll container selector, otherwise use window,
    //     resetAnimation: true, // reset animation on end (default is true)
    // });
    // wow.init();
})