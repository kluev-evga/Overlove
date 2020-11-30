export default function(src, alt, title, descr) {
    return `
            <img src=${src} alt=${alt}>
            <div>
                <b>${title}</b>
                <span>${descr}</span>
                <ul class="socials">
                    <li> <a href="http://instagram.com"><i class="icon-instagram"></i></a> </li>
                    <li> <a href="http://telegram.com"><i class="icon-telegram"></i></a> </li>
                    <li> <a href="http://linkedin.com"><i class="icon-linkedin"></i></a> </li>
                </ul>
            </div>
            `;
}