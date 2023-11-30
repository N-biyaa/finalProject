const inputBox= document.getElementById("input-box");
const tasks= document.getElementById("tasks")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasks.appendChild(li);
    }

}
