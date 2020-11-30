const sliderProps = {
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
        480: {
            perView: 1.5
        }
    }
}

const carouselProps = {
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
}


const sliderData = [
    ["./assets/images/slider/slide1.jpg"],
    ["./assets/images/slider/slide2.jpg"],
    ["./assets/images/slider/slide3.jpg"],
    ["./assets/images/slider/slide4.jpg"],
    ["./assets/images/slider/slide5.jpg"],
    ["./assets/images/slider/slide6.jpg"],
    ["./assets/images/slider/slide7.jpg"],
    ["./assets/images/slider/slide8.jpg"],
    ["./assets/images/slider/slide9.jpg"],
    ["./assets/images/slider/slide10.jpg"],
    ["./assets/images/slider/slide11.jpg"],
    ["./assets/images/slider/slide12.jpg"],
    ["./assets/images/slider/slide13.jpg"],
    ["./assets/images/slider/slide14.jpg"],
]

const carouselData = [
    ["Enjoy this product", "This project required a huge amount of hours but sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim."],
    ["Slide Two", "This project required a huge amount of hours but sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim."],
    ["Slide Three", "This project required a huge amount of hours but sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim."],
    ["Slide Four", "This project required a huge amount of hours but sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim."],
]

export {
    sliderProps,
    carouselProps,
    sliderData,
    carouselData,
};