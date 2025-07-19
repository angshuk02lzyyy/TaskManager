document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let title = document.getElementById("taskTitle").value.trim();
    let desc = document.getElementById("taskDesc").value.trim();

    if (!title) {
        alert("Task title is required!");
        return;
    }

    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);

    fetch("add_task.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(() => {
        loadTasks();
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDesc").value = "";
    });
}

function loadTasks() {
    fetch("fetch_tasks.php")
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach(task => displayTask(task));
        });
}

function displayTask(task) {
    let li = document.createElement("li");
    li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">
            <strong>${task.title}</strong>: ${task.description}
        </span>
        <button onclick="toggleComplete(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">❌</button>
    `;
    document.getElementById("taskList").appendChild(li);
}

function toggleComplete(id) {
    let formData = new FormData();
    formData.append("id", id);

    fetch("update_task.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(() => loadTasks());
}

function deleteTask(id) {
    let formData = new FormData();
    formData.append("id", id);

    fetch("delete_task.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(() => loadTasks());
}
