const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let img = document.createElement("img");
        img.src = "../images/summer_loading.png";

        li.appendChild(img);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener('click', function () {
            listContainer.removeChild(li);
        });
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
             
            });
        
        

        listContainer.appendChild(li);
        inputBox.value = '';
    }
    
    if (taskIsCompleted) {
        moveCompletedTaskToVendingMachine(taskElement);
    }
    
}


const addButton = document.getElementById("add-button");
addButton.addEventListener('click', addTask);

listContainer.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName === "SPAN") {
        target.parentElement.remove();
    }
}, false);