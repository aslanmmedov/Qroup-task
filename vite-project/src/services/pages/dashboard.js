import { addData, deleteDataById, getAllData } from "../utils/helpers.js";


let companyForm = document.querySelector("form");
let jobName = document.querySelector(".name")
let salary = document.querySelector(".salary")
let description = document.querySelector(".description")
let employmenttype = document.querySelector(".employmentType")
let image = document.querySelector(".imG")



let { data } = await getAllData("vacancies");
// console.log(data)


let date = new Date();
let tbody = document.querySelector("tbody");
function addVacancie() {
    companyForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        let job = {
            title:jobName.value.trim(),
            salary:salary.value.trim(),
            description:description.value.trim(),
            employmentType:employmenttype.value.trim(),
            postedAt:`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            imgUrl:image.value.trim(),
            
            
        }
        console.log(job.postedAt);
        async function addNewJob(){
            let {data} = await addData("vacancies",job);
        }
        addNewJob();
        drawTable(data);
    })
}
addVacancie();


function drawTable(jobs,event) {
    // console.log(products);
    tbody.innerHTML = "";
    jobs.forEach(job => {
        let prodElem = document.createElement("tr");
        prodElem.className = "job-table";
        prodElem.innerHTML = `
                    <td><img src="${job.imgUrl}" alt="" class = "img-table"></td>
                    <td>${job.id}</td>
                    <td>${job.title}</td>
                    <td>${job.salary}</td>
                    <td>${job.description}</td>
                    <td>${job.employmentType}</td>
                    <td>${job.postedAt}</td>
                    <td class = "actions">
                        <a href = "edit.html?id=${job.id}" target = "blanck" class = "btn btn-warning edit">Edit</a>
                        <button class = "btn btn-danger delete" data-id =${job.id}>Delete</button>
                    </td>
        `
        tbody.appendChild(prodElem);
    });
    let dltBtn = document.querySelectorAll(".delete");
    dltBtn.forEach(btn => {
        // console.log(btn)
        let dataId = btn.getAttribute("data-id");
        btn.addEventListener("click",function(){
            deleteDataById("vacancies",dataId);
            btn.closest("tr").remove();
        })
    });
}
drawTable(data);