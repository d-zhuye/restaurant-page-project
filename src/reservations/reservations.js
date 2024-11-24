export default function () {
    const reservationButton = document.getElementById("header-reservations");
    reservationButton.style.backgroundColor = "white";
    reservationButton.style.color = "rgb(var(--main-color))";

    const content = document.getElementById("content");
    content.classList.add("reservation-content");

    const heading = document.createElement("h1");
    heading.id = "reservations-heading";
    heading.textContent = "Reserve Table";
    content.appendChild(heading);

    const description = document.createElement("p");
    description.id = "reservation-description";
    description.innerHTML = `UMI is committed to the highest quality 
                    of customer care. <br> <br> Please fill out the information 
                    accurately so we can best serve you.  A member of our staff 
                    will reach out to you to schedule your reservation.  Please 
                    note that our reservations are typically booked out 3 
                    months in advance. `
    content.appendChild(description);

    function createForm() {
        const form = document.createElement("form");
        form.id = "reservation-form";
        content.appendChild(form);

        class Input {
            constructor(type, id, name, required, placeholder="") {
                this.type = type;
                this.id = id;
                this.name = name;
                this.required = required;
                this.placeholder = placeholder;
            }

            createInput() {
                const input = document.createElement("input");
                input.type = this.type;
                input.id = this.id;
                input.name = this.name;
                if (this.required) {
                    input.setAttribute("required", "required");
                }
                if (this.placeholder != "") {
                    input.setAttribute("placeholder", this.placeholder);
                }
                return input;
            }

            createLabel(textContent) {
                const label = document.createElement("label");
                label.setAttribute("for", this.name);
                label.textContent = textContent;
                return label;
            }

            createFormDiv(textContent) {
                const label = this.createLabel(textContent);
                const input = this.createInput();
                const div = document.createElement("div");
                div.classList.add("form-element");
                div.appendChild(label);
                div.appendChild(input);

                form.appendChild(div);
            }
        }

        const firstName = new Input("text", "first-name", "first-name", true);
        firstName.createFormDiv("*First Name");

        const lastName = new Input("text", "last-name", "last-name", true);
        lastName.createFormDiv("*Last Name");

        const email = new Input("email", "email", "email", true, "yourname@example.com");
        email.createFormDiv("*E-mail");

        const phone = new Input("tel", "phone-number", "phone-number", true);
        phone.createFormDiv("*Phone Number");

        const guests = new Input("number", "guests", "guests", true);
        guests.createFormDiv("*Number of Guests");

        const requestDiv = document.createElement("div");
        requestDiv.classList.add("form-element");

        const requests = document.createElement("textarea");
        requests.id = "requests";
        requests.name = "requests"
        requests.rows = "5";
        requests.placeholder = `ex: Dietary Restrictions, Accessibility Needs, Special Occassions`

        const requestLabel = document.createElement("label");
        requestLabel.setAttribute("for", "requests");
        requestLabel.textContent = "Special Requests";
        requestDiv.appendChild(requestLabel);
        requestDiv.appendChild(requests);

        form.appendChild(requestDiv);

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit Request";
        form.appendChild(submitButton);
    }

    createForm();
}