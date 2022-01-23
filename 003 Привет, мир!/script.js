let sender = 'Vitaly';

function showMessage(from, message = requestMessage(from)) {
    alert(from + ' says: ' + message);
}

function requestMessage(from) {
    return prompt(from + ', type message');
}

showMessage(sender);
