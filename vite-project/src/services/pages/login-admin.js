import { BASE_URL, editDataById, editDataByIdI, getAllData } from "../utils/helpers.js";

let loginForm = document.querySelector(".login-form");
let regAdminName = document.querySelector("#reg-admin-email-username");
let regAdminPass = document.querySelector("#reg-admin-password");

loginForm.addEventListener("submit",function(event){
    event.preventDefault();
    async function getAdmin(e){
        let {data} = await getAllData("admin");
        adminIsValidate(data);
    }
    getAdmin();
})

function adminIsValidate(d){
    d.forEach(admin => {
        let islogged = {
            isLogged:true
        }
        console.log(admin)
        if(admin.name.trim() === regAdminName.value.trim() && admin.password === regAdminPass.value.trim()){
            editDataByIdI("admin",admin.id,islogged)
        };
    });
}
