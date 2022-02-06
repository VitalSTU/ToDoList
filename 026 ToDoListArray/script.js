//026 To Do List Through Array

const STATUS = {
    DONE: "Done",
    IN_PROGRESS: "In Progress",
    TO_DO: "To Do",
}

const DEFAULT_STATUS = STATUS.TO_DO;

const PRIORITY = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
}

const DEFAULT_PRIORITY = PRIORITY.LOW;

const taskArray = [
    {name: 'Wake up', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Go to bathroom', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Make breakfast', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Take breakfast', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Do work', status: STATUS.DONE, priority: PRIORITY.MEDIUM},
    {name: 'Watch Artem Dimitrov\'s stream', status: STATUS.DONE, priority: PRIORITY.MEDIUM},
    {name: 'Make lunch', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Take lunch', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Do marathon homework', status: STATUS.IN_PROGRESS, priority: PRIORITY.MEDIUM},
    {name: 'Hang around', status: STATUS.TO_DO, priority: PRIORITY.LOW},
    {name: 'Make dinner', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
    {name: 'Take dinner', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
    {name: 'Relax and rest', status: STATUS.TO_DO, priority: PRIORITY.MEDIUM},
]

function getTaskString(task) {
    return task.name + ' - ' + task.status + ' - ' + task.priority;
}

function printTask(array, ind) {
    console.log(getTaskString(array[ind]));
}

function getIndexByName(array, name){
    return array.findIndex(item => item.name === name);
}

function contains(array, name){
    return getIndexByName(array, name) > -1;
}

function changeStatus(array, name, status) {
    if (contains(array, name)) {
        let index = getIndexByName(array, name);
        array[index].status = status;
    } else {
		console.log("Task " + name + " doesn't present in task list.");
	}
}

function addTask(array, name, status = DEFAULT_STATUS, priority = DEFAULT_PRIORITY) {
    if (!contains(array, name)) {
        array.push({name, status, priority});
    } else {
		console.log("Task " + name + " already present in task list.");
	}
}

function deleteTask(array, name) {
    if (contains(array, name)) {
        array.splice(getIndexByName(array, name), 1);
    } else {
		console.log("Task " + name + " doesn't present in task list.");
	}
}

function showList(array) {
    const emptyString = '';
    let result = emptyString;

    for (let st in STATUS) {
        let status = STATUS[st];
        let tasks = emptyString;
        
        for (let task of array) {
            if (task.status === status) {
                tasks += "\t" + getTaskString(task) + "\n";
            }
        }

        result += status + ":\n";
        result += tasks === emptyString ? '\t-\n' : tasks;
    }

    return result;
}

function showBy(array, priority = DEFAULT_PRIORITY) {
    let newArray = array.filter(item => item.priority === priority);
    return priority + ':\n' + showList(newArray);
}

//Test object methods
let task = "Do marathon homework";
console.log(contains(taskArray, task));
console.log();

let ind = getIndexByName(taskArray, task);
printTask(taskArray, ind);
changeStatus(taskArray, task, STATUS.DONE);
printTask(taskArray, ind);
console.log();

task = "Play a videogame";
console.log(contains(taskArray, task));
addTask(taskArray, task);
console.log(contains(taskArray, task));
printTask(taskArray, getIndexByName(taskArray, task));
deleteTask(taskArray, task);
console.log(contains(taskArray, task));
console.log();

console.log(showList(taskArray));
console.log();

console.log(showBy(taskArray, PRIORITY.MEDIUM));
//Test end
