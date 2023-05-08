// let inputField = document.getElementById('inputField');
// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');

// addToDoButton.addEventListener('click', function () {
//     var paragraph = document.createElement('p');
//     paragraph.classList.add('paragraph.styling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = "";
//     paragraph.addEventListener('click', function () {
//         paragraph.style.textDecoration = "line-through";
//     })
//     paragraph.addEventListener('dblclick', function () {
//         toDoContainer.removeChild(paragraph);
//     })

// })

//---------------------------------------------------------------------

const addTodoForm = document.getElementById('add-todo-form');
const input_Field = document.getElementById('inputField');
const todoList = document.getElementById('todo-list');
const updateTodoButton = document.getElementById('update-todo-button');
const deleteTodoButton = document.getElementById('delete-todo-button');

let todos = [];

function saveTodos() {
    localStorage.setItem('todo-list',JSON.stringify(todos));
}

function loadTodos() {
    const todosJSON = localStorage.getItem('todo-list')
    if (todosJSON) {
        todos = JSON.parse(todosJSON);
        renderTodos();
    }
}

function editTodo(index) {
    alert(index)
    document.getElementById('one').style.color='white'
}

function renderTodos() {
    todoList.innerHTML = ''
    todoList.innerHTML = todos.map((item,i) => 
        
    `<li style="margin:10px;">
        ${item?.text}
        <button id = "one" style="background-color:green" onclick="editTodo(${i})">Edit</button>
        <button style="background-color:red" id="delBtn${i}">Delete</button>
    
    </li>
    `).join("\n");

    todos.map((item, i) => {
        document.getElementById(`delBtn${i}`).onclick = () => {
            confirm(`are you sure you want to delete ${i})${todos[i].text}`)
        }
    })
}

addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input_Field.value.trim();
    if (text.length > 0) {
        todos.push({text});
        saveTodos();//function
        renderTodos();//function
        input_Field.value = '';
    }
});

updateTodoButton.addEventListener('click', () => {
    const index = prompt('Enter the index of the todo to UPDATE:');
    if (index >= 0 && index < todos.length) {
        const text = prompt('Enter the new text for the todo:');
        if (text.trim().length > 0) {
            todos[index].text = text.trim();
            saveTodos();//function
            renderTodos();//function
        }
    }
});

deleteTodoButton.addEventListener('click', () => {
    const index = prompt('Enter the index of the todo to DELETE:');
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        saveTodos();//function
        renderTodos();//function
    }
});

loadTodos();

function edit(){
    updateTodoButton.addEventListener('click', () => {
        const index = prompt('Enter the index of the todo to UPDATE:');
        if (index >= 0 && index < todos.length) {
            const text = prompt('Enter the new text for the todo:');
            if (text.trim().length > 0) {
                todos[index].text = text.trim();
                saveTodos();//function
                renderTodos();//function
            }
        }
    });
}