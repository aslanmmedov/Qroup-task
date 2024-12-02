
const loginForm = document.querySelector(".login-form");
const passwordInput = document.querySelector("#pass-word");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#username");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const password = passwordInput.value.trim();
    const nameInput = nameInput.value.trim();
    const emailInput = emailInput.value.trim();


    const userData = {
        username: username,
        email: email,
        password: password,
        isLogged: false,
    };

})



