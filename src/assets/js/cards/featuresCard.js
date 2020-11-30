export default function(iconClass, title, content) {
    return `
            <span class=${iconClass}><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
            <h3>${title}</h3>
            <p>${content}</p>
            `;
}