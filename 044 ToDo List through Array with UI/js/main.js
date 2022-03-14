//044 ToDo List through Array with UI

export const STATUS = {
    DONE: "Done",
    TO_DO: "To Do",
}

export const DEFAULT_STATUS = STATUS.TO_DO;

export const PRIORITY = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
}

export const DEFAULT_PRIORITY = PRIORITY.LOW;

export const taskArray = [
    {name: 'Wake up', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Go to bathroom', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Make breakfast', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Take breakfast', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Do work', status: STATUS.DONE, priority: PRIORITY.MEDIUM},
    {name: 'Watch Artem Dimitrov\'s stream', status: STATUS.DONE, priority: PRIORITY.MEDIUM},
    {name: 'Make lunch', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Take lunch', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'Do marathon homework', status: STATUS.TO_DO, priority: PRIORITY.MEDIUM},
    {name: 'Hang around', status: STATUS.TO_DO, priority: PRIORITY.LOW},
    {name: 'Make dinner', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
    {name: 'Take dinner', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
    {name: 'Relax and rest', status: STATUS.TO_DO, priority: PRIORITY.MEDIUM},
]

export function getTaskString(task) {
    return task.name + ' - ' + task.status + ' - ' + task.priority;
}

export function printTask(array, ind) {
    console.log(getTaskString(array[ind]));
}

export function getIndexByName(array, name){
    return array.findIndex(item => item.name === name);
}

export function contains(array, name){
    return getIndexByName(array, name) > -1;
}

export function changeStatus(array, name, status) {
    if (contains(array, name)) {
        const index = getIndexByName(array, name);
        array[index].status = status;
    } else {
		console.log(`Task ${name} doesn't present in task list.`);
	}
}

export function changePriority(array, name, priority) {
    if (contains(array, name)) {
        const index = getIndexByName(array, name);
        array[index].priority = priority;
    } else {
		console.log(`Task ${name} doesn't present in task list.`);
	}
}

export function addTask(array, name, status = DEFAULT_STATUS, priority = DEFAULT_PRIORITY) {
    if (!contains(array, name)) {
        array.push({name, status, priority});
        
        return true;
    } else {
		console.log(`Task ${name} already present in task list.`);

        return false;
	}
}

export function deleteTask(array, name) {
    if (contains(array, name)) {
        array.splice(getIndexByName(array, name), 1);
    } else {
		console.log(`Task ${name} doesn't present in task list.`);
	}
}

export function showList(array) {
    const result = [];

    for (let st in STATUS) {
        const status = STATUS[st];
        const tasks = [];
        
        for (let task of array) {
            if (task.status === status) {
                tasks.push(getTaskString(task));
            }
        }
        result.push(status + ':');
        result.push('\t' + (!tasks.length ? '-' : tasks.join('\n\t')));
    }

    return result.join('\n');
}

export function showBy(array, priority = DEFAULT_PRIORITY) {
    let newArray = array.filter(item => item.priority === priority);
    return priority + ':\n' + showList(newArray);
}
