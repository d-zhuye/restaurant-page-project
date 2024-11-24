import umiLogo from "../assets/umi-basic-transparent.png";

export default function () {
    const body = document.body;
    body.innerHTML = "";

    function createDiv(id, content = "") {
        const div = document.createElement("div");
        div.id = id;
        div.textContent = content;
        return div;
    }

    function createButton(id, content = "") {
        const button = document.createElement("button");
        button.classList.add = "";
        button.id = id;
        button.textContent = content;
        return button;
    }

    const header = document.createElement("header");
    body.appendChild(header);

    const logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    logo.src = umiLogo;
    header.appendChild(logo);


    const menu = createButton("header-menu", "Menu");
    header.appendChild(menu);

    const reservations = createButton("header-reservations", "Reservations");
    header.appendChild(reservations);

    const aboutus = createButton("header-about-us", "About Us");
    header.appendChild(aboutus);

}