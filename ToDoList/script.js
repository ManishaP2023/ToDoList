let todoItems = [];
const list = document.getElementById('todoList');
const input = document.getElementById('todoInput');
const count = document.getElementById('taskCount');

function addTodo() {
    const todo = input.value;
    if (todo) {
        todoItems.push({
            text: todo,
            checked: false
        });
        input.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todoItems.splice(index, 1);
    renderTodos();
}

function toggleCheck(index) {
    todoItems[index].checked = !todoItems[index].checked;
    renderTodos();
}

function renderTodos() {
    list.innerHTML = '';
    count.innerText = todoItems.length;
    todoItems.forEach((todo, index) => {
        const item = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.checked;
        checkbox.onclick = () => toggleCheck(index);
        const span = document.createElement('span');
        span.style.textDecoration = todo.checked ? 'line-through' : 'none';
        span.innerText = todo.text;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTodo(index);
        item.appendChild(checkbox);
        item.appendChild(span);
        item.appendChild(deleteButton);
        list.appendChild(item);
    });
}
