import { getAllData } from "../utils/helpers.js";

const loginForm = document.querySelector(".register-form");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#work-email");
const nameInput = document.querySelector("#companyname");
const fileInput = document.querySelector("#company-photo");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    const companyname = nameInput.value.trim();
    const workemail = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const file = fileInput.files[0];
   
    // Validation
    // if (!companyname || !workemail || !password || !file) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Please fill all the fields.",
    //     });
    //     return;
    // }

    // New company data
    let resp = await getAllData("companies-info");
    let data = await getAllData("vacancies");
    let companyid = resp.data.find((p) => p.id);
    let companyJobs = data.data.find((q) => q.companyId === companyid);
    let vacancy = [];
    vacancy.push(companyJobs);
    
    const companyData = {
        id: Date.now(),
        name: companyname,
        workemail: workemail,
        password: password,
        photo: file.name,
        createdAt: new Date().toISOString(),
        vacancy:vacancy
    };

    try {
        // Check if company already exists
        const response = await fetch("http://localhost:8000/companies-info");
        const companies = await response.json();

        const companyExists = companies.some(
            (company) =>
                company.name === companyname || company.workemail === workemail
        );

        // if (companyExists) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "The company name or work email is already taken. Please choose another.",
        //     });
        //     return;
        // }

        // Add new company data
        const postResponse = await fetch("http://localhost:8000/companies-info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(companyData),
        });

        if (postResponse.ok) {
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "Company registered successfully!",
                timer: 3000,
                timerProgressBar: true,
            }).then(() => {
                window.location.href = "login-company.html"; // Redirect to login page
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

// Show file name when file is selected
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('.file-input');
    const customButton = document.querySelector('.custom-file-button');
    const fileNameSpan = document.querySelector('.file-name');

    customButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        fileNameSpan.textContent = fileInput.files.length > 0
            ? fileInput.files[0].name
            : 'No file selected';
    });
});