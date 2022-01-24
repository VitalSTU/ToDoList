function Calc(action, var1, var2) {
    if (action === undefined || var1 === undefined || var2 === undefined) {
        alert('Error! calc must has 3 parameters');
    } else {
        !isNumber(+var1) ? alert(var1 + "Error! var1 isn't number") : 
                !isNumber(+var2) ? alert(var2 + "Error! var2 isn't number") : doAction(action, +var1, +var2);
    }
}

function isNumber(x) {
    return typeof(x) === 'number';
}

function doAction(action, var1, var2) {
    switch (action) {
        case 'sum':
            alert(var1 + var2);
            break;
        case 'sub':
            alert(var1 - var2);
            break;
        case 'mul':
            alert(var1 * var2);
            break;
        case 'div':
            alert(var1 / var2);
            break;
        case 'rem':
            alert(var1 % var2);
            break;
        case 'pow':
            alert(var1 ** var2);
            break;
        default:
            alert("Command hasn't recognised.");
            break;
    };
}

console.log(Calc('sum', 2, 5));
console.log(Calc('sub', 2, 5));
console.log(Calc('mul', 2, 5));
console.log(Calc('div', 2, 5));
console.log(Calc('rem', 2, 5));
console.log(Calc('pow', 2, 5));

Calc(prompt('Введите команду'), prompt('Введите число'), prompt('Введите число'));