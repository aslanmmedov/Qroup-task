const loginForm = document.querySelector(".login-form");
const passwordInput = document.querySelector("#password");
const usernameEmailInput = document.querySelector("#username-email");

let isLogged = false;

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
    const response = await fetch("http://localhost:8000/users");
    const users = await response.json();

    const user = users.find(
      (user) => user.email === usernameEmail || user.name === usernameEmail
    );

    if (user && user.password === password) {
      isLogged = true;

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are now logged in!",
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.href = "main.html";
        },
      });
    } else {
      isLogged = false; 
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
