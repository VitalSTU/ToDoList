// 30 - Delayed Execution

//Вывод каждую секунду
function printNumbers(from, to) {
    let i = from;
    let timerId = setInterval(function() {
        console.log(i);
        if (++i > to) clearTimeout(timerId);
    }, 1000);
}
//setInterval
printNumbers(5, 8);
//setTimeout


//Что покажет setTimeout?