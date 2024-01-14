var inputBox = document.querySelector(".input-box");
var list = document.querySelector("#list-container");


function addTask() {
    if (inputBox.value === "") {
        alert("Enter task first!")
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        var span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        list.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function loadData() {
    list.innerHTML = localStorage.getItem("data");
}

loadData();