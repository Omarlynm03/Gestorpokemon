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
