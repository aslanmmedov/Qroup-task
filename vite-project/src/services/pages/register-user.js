const loginForm = document.querySelector(".login-form");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#username");
const fileInput = document.querySelector("#file");

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const file = fileInput.files[0];

  
  if (!username || !email || !password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all the fields.",
 
    });
    return;
  }

  const userData = {
    id: Date.now(),
    name: username,
    email: email,
    password: password,
  };

  try {

    const response = await fetch("http://localhost:8000/users");
    const users = await response.json();

    const userExists = users.some(
      (user) =>
        user.name === username ||
        user.email === email ||
        user.password === password
    );

    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The username, email or password is already taken. Please choose another.",
  
      });
      return;
    }

    const postResponse = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });


    if (postResponse.ok) {
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "User registered successfully!",
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
        
          window.location.href = "login-user.html";
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, please try again.",
     
      });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "An error occurred, please try again later.",
 
    });
  }
});
