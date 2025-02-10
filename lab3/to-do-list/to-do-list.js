const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("todo-list");
function addTask(){
    if (inputBox.value === ''){
        alert("Error empty task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}
listContainer.addEventListener("click", function (e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false);
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('todo-button').click(); // Симулируем клик по кнопке
    }
});