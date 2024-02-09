
// var taskInput = document.getElementById("new-task");//Add a new task.
// var addButton = document.getElementsByTagName("button")[0];//first button
// var incompleteTaskHolder = document.getElementById("incompleteTasks");//ul of #incompleteTasks
// var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

// addButton.onclick = addTask;
const addNewTaskInput = document.getElementById("new-task-input")
const listOfToDoTasks = document.getElementById("to-do-tasks-list")
const addNewTaskButton = document.getElementById("add-new-task-button")
addNewTaskButton.onclick = addNewTask


const deleteButtonsArray = document.querySelectorAll(".delete-btn")
deleteButtonsArray.forEach(element => {
    element.onclick = removeTask;
});

function renderTaskItem(taskName) {
    const container = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    // checkBox.onchange = checkBoxEventHandler;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "task-input";
    input.value = taskName;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn edit-btn";
    // editButton.onclick = editTask;

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

//Edit an existing task.

var editTask = function () {
    console.log("Edit Task...");
    console.log(`Change "edit" to "save"`);


    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var editBtn = listItem.querySelector(".edit");
    var containsClass = listItem.classList.contains("editMode");
    //If class of the parent is .editmode
    if (containsClass) {

        //switch to .editmode
        //label becomes the inputs value.
        label.innerText = editInput.value;
        editBtn.innerText = "Edit";
    } else {
        editInput.value = label.innerText;
        editBtn.innerText = "Save";
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
};


function removeTask() {
    console.log("Delete Task...");
    const taskItem = this.parentNode;
    const currentList = taskItem.parentNode;
    currentList.removeChild(taskItem);
}


//Mark task completed
var taskCompleted = function () {
    console.log("Complete Task...");

    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete = function () {
    console.log("Incomplete Task...");
    //Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incompleteTasks.
    var listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}





//The glue to hold it all together.


//Set the click handler to the addTask function.
// addButton.addEventListener("click", addTask);


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("bind list item events");
    //select ListItems children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");


    //Bind editTask to edit button.
    editButton.onclick = editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick = deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange = checkBoxEventHandler;
}




