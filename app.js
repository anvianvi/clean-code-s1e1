
// var taskInput = document.getElementById("new-task");//Add a new task.
// var addButton = document.getElementsByTagName("button")[0];//first button
// var incompleteTaskHolder = document.getElementById("incompleteTasks");//ul of #incompleteTasks
// var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

// addButton.onclick = addTask;
const addNewTaskInput = document.getElementById("new-task-input")
const listOfToDoTasks = document.getElementById("to-do-tasks-list")
const listOfComplitedTasks = document.getElementById("completed-tasks-list")
const addNewTaskButton = document.getElementById("add-new-task-button")
addNewTaskButton.onclick = addNewTask

const checkBoxesArray = document.querySelectorAll(".task-status-togler")
checkBoxesArray.forEach(element => {
    element.onclick = toggleTaskCompleteStatus;
});

const deleteButtonsArray = document.querySelectorAll(".delete-btn")
deleteButtonsArray.forEach(element => {
    element.onclick = removeTask;
});

const editeButtonsArray = document.querySelectorAll(".edit-btn")
editeButtonsArray.forEach(element => {
    element.onclick = editExistingTask;
});

function renderTaskItem(taskName) {
    const container = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onchange = toggleTaskCompleteStatus;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "task-input";
    input.value = taskName;
    input.disabled = true;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn edit-btn";
    editButton.onclick = editExistingTask;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn delete-btn";
    const deleteButtonIcon = document.createElement("img");
    deleteButtonIcon.src = "./remove.svg";
    deleteButton.appendChild(deleteButtonIcon);
    deleteButton.onclick = removeTask;

    container.appendChild(checkBox);
    container.appendChild(input);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    return container;
}

function addNewTask() {
    console.log("Add Task...");

    if (!addNewTaskInput.value) return;

    const newTaskElement = renderTaskItem(addNewTaskInput.value);

    listOfToDoTasks.appendChild(newTaskElement);

    addNewTaskInput.value = "";
}

function editExistingTask() {
    console.log("Edit Task...");
    console.log(`Change "edit" to "save"`);
    const taskItem = this.parentNode;
    const input = taskItem.querySelector(".task-input");
    const editButton = taskItem.querySelector(".edit-btn");

    if (input.disabled) {
        editButton.textContent = "Save";
        input.disabled = false;
    } else {
        input.disabled = true;
        editButton.textContent = "Edit";
    }
};

function removeTask() {
    console.log("Delete Task...");

    const taskItem = this.parentNode;
    const currentList = taskItem.parentNode;
    currentList.removeChild(taskItem);
}

function toggleTaskCompleteStatus(event) {
    console.log("togle task status...");

    const taskItem = this.parentNode;
    if (event.target.checked) {
        listOfComplitedTasks.appendChild(taskItem);
    } else {
        listOfToDoTasks.appendChild(taskItem);
    }
}
