import { addData, BASE_URL, getAllData } from "../utils/helpers.js";


let registerForm = document.querySelector(".register-form");
let regAdminName = document.querySelector("#reg-admin-name");
let regAdminPass = document.querySelector("#reg-admin-password");
let isValid = document.querySelector(".isValidate-span-password");

const regEx = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;

registerForm.addEventListener("submit",function(e){
    e.preventDefault();
    if(isValidate()){
        let admin = {
            name:regAdminName.value.trim(),
            password:regAdminPass.value.trim(),
            isLogged:false
        }
        addData("admin",admin);
    }
})

function isValidate(){
    isValid.classList.remove("isValidate-false")
    console.log(regEx.test(regAdminPass.value.trim()))
    
    if(!regEx.test(regAdminPass.value.trim())){
        isValid.classList.add("isValidate-false")
        console.log("aaaa")
        return false;
    }
    return true;
}