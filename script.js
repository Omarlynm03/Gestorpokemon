document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pokemonForm");

    // Validar el formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        // Verificar campos
        const titleInput = document.querySelector("#pokemonTitle");
        const regionInput = document.querySelector("#pokemonRegion");
        const descriptionInput = document.querySelector("#pokemonDescription");

        let isValid = true;

        // Validación individual de campos
        [titleInput, regionInput, descriptionInput].forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (!isValid) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pokemonForm");
    const pokemonCards = document.querySelector("#pokemonCards");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const titleInput = document.querySelector("#pokemonTitle");
        const regionInput = document.querySelector("#pokemonRegion");
        const descriptionInput = document.querySelector("#pokemonDescription");

        let isValid = true;
        [titleInput, regionInput, descriptionInput].forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (!isValid) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        // Crear tarjeta si todo es válido
        createCard(titleInput.value, regionInput.value, descriptionInput.value);
        form.reset();
    });

    function createCard(title, region, description) {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${title}</h5>
                </div>
                <div class="card-body">
                    <p><strong>Región:</strong> ${region}</p>
                    <p><strong>Descripción:</strong> ${description}</p>
                </div>
            </div>
        `;
        pokemonCards.appendChild(card);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pokemonForm");
    const pokemonCards = document.querySelector("#pokemonCards");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const titleInput = document.querySelector("#pokemonTitle");
        const regionInput = document.querySelector("#pokemonRegion");
        const descriptionInput = document.querySelector("#pokemonDescription");

        let isValid = true;
        [titleInput, regionInput, descriptionInput].forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (!isValid) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        // Crear tarjeta
        const card = createCard(titleInput.value, regionInput.value, descriptionInput.value);
        card.querySelector(".edit-card").addEventListener("click", () => {
            editCard(card, titleInput.value, regionInput.value, descriptionInput.value);
        });

        form.reset();
    });

    function createCard(title, region, description) {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${title}</h5>
                    <button class="btn btn-info btn-sm change-color">Cambiar Color</button>
                </div>
                <div class="card-body">
                    <p><strong>Región:</strong> ${region}</p>
                    <p><strong>Descripción:</strong> ${description}</p>
                    <button class="btn btn-warning btn-sm me-2 edit-card">Editar</button>
                    <button class="btn btn-danger btn-sm delete-card">Eliminar</button>
                </div>
            </div>
        `;
        pokemonCards.appendChild(card);
        return card;
    }

    function editCard(card, title, region, description) {
        const titleInput = document.querySelector("#pokemonTitle");
        const regionInput = document.querySelector("#pokemonRegion");
        const descriptionInput = document.querySelector("#pokemonDescription");

        titleInput.value = title;
        regionInput.value = region;
        descriptionInput.value = description;
        card.remove();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pokemonForm");
    const pokemonCards = document.querySelector("#pokemonCards");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const titleInput = document.querySelector("#pokemonTitle");
        const regionInput = document.querySelector("#pokemonRegion");
        const descriptionInput = document.querySelector("#pokemonDescription");

        let isValid = true;
        [titleInput, regionInput, descriptionInput].forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (!isValid) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        const card = createCard(titleInput.value, regionInput.value, descriptionInput.value);
        card.querySelector(".delete-card").addEventListener("click", () => {
            card.remove();
        });

        form.reset();
    });

    function createCard(title, region, description) {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${title}</h5>
                    <button class="btn btn-info btn-sm change-color">Cambiar Color</button>
                </div>
                <div class="card-body">
                    <p><strong>Región:</strong> ${region}</p>
                    <p><strong>Descripción:</strong> ${description}</p>
                    <button class="btn btn-warning btn-sm me-2 edit-card">Editar</button>
                    <button class="btn btn-danger btn-sm delete-card">Eliminar</button>
                </div>
            </div>
        `;
        pokemonCards.appendChild(card);
        return card;
    }
});