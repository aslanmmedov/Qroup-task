const loginForm = document.querySelector(".login-form");
const passwordInput = document.querySelector("#password");
const usernameEmailInput = document.querySelector("#username-email");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const usernameEmail = usernameEmailInput.value.trim();
    const password = passwordInput.value.trim();

    
    if (!usernameEmail || !password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields.",
        });
        return;
    }

    try {
        
        const response = await fetch("http://localhost:8000/companies-info");
        const users = await response.json();

       
        const user = users.find(
            (user) =>
                user.workemail === usernameEmail || user.name === usernameEmail
        );

        if (user && user.password === password) {
            
            await fetch(`http://localhost:8000/companies-info/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ isLogged: true }),
            });

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You are now logged in!",
                timer: 3000,
                timerProgressBar: true,
            }).then(() => {
                window.location.href = "main.html"; 
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid username or password.",
            });
        }
    } catch (error) {
        console.error("Error during login:", error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred, please try again later.",
        });
    }
});

const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    if (type === "password") {
        togglePassword.classList.remove("fa-solid fa-eye-slash");
        togglePassword.classList.add("fa-regular fa-eye");
    } else {
        togglePassword.classList.remove("fa-regular fa-eye");
        togglePassword.classList.add("fa-solid fa-eye-slash");
    }
});
