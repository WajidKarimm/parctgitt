document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        addTodoItem();
    });

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    });

    function addTodoItem() {
        const taskText = todoInput.value.trim(); // Get text and remove whitespace

        if (taskText === "") {
            alert("Please enter a task!");
            return; // Don't add empty tasks
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        todoList.appendChild(listItem);

        todoInput.value = ""; // Clear the input field
        todoInput.focus();    // Focus back on the input field
    }
});