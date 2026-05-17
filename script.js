document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const title = document.getElementById("taskTitle").value.trim();
    const desc = document.getElementById("taskDesc").value.trim();

    if (!title) {
        alert("Task title is required!");
        return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);

    fetch("add_task.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("taskTitle").value = "";
            document.getElementById("taskDesc").value = "";
            loadTasks();
        } else {
            alert("Failed to add task.");
        }
    })
    .catch(() => alert("Error connecting to server."));
}

function loadTasks() {
    fetch("fetch_tasks.php")
    .then(res => res.json())
    .then(tasks => {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        if (tasks.length === 0) {
            taskList.innerHTML = '<p class="empty-msg">No tasks yet. Add one above!</p>';
            return;
        }

        tasks.forEach(task => displayTask(task));
    })
    .catch(() => {
        document.getElementById("taskList").innerHTML =
            '<p class="empty-msg">Could not load tasks.</p>';
    });
}

function displayTask(task) {
    const li = document.createElement("li");

    const textDiv = document.createElement("div");
    textDiv.className = "task-text" + (task.completed == 1 ? " completed" : "");
    textDiv.innerHTML = `
        <strong>${escapeHtml(task.title)}</strong>
        <span>${escapeHtml(task.description || "")}</span>
    `;

    const btnComplete = document.createElement("button");
    btnComplete.className = "btn-complete";
    btnComplete.textContent = "✔";
    btnComplete.title = "Toggle complete";
    btnComplete.addEventListener("click", () => toggleComplete(task.id));

    const btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.textContent = "✕";
    btnDelete.title = "Delete task";
    btnDelete.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(textDiv);
    li.appendChild(btnComplete);
    li.appendChild(btnDelete);

    document.getElementById("taskList").appendChild(li);
}

function toggleComplete(id) {
    const formData = new FormData();
    formData.append("id", id);

    fetch("update_task.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(() => loadTasks())
    .catch(() => alert("Error updating task."));
}

function deleteTask(id) {
    if (!confirm("Delete this task?")) return;

    const formData = new FormData();
    formData.append("id", id);

    fetch("delete_task.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(() => loadTasks())
    .catch(() => alert("Error deleting task."));
}

// Prevent XSS from user input
function escapeHtml(str) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
