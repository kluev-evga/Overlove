export default class {

    constructor(parentSelector, innerHTML, content) {

        this.parentElement = document.querySelector(`${parentSelector} .glide__slides`);
        this.innerHTML = innerHTML;
        this.content = content;

        return this;
    }

    render() {
        this.content.map(content => {
            const element = document.createElement("li");
            element.classList.add("glide__slide");
            element.innerHTML = this.innerHTML(...content);
            this.parentElement.append(element);
        })
    }
}

function sliderHTML(src) {
    return `<img src=${src} alt="unslplash"></img>`
}

function carouselHTML(title, content) {
    return `<h2>${title}</h2>
            <p>${content}</p>
            `;
}

export {
    sliderHTML,
    carouselHTML
};