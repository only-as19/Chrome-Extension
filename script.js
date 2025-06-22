let myLead = [];
const savedBtn = document.getElementById("inputBtn");
const inputEl = document.getElementById("input-El")
const ulEl = document.getElementById("ul-El");
const deleteBtn = document.getElementById("deleteBtn");
const tabBtn = document.getElementById("tab-btn");


function render(leads){
    let listItems = "";
    for(let i = 0; i < leads.length; i++){
        listItems +=`
        <li>
            <a target ='_blank' href ='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>`;
        console.log(listItems)
    }
    ulEl.innerHTML = listItems;
}
