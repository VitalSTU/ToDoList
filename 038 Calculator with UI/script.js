//Calc through plain object
const RESULT_OBJECT_CLASS = '.text-result';

const ZERO = '0';
const EMPTY_STRING = '';
const ERROR_STRING = 'Error!';

const ACTION_SUM = 'sum';
const ACTION_SUB = 'sub';
const ACTION_MULT = 'mult';
const ACTION_DIV = 'div';

const OPERATOR_SUM = '+';
const OPERATOR_SUB = '-';
const OPERATOR_MULT = '×';
const OPERATOR_DIV = '÷';

let isError = false;
let operatorIsSet = false;
let operator = EMPTY_STRING;
let var1 = ZERO;
let var2 = ZERO;
let result = ZERO;

const OPERATORS = {
    [OPERATOR_SUM]: ACTION_SUM,
    [OPERATOR_SUB]: ACTION_SUB,
    [OPERATOR_MULT]: ACTION_MULT,
    [OPERATOR_DIV]: ACTION_DIV,
}

const FONT_SIZE = {
    1: '96px',
    7: '48px',
    14: '24px',
}

function isNumber(n) {
    return !isNaN(n) && typeof(n) === 'number';
}

function Calc(action, var1, var2) {
    let calculator = {
        sum: var1 + var2,
        sub: var1 - var2,
        mult: var1 * var2,
        div: var1 / var2,
    }
    let paramsQtyError = action === undefined || var1 === undefined || var2 === undefined;
    let actionInCalculator = action in calculator;
    let divisionByZero = action === ACTION_DIV && var2 === 0;

    if (paramsQtyError || !actionInCalculator || !isNumber(var1) || !isNumber(var2) || divisionByZero) {
        return ERROR_STRING;
    } else {
        return calculator[action];
    }
}

function clearData() {
    let resultObject = document.querySelector(RESULT_OBJECT_CLASS);

    isError = false;
    operatorIsSet = false;
    operator = EMPTY_STRING;
    resultObject.innerHTML = ZERO;
    resultObject.style.fontSize = FONT_SIZE[6];
    var1 = ZERO;
    var2 = ZERO;

    setFont(resultObject);
}

function calculate() {
    if (!isError) {
        let resultObject = document.querySelector(RESULT_OBJECT_CLASS);
        let result = Calc(OPERATORS[operator], +var1, +var2);
    
        clearData();
        resultObject.innerHTML = result;

        setFont(resultObject);
    }
}

function setOperator(elem) {
    let resultObject = document.querySelector(RESULT_OBJECT_CLASS);

    if (!operatorIsSet && !isError) {
        operator = elem.innerText;
        operatorIsSet = true;
    } else {
        isError = true;
        resultObject.innerHTML = ERROR_STRING;
    }
}

function addNumber(elem) {
    if (!isError) {
        let resultObject = document.querySelector(RESULT_OBJECT_CLASS);

        if (!operatorIsSet) {
            var1 = String(Number(var1 + elem.innerText));
            resultObject.innerHTML = var1;
        } else {
            var2 = String(Number(var2 + elem.innerText));
            resultObject.innerHTML = var2;
        }
    
        setFont(resultObject);
    }
}

function eraseLastNumber() {
    if (!isError) {
        let resultObject = document.querySelector(RESULT_OBJECT_CLASS);

        if (!operatorIsSet) {
            var1 = deleteLastNumber(var1);
            resultObject.innerHTML = var1;
        } else {
            var2 = deleteLastNumber(var2);
            resultObject.innerHTML = var2;
        }
    
        setFont(resultObject);
    }
}

function deleteLastNumber(str) {
    if (str.length === 1) {
        return ZERO;
    } else {
        return str.substring(0, str.length - 1);
    }
}

function setFont(elem) {
    for (const [limit, fontSize] of Object.entries(FONT_SIZE)) {
        if (elem.innerHTML.length >= limit) {
            elem.style.fontSize = fontSize;
        }
    }
}
