document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const completedTasksList = document.getElementById("completedTasksList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox"; // Add a checkbox input
            const label = document.createElement("label");
            label.textContent = taskText;
            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Add event listener for task completion
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    listItem.classList.add("completed");
                    // Move the completed task to the Completed Tasks section
                    completedTasksList.appendChild(listItem);
                } else {
                    listItem.classList.remove("completed");
                    // Move the incomplete task back to the Tasks section
                    taskList.appendChild(listItem);
                }
            });
        }
    });
});
