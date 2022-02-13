// 30 - Delayed Execution


// 1 - Вывод каждую секунду

//setInterval
function printNumbersInterval(from, to) {
    let n = from;
    let timerId = setInterval(() => {
        console.log(n);
        if (n++ == to) {
            clearInterval(timerId);
        }
    }, 1000, n);
}
printNumbersInterval(3, 8);

//setTimeout
function printNumbersTimeout(from, to) {
    let n = from;
    setTimeout(function repeat() {
        console.log(n);
        if (n++ < to) {
            setTimeout(repeat, 1000);
        }
    }, 1000, n);
}
printNumbersTimeout(3, 8);
