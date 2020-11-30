export default function(src, alt, title, descr, content) {
    return `
        <img src=${src} alt=${alt}>
        <div>${title}</div>
        <span>${descr}</span>
        <p>${content}</p>
        `;
}