import heroImageCropped from "../assets/hero-image-cropped.jpg";
import heroLogo from "../assets/umi-logo-transparent.png";

export default function() {

    const content = document.getElementById("content");
    content.innerHTML = "";


    function createImage(src, id, alt) {
        const image = document.createElement("img");
        image.id = id;
        image.src = src;
        image.alt = alt;
        return image;
    }

    function createDiv(id, content = "") {
        const div = document.createElement("div");
        div.id = id;
        div.textContent = content;
        return div;
    }

    function createButton(id, content = "") {
        const button = document.createElement("button");
        button.id = id;
        button.textContent = content;
        return button;
    }

    const heroImage = createImage(heroImageCropped, "hero-image", "Chef Yumi Silva");
    content.appendChild(heroImage);

    /*
    const heroImage = document.createElement("img");
    heroImage.setAttribute("id", "hero-image");
    heroImage.src = heroImageCropped;
    content.appendChild(heroImage);
    */

    const landingInfo =  createDiv("landing-info");
    content.appendChild(landingInfo);

    const logo = createImage(heroLogo, "logo", "Umi Restaurant Logo");
    landingInfo.appendChild(logo);

    const landingText = createDiv("landing-text");
    landingInfo.appendChild(landingText);

    const hook = document.createElement("h1");
    hook.textContent = "East Meets West: Traditions Combined";
    landingText.appendChild(hook);

    const description = document.createElement("p");
    description.textContent = "Seasonal dishes crafted by renowned chef Yumi Silva, showcasing his innovative creations inspired by his Japanese-Brazilian heritage."
    landingText.appendChild(description);

    const landingButtons = createDiv("landing-buttons");
    landingInfo.appendChild(landingButtons);

    const homeButton = createButton("home-button", "Home");
    landingButtons.appendChild(homeButton);

    const menuButton = createButton("menu-button", "Menu");
    landingButtons.appendChild(menuButton);

    const reservationButton = createButton("reservation-button", "Reservations");
    landingButtons.appendChild(reservationButton);

    const about = createButton("about-button", "About");
    landingButtons.appendChild(about);
}