export default function(src, title, content) {
    return `
            <img src=${src} alt="icon">
            <h3>${title}</h3>
            <p>${content}</p>
            `;
}