// initialize
const todoInput = document.getElementById("add_input");
const addButton = document.getElementById("addTask");
const todoList = document.getElementById("todo_list");
const taskCount = document.getElementById("taskCount");
const tasksLeft = document.getElementById("tasksLeft");
const tasksCompleted = document.getElementById("tasksCompleted");

let tasks = []; // array for storing tasks

// function for updating task count
function updateTaskCount() {
    taskCount.textContent = `Total tasks: ${tasks.length}`;
    const completedTasks = tasks.filter(task => task.completed);
    tasksLeft.textContent = `Tasks left: ${tasks.length - completedTasks.length}`;
    tasksCompleted.textContent = `Tasks completed: ${completedTasks.length}`;
}

// function for rendering all the tasks from the array
function renderTasks() {
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
          <span class="${task.completed ? 'checked' : ''}">${task.text}</span>
          <button onclick="deleteTask(${index})" id="deleteButton">Delete</button>
        `;
        li.style.opacity = "0"; // Add a fade-in animation
        setTimeout(() => {
            li.style.opacity = "1";
        }, 100);
        todoList.appendChild(li);
    });
    updateTaskCount();
}

// function for creating new tasks
function addTask() {
    const text = todoInput.value.trim();
    if (text === "") return;
    tasks.push({ text, completed: false });
    todoInput.value = "";
    renderTasks();
}

// function for deleting new tasks
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// function for toggle
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

addButton.addEventListener("click", addTask);
