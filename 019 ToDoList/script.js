//Statuses list
const STATUS = {
    DONE: "Done",
    IN_PROGRESS: "In Progress",
    TO_DO: "To Do",
}

const DEFAULT_STATUS = STATUS.TO_DO;

//Простой TODO лист без графического интерфейса
const taskList = {
    contains: contains,
    changeStatus: changeStatus,
    addTask: addTask,
    deleteTask: deleteTask,
    showList: showList,
    "Wake up": STATUS.DONE,
    "Go to bathroom": STATUS.DONE,
    "Make breakfast": STATUS.DONE,
    "Take breakfast": STATUS.DONE,
    "Do work": STATUS.DONE,
    "Watch marathon stream": STATUS.DONE,
    "Make lunch": STATUS.DONE,
    "Take lunch": STATUS.DONE,
    "Do marathon homework": STATUS.IN_PROGRESS,
    "Hang around": STATUS.TO_DO,
    "Make dinner": STATUS.TO_DO,
    "Take dinner": STATUS.TO_DO,
    "Relax and rest": STATUS.TO_DO,
}

function contains(task){
    return task in this;
}

//Функция changeStatus - будет менять статус задачи
function changeStatus(task, status) {
    if (this.contains(task)) {
        this[task] = status;
    } else {
		console.log("Task " + task + " doesn't present in task list.");
	}
}

//Функция addTask - добавляет новую задачу
function addTask(task, status = STATUS.DEFAULT_STATUS) {
    if (!this.contains(task)) {
        this[task] = status;
    } else {
		console.log("Task " + task + " already present in task list.");
	}
}

//Функция deleteTask - удаляет задачу
function deleteTask(task) {
    if (this.contains(task)) {
        delete this[task];
    } else {
		console.log("Task " + task + " doesn't present in task list.");
	}
}

//Функция showList будет выводить весь список дел в виде
function showList() {
    const emptyString = '';
    let result = emptyString;

    for (let st in STATUS) {
        let status = STATUS[st];
        let tasks = emptyString;
        
        for (let task in this) {
            if (this[task] == status) {
                tasks += "\t" + task + "\n";
            }
        }

        result += status + ":\n";
        result += tasks === emptyString ? '\t-\n' : tasks;
    }

    return result;
}

//Test object methods
let task = "Do marathon homework";
console.log(taskList[task]);
taskList.changeStatus(task, STATUS.DONE);
console.log(taskList[task]);
console.log();

task = "Play a videogame";
console.log(taskList.contains(task));
taskList.addTask(task);
console.log(taskList.contains(task));
taskList.deleteTask(task);
console.log(taskList.contains(task));
console.log();

console.log(taskList.showList());
