import { addData, BASE_URL, getAllData } from "../utils/helpers.js";


let registerForm = document.querySelector(".register-form");
let regAdminName = document.querySelector("#reg-admin-name");
let regAdminPass = document.querySelector("#reg-admin-password");
let isValid = document.querySelector(".isValidate-span-password");

const regEx = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;   




let isThere = false;
registerForm.addEventListener("submit",function(e){
    // e.preventDefault();
    async function getAdmin(){
        let {data} = await getAllData("admin");
        data.forEach(admin => {
            if(admin.name.trim() === regAdminName.value.trim() && admin.password === regAdminPass.value.trim()){
                isThere = true;
                Swal.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "There is already admin with that name",
                  }).then(() => {
                    window.location.href("login-admin.html");
                  });
                
            };
        }); 
        if(!isThere){
            if(isValidate()){
                let admin = {
                    name:regAdminName.value.trim(),
                    password:regAdminPass.value.trim(),
                    isLogged:false
                }
                addData("admin",admin);
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 3300
                  });
            }
        }
        
    }
    getAdmin();
    
})

function isValidate(){
    isValid.classList.remove("isValidate-false")
    if(!regEx.test(regAdminPass.value.trim())){
        isValid.classList.add("isValidate-false")
        console.log("aaaa")
        return false;
    }
    return true;
}