import fallMenu from "../assets/fall-harvest-menu.png";

export default function () {

    const menuButton = document.getElementById("menu-button");
    menuButton.style.backgroundColor = "white";
    menuButton.style.color = "rgb(var(--main-color))";

    const content = document.getElementById("content");
    content.classList.add("menu-content");

    const heading = document.createElement("h1");
    heading.textContent = "Seasonal Fall 2024 Menu";
    content.appendChild(heading);

    const menu = document.createElement("img");
    menu.id = "menu"
    menu.src = fallMenu;
    content.appendChild(menu);
}