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
    console.log(user);

    
    if (user && user.password === password) {
     
      fetch(`http://localhost:8000/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({ isLogged: true }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));

   
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


const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", function () {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;

  if (type === "password") {
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  } else {
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  }
});