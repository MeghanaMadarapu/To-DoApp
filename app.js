let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (){
    if(inp.value == ""){
        alert("Please enter a task");
        return;
    }
    let item = document.createElement("li");
    item.innerText = inp.value;

    let span = document.createElement("span");
    span.innerText = "\u00d7";
    item.appendChild(span);

    console.log(item);

    ul.appendChild(item);
    inp.value = "";
    
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "SPAN"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
    else if(event.target.nodeName == "LI"){
        event.target.classList.toggle("checked");
    }
});