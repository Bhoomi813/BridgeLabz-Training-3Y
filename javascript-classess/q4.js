"use strict";

class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    createForm() {
        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach(field => {
            formHTML += `
                <label for="${field.name}">${field.label}</label><br>
                <input
                    type="${field.type}"
                    id="${field.name}"
                    name="${field.name}"
                    required
                ><br><br>
            `;
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += "</form>";

        this.container.innerHTML = formHTML;

        document.getElementById("dynamicForm")
            .addEventListener("submit", event => {
                event.preventDefault();

                const formData = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(formData, null, 2);
            });
    }

    getFormData() {
        const data = {};

        this.fields.forEach(field => {
            data[field.name] =
                document.getElementById(field.name).value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder(fields, "formContainer");
builder.createForm();