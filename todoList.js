const STATUS = {
    TO_DO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
};

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
    "create a task": STATUS.IN_PROGRESS,
    "make a bed": STATUS.DONE,
    "write a post": STATUS.TO_DO,
};

function checkValidStatus (status) {
   const isValidStatus = status in STATUS;  
   if (!isValidStatus) {
       console.log("Incorrect status!");
       return;
   }
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    } else {
        console.log("This task was not found");
    }
}

function addTask(task) {
    if (task in list) {
        console.log("This task already exist!")
    } else {
        list[task] = DEFAULT_STATUS;
    } 
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    } else {
        console.log("This task was not found");
    }
}

function showList() {
    const tasks = {
        [STATUS.DONE]: "",
        [STATUS.TO_DO]: "",
        [STATUS.IN_PROGRESS]: "",
    };
    
    for (let key in list) {
        tasks[list[key]] += `\"${key}\",\n`;
    };

    if (tasks[STATUS.TO_DO] === "") { 
        tasks[STATUS.TO_DO] = "-" 
    };
   
    if (tasks[STATUS.IN_PROGRESS] === "") {
        tasks[STATUS.IN_PROGRESS] = "-" 
    };
   
    if (tasks[STATUS.DONE] === "") { 
        tasks[STATUS.DONE] = "-" 
    };
    
    console.log(`To Do:\n ${tasks[STATUS.TO_DO]}\n In Progress:\n ${tasks[STATUS.IN_PROGRESS]}\n Done:\n ${tasks[STATUS.DONE]}`);
}

addTask("make todo-list on js");
addTask("clean my room");
addTask("read marathone chat");
addTask("watch Artem's stream");
changeStatus("make todo-list on js", "In Progress");
deleteTask("make a bed");
changeStatus("create a task", "Done");
showList();