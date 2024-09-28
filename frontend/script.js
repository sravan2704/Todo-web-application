const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
const Date1=document.getElementById("date");

function addTask(){
    if (inputbox.value==='' || Date1.value==='' ){
        alert("you must give date and todo task");
    
    }
    else{
        let li =document.createElement("li");
        let currdate=new Date();
        li.innerHTML=`${inputbox.value} -${currdate.toLocaleDateString()}`;
        listcontainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    Date1.value='';
    savedata()
}
listcontainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");

}
showtask();