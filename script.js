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


const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));
if(leadFromLocalStorage){
    myLead = leadFromLocalStorage;
    render(myLead);
}



savedBtn.addEventListener('click', savedLead);
function savedLead(){
   myLead.push(inputEl.value);
   inputEl.value="";
   localStorage.setItem("myLead",JSON.stringify(myLead))
   render(myLead);
}


tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active : true, currentWindow: true}, function(tabs){
    myLead.push(tabs[0].url);
    localStorage.setItem("myLead",JSON.stringify(myLead));
    render(myLead);
    })
    
});

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear();
    myLead = [];
    render(myLead);
});