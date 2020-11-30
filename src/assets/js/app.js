"use strict"

import Glide from '@glidejs/glide'
import WOW from "wow.js/dist/wow.min.js";



import Section from "./cards/constructor";

import previewCard from "./cards/previewCard";
import testimonialCard from "./cards/testimonialCard";
import featuresCard from "./cards/featuresCard";
import teamCard from "./cards/teamCard";

import {
    previewCardsData,
    testimonialCardsData,
    featuresCardsData,
    teamCardsData
} from "./cards/data";



import Slider from "./sliders/constructor";
import {
    sliderHTML,
    carouselHTML
} from "./sliders/constructor";
import {
    sliderProps,
    carouselProps,
    sliderData,
    carouselData,
} from "./sliders/data";

import addAnimations from "./animations/animations";


document.addEventListener("DOMContentLoaded", () => {

    // Section(parentSelector, cardClassName, innerHTMLfunction, contentArray)
    new Section(".preview__cards", "preview__card", previewCard, previewCardsData).render();
    new Section(".testimonial__cards", "testimonial__card", testimonialCard, testimonialCardsData).render();
    new Section(".features__cards", "features__card", featuresCard, featuresCardsData).render();
    new Section(".team__cards", "team__card", teamCard, teamCardsData).render();

    // Section(parentSelector, innerHTMLfunction, contentArray)
    new Slider(".glide", sliderHTML, sliderData).render();
    new Slider(".glide-carousel", carouselHTML, carouselData).render();

    new Glide(".glide", sliderProps).mount();
    new Glide(".glide-carousel", carouselProps).mount();

    new WOW().init();

    addAnimations();

    ///////////////////////////////////////////////////////////////////_____BURGER
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".header");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        header.classList.toggle("menu_open");
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
            });
        }, {
            threshold: [0.1, 0.5, 0.9]
        });
        io.observe(target);
    };
    document.querySelectorAll("[data-observer]").forEach(menuToggler); // data-observer


})