function calc(action, var1, var2) {
    if (action === undefined || var1 === undefined || var2 === undefined) {
        alert('Error! calc must has 3 parameters');
    } else {
        !isNumber(var1) ? alert(var1 + "Error! var1 isn't number") : 
                !isNumber(var2) ? alert(var2 + "Error! var2 isn't number") : doAction(action, var1, var2);
    }
}

function isNumber(x) {
    //return x.length > 0 && !isNaN(+x);
    return typeof(x) === 'number';
}

function doAction(action, var1, var2) {
    switch (action) {
        case 'sum':
            alert(+var1 + +var2);
            break;
        default:
            alert("Command hasn't recognised.");
            break;
    };
}

calc(prompt('Введите команду'), prompt('Введите число'), prompt('Введите число'));