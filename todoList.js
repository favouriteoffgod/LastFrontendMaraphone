const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    }
}

function addTask(task) {
    list[task] = "To Do";
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    let toDo = "";
    let inProgress = "";
    let done = "";
    
    for (let key in list) {
    switch (list[key]) {
        case "To Do":
            toDo += "\"" + key + "\"," + "\n "
            break;
        case "In Progress":
            inProgress += "\"" + key + "\"" + "\n"
            break;
        case "Done":
            done += "\"" + key + "\"" + "\n"
            break;
    }
    }
    
    if (toDo === "") { toDo = "-" };
    if (inProgress === "") { inProgress = "-" };
    if (done === "") { done = "-" };
    
    console.log("To Do:\n" + " " + toDo + "\n" + "In Progress:\n" + " " + inProgress + "\n" + "Done:\n" + " " + done);
}

addTask("make todo-list on js");
addTask("clean my room");
addTask("read marathone chat");
addTask("watch Artem's stream");
changeStatus("make todo-list on js", "In Progress");
deleteTask("make a bed");
changeStatus("create a task", "Done");
showList(); 