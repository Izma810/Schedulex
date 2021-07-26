// This is for Light to Dark theme toggle

document.querySelector('.slide').addEventListener('click', () => {
    console.log("You clicked HAWWW");
    document.querySelector('.slide').classList.toggle('toggles');
    document.querySelector('body').classList.toggle('background');
    document.querySelector(".to-do-list .new-task-button").classList.toggle("new-task");
    document.querySelector(".list li span").classList.toggle("removing");
    document.querySelector(".list").classList.toggle("litter");
    document.querySelector(".clear-all-button").classList.toggle("clear");
    document.querySelector(".blobby").classList.toggle("blob");
});

// This is basically to not display the ul originally

const luist = document.querySelector("#lists");
luist.style.display="none";

// Function for refreshing test in input-box

function refreshText(){
    document.querySelector("#text-input").value = "";
}

// Function to create new list item when the add button is clicked

function newItem(){
    const li = document.createElement("li");
    const textInput = document.querySelector("#text-input").value;
    const x = document.createTextNode(textInput);
    li.appendChild(x);
    if (textInput === '') {

    // You don't expect users to create blanks tasks, do you?

        alert("Tasks can't be blank!");
    } else {
        document.querySelector("#lists").appendChild(li);
    }

    //This will refresh the text value everytime 

    refreshText();

// Adding a remove button every time a new list is added

    const span = document.createElement("span");
    span.innerText = "x";
    li.appendChild(span);

    remove();
}

// Functioning of the remove button

function remove(){
const remove = document.querySelectorAll("span");
    // Looping so that every span has a remove button
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
});

// Add-Button functioning

document.querySelector(".new-task-button").addEventListener("click",()=>{
    console.log("New item added");
    luist.style.display = "inherit";
    newItem();
})

//Making function for clearing entire list

function clearAll(){
    const ilist = document.querySelector("#lists")
    ilist.innerHTML = "";
}

// Clearing entire list

const clearButton = document.querySelector(".clear-all-button")
const ilist = document.querySelector("#lists")
clearButton.addEventListener("click",function(event){
    ilist.style.display ="none";
    clearAll();

});

// Code Done :D