// This is for Light to Dark theme toggle

document.querySelector('.slide').addEventListener('click', () => {
    console.log("You clicked HAWWW");
    document.querySelector('.slide').classList.toggle('toggles');
    document.querySelector('body').classList.toggle('background');
    document.querySelector(".to-do-list .new-task-button").classList.toggle("new-task");
    document.querySelector(".list li span").classList.toggle(".removing");
    document.querySelector(".list").classList.toggle("litter");
    document.querySelector(".clear-all-button").classList.toggle("clear");
    document.querySelector(".blobby").classList.toggle("blob");
});

// Function to create new list item when the add button is clicked

function newItem(){
    const li = document.createElement("li");
    const textInput = document.getElementById("text-input").value;
    const x = document.createTextNode(textInput);
    li.appendChild(x);
    if (textInput === '') {
        // You don't expect users to create blanks tasks, do you?
        alert("Tasks can't be blank!");
    } else {
        document.getElementById("lists").appendChild(li);
    }
    document.getElementById("text-input").value = "";

// Adding a remove button every time a new list is added

    const span = document.createElement("span");
    span.innerText = "x";
    li.appendChild(span);

    remove();
}

// Functioning of the remove button
function remove(){
const remove = document.querySelectorAll("span");
    for(let i=0; i<remove.length; i++){
        remove[i].addEventListener("click",()=>{
            remove[i].parentElement.style.display = "none";
            console.log("Removed");
        });
}
}
remove();

//Adding checked mark

const ulist = document.querySelector("#lists");
ulist.addEventListener("click",function(event){
    console.log("Checked");
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
},false);

// Add-Button functioning

document.querySelector(".new-task-button").addEventListener("click",()=>{
    console.log("New item added");
    newItem();
})

//Making function for clearing entire list

function clearAll(){
    const ilist = document.querySelector("#lists")
    ilist.innerHTML = "";
}

// Clearing entire list

const clearButton = document.querySelector(".clear-all-button")
clearButton.addEventListener("click",function(event){
    clearAll();
});

