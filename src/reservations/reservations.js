export default function () {
    const reservationButton = document.getElementById("header-reservations");
    reservationButton.style.backgroundColor = "white";
    reservationButton.style.color = "rgb(var(--main-color))";

    const content = document.getElementById("content");
    content.classList.add = "reservation-content";

    const heading = document.createElement("h1");
    heading.id = "reservations-heading";
    heading.textContent = "Reserve Table";
    content.appendChild(heading);

    const description = document.createElement("p");
    description.id = "reservation-description";
    description.innerHTML = `UMI is committed to the highest quality 
                    of customer care. <br> <br> Please fill out the information 
                    accurately so we can best serve you. Please note that our 
                    reservations are typically booked out 3 months in advance. `
    content.appendChild(description);

    function createForm() {
        const form = document.createElement("form");

        content.appendChild(form);

        class Input {
            constructor(type, id, name, required) {
                this.type = type;
                this.id = id;
                this.name = name;
                this.required = required;
            }

            createInput(parentContainer) {
                const input = document.createElement("input");
                input.type = this.type;
                input.id = this.id;
                input.name = this.name;
                if (this.required) {
                    input.setAttribute("required", "required");
                }
                parentContainer.appendChild(input);
            }

            createLabel(parentContainer, textContent) {
                const label = document.createElement("label");
                label.setAttribute("for", this.name);
                label.textContent = textContent;
                parentContainer.appendChild(label);
            }
        }

        const firstName = new Input("text", "first-name", "first-name", true);
        firstName.createInput(form);
        firstName.createLabel(form, "First Name");

    }

    createForm();
}