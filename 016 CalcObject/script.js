//Calc through plain object
function Calc(action, var1, var2) {
    let paramsQtyError = action === undefined || var1 === undefined || var2 === undefined;

    let calculator = {
        sum: var1 + var2,
        sub: var1 - var2,
        mult: var1 * var2,
        div: var1 / var2,
    }
    
    if (paramsQtyError) {
        return 'Error! It must be 3 parameters.';
    } else if (!(action in calculator)) {
        return "Error! Unknown operation.";
    } else if (!isNumber(var1)) {
        return "Error! Variable 1 isn't number.";
    } else if (!isNumber(var2)) {
        return "Error! Variable 2 isn't number";
    }

    return calculator[action];
}

function isNumber(n) {
    return !isNaN(n) && typeof(n) === 'number';
}

console.log(Calc('sum', 2, 5));
console.log(Calc('sub', 2, 5));
console.log(Calc('mult', 2, 5));
console.log(Calc('div', 2, 5));

console.log(Calc('pow', 2, 5));

console.log(Calc('sum', 2));
console.log(Calc('sub'));
console.log(Calc());

console.log(Calc('mult', '2', 5));
console.log(Calc('div', 2, 'e'));
