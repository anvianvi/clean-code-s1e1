const addNewTaskInput = document.getElementById("new-task-input");
const listOfToDoTasks = document.getElementById("to-do-tasks-list");
const listOfComplitedTasks = document.getElementById("completed-tasks-list");
const addNewTaskButton = document.getElementById("add-new-task-button");
addNewTaskButton.onclick = addNewTask;

const checkBoxesArray = document.querySelectorAll(".to-do-item__status-togler");
checkBoxesArray.forEach(element => {
    element.onclick = toggleTaskCompleteStatus;
});

const deleteButtonsArray = document.querySelectorAll(".button--delete");
deleteButtonsArray.forEach(element => {
    element.onclick = removeTask;
});

const editeButtonsArray = document.querySelectorAll(".button--edit");
editeButtonsArray.forEach(element => {
    element.onclick = editExistingTask;
});

function renderTaskItem(taskName) {
    const container = document.createElement("li");
    container.className = "list-of-tasks__list-item";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "to-do-item__status-togler"
    checkBox.onchange = toggleTaskCompleteStatus;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "to-do-item__input";
    input.value = taskName;
    input.disabled = true;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "button button--edit";
    editButton.onclick = editExistingTask;

    const deleteButton = document.createElement("button");
    deleteButton.className = "button button--delete";
    deleteButton.onclick = removeTask;

    container.appendChild(checkBox);
    container.appendChild(input);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    return container;
}

function addNewTask() {
    if (!addNewTaskInput.value) return;
    const newTaskElement = renderTaskItem(addNewTaskInput.value);
    listOfToDoTasks.appendChild(newTaskElement);
    addNewTaskInput.value = "";
}

function editExistingTask() {
    const taskItem = this.parentNode;
    const input = taskItem.querySelector(".to-do-item__input");
    const editButton = taskItem.querySelector(".button--edit");

    if (input.disabled) {
        editButton.textContent = "Save";
        input.disabled = false;
    } else {
        input.disabled = true;
        editButton.textContent = "Edit";
    }
};

function removeTask() {
    const taskItem = this.parentNode;
    const currentList = taskItem.parentNode;
    currentList.removeChild(taskItem);
}

function toggleTaskCompleteStatus(event) {
    const taskItem = this.parentNode;
    if (event.target.checked) {
        listOfComplitedTasks.appendChild(taskItem);
    } else {
        listOfToDoTasks.appendChild(taskItem);
    }
}
