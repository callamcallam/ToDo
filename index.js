const textarea = document.querySelector('textarea');
const addBTN = document.getElementById('addBTN');
const todoContainer = document.querySelector('.todoContainer');

let todoList = []

function initalLoad() {
    if (!localStorage.getItem('todos')) {return}
    todoList = JSON.parse(localStorage.getItem('todos')).todoList
    updateUI()
}

initalLoad()

function addtodo() {
    const todo= textarea.value;
    
    if (!todo) {
        return
    }
    todoList.push(todo);
    textarea.value = '';
    updateUI();
}

function editTodo(index) {
    textarea.value = todoList[index]
    todoList = todoList.filter((element, elementIndex) => {
        if (index === elementIndex) { return false}
        return true
    })
}
function deleteTodo(index) {
    todoList = todoList.filter((element, elementIndex) => {
        if (index === elementIndex) { return false}
        return true
    })
    updateUI()
}

function updateUI() {
    let newInnterHTML = '';
    todoList.forEach((todoElement, todoIndex) => {
        newInnterHTML += `
        <div class="todo">
        <p>${todoElement}</p>
        <div class="btnContainer">
            <button class="iconBTN" onclick="editTodo(${todoIndex})"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="iconBTN" onclick="deleteTodo(${todoIndex})"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
        
        `
    });

    todoContainer.innerHTML = newInnterHTML;


    localStorage.setItem('todos', JSON.stringify({todoList}))
}

addBTN.addEventListener('click', addtodo);