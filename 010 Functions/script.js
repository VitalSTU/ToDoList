let strX = prompt('Введите число');

function pow(x, n) {
    return n == 0 ? 1 : x * pow(x, n - 1);
}

if (strX.length > 0) {
    let x = +strX;
    let strN = isNaN(x) ? '' : prompt('Введите степень: целое число больше 0', 1);
    
    if (strN.length > 0) {
        let n = +strN;
        isNaN(n) ? alert('3. Введено не число') : 
                n > 0 ? alert(pow(x, n)) : alert('3. Введено не целое число больше 0');
    } else {
        alert('2. Введено не число');
    }
    
} else {
    alert('1. Введено не число');
}