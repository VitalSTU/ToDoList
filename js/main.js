//044 ToDo List through Array with UI

export const STATUS = {
    DONE: "Done",
    TO_DO: "To Do",
}

export const DEFAULT_STATUS = STATUS.TO_DO;

export const PRIORITY = {
    HIGH: "High",
    MEDIUM: "Medium",
    LOW: "Low",
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

function getLineSeparator() {
    var div, ta, text;

    div = document.createElement("div");
    div.innerHTML = "<textarea>one\ntwo</textarea>";
    ta = div.firstChild;
    text = ta.value;

    return text.indexOf("\r") >= 0 ? "\r\n" : "\n";
}

function NotFoundException(message) {
    const lineSeparator = getLineSeparator();
    const NotFoundException = new Error(message);
    NotFoundException.name = 'NotFoundException';
    
    let newStack = NotFoundException.stack.split(lineSeparator);
    newStack.splice(1, 1);
    NotFoundException.stack = newStack.join(lineSeparator);

    return NotFoundException;
}

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
    try {
        if (!contains(array, name)) {
            throw new NotFoundException(`Task ${name} doesn't present in task list.`);
        }

        const index = getIndexByName(array, name);
        array[index].status = status;
    } catch (error) {
        console.error(error);
    }
}

export function changePriority(array, name, priority) {
    try {
        if (!contains(array, name)) {
            throw new NotFoundException(`Task ${name} doesn't present in task list.`);
        }

        const index = getIndexByName(array, name);
        array[index].priority = priority;
    } catch (error) {
        console.error(error);
    }
}

export function addTask(array, name, status = DEFAULT_STATUS, priority = DEFAULT_PRIORITY) {
    let result = false;

    try {
        if (contains(array, name)) {
            throw new NotFoundException(`Task ${name} already present in task list.`);
        }
        
        array.push({name, status, priority});
        result = true;
    } catch (error) {
        console.error(error);
    } finally {
        return result;
    }
}

export function deleteTask(array, name) {
    try {
        if (!contains(array, name)) {
            throw new NotFoundException(`Task ${name} doesn't present in task list.`);
        }

        array.splice(getIndexByName(array, name), 1);
    } catch (error) {
        console.error(error);
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
