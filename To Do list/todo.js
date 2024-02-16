var Listcontainer=document.getElementById("List-container");
var inputbox=document.getElementById("input-box");

function Execute(){
    if(inputbox.value==""){
        window.alert("Please enter any task name");
    } else {
        let list=document.createElement("li");
        list.innerHTML=inputbox.value;
        Listcontainer.appendChild(list);

        let span1=document.createElement("span");
        span1.innerHTML="x";
        list.appendChild(span1);
    }
    inputbox.value="";
    save();
}

Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        save();
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();
    }
})

function save(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}

function show(){
    Listcontainer.innerHTML=localStorage.getItem("data");
}

show();