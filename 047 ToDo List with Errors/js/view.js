//044 ToDo List through Array with UI

import {
    PRIORITY, STATUS, DEFAULT_STATUS, taskArray, 
    addTask, deleteTask, changeStatus 
} from './main.js';

window.onload = function() {
    let frame = document.getElementsByClassName('frame')[0];

    for (const key in PRIORITY) {
        const priority = PRIORITY[key].toLowerCase();

        frame.append(createOnePriorityForm(priority));
    }
}

function createOnePriorityForm(priority) {
    let div = createListMainDiv(priority);

    div.append(createPriorityLabel(priority));
    div.append(createAddTaskForm(priority));

    for (const task of taskArray.filter(item => item.priority.toLowerCase() === priority)) {
        div.append(createTaskElement(task.name, task.status));
    }

    return div;
}

function createListMainDiv(priority) {
    let div = document.createElement('div');
    div.classList.add('list');
    div.classList.add(priority);
        
    return div;
}

function createPriorityLabel(priority) {
    let p = document.createElement('p');

    p.classList.add('header');
    p.innerText = priority.toUpperCase();
    
    return p;
}

function createAddTaskForm(priority) {
    const inputName = 'new-todo-' + priority;
    let form = document.createElement('form');
    let input = document.createElement('input');

    form.append(createAddSymbol());
    form.append(input);
    form.classList.add('container');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        addNewTask(this);
    });

    input.classList.add('input');
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Добавить');

    return form;
}

function createTaskElement(taskName, status = STATUS.TO_DO) {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let label = document.createElement('label');

    form.append(createDeleteSymbol());
    form.append(input);
    form.append(label);

    form.classList.add('container');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        deleteCurrentTask(this);
    });

    label.classList.add('label');
    label.innerText = taskName;
    input.setAttribute('type', 'checkbox');
    
    if (status === STATUS.DONE) {
        input.setAttribute('checked', true);
    }
    
    input.addEventListener('change', setNewStatus);

    return form;
}

function createAddSymbol() {
    let input = document.createElement('input');

    input.classList.add('button');
    input.classList.add('add-button');
    input.setAttribute('type', 'image');
    input.setAttribute('alt', 'Submit');
    input.setAttribute('width', '20');
    input.setAttribute('height', '20');
    input.setAttribute('src', './resourses/plus.png');

    return input;
}

function createDeleteSymbol() {
    let input = document.createElement('input');

    input.classList.add('button');
    input.classList.add('add-button');
    input.setAttribute('type', 'image');
    input.setAttribute('alt', 'Submit');
    input.setAttribute('width', '20');
    input.setAttribute('height', '20');
    input.setAttribute('src', './resourses/cross.png');

    return input;
}

function addNewTask(elem) {
    const taskName = elem.getElementsByClassName('input')[0].value;
    const priority = PRIORITY[elem.parentElement.classList[1].toUpperCase()];

    try {
        if (taskName && addTask(taskArray, taskName, DEFAULT_STATUS, priority)) {
            let task = createTaskElement(taskName);
            elem.parentElement.append(task);
        }
    } catch (error) {
        console.error(error);
    }
}

function deleteCurrentTask(elem) {
    const task = elem.getElementsByClassName('label')[0].innerText;
    
    deleteTask(taskArray, task);
    elem.remove()
}

function setNewStatus() {
    const taskName = this.nextSibling.innerText;
    if (this.checked) {
        changeStatus(taskArray, taskName, STATUS.DONE);
    } else {
        changeStatus(taskArray, taskName, STATUS.TO_DO);
    }
}
