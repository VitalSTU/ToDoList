// 30 - Closures

//Sample
let value = 'Surprise!';
function f() {
    let value = 'Hello, John!'; //Will be erased by brouser engine during optimisation
    let value1 = Math.random(); //Will be erased by brouser engine during optimisation
    function g() {
        let value2 = Math.random();
      debugger; //Type: alert(value); In console: No such variable!
    }
    return g;
  }
  let g = f();
  g();

//Объект счётчика
function sum(a) {
    return function(b) {
        return a + b;
    };
}
//console.log(sum(1)(2));
//console.log(sum(5)(-1));

//Фильтрация с помощью функции
function inBetween(a, b) {
    return function(x) {
        return (x >= a) && (x <= b);
    }
}
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10])) ); // 1,2

//Сортировать по полю
function printObj(obj) {
    for (const key in obj) {
        console.log(obj[key]);
    }
    console.log();
}
function byField(f) {
    return ((a, b) => a[f] > b[f] ? 1 : -1);
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
printObj(users);
users.sort(byField('name'));
printObj(users);
users.sort(byField('age'));
printObj(users);

//Армия функций
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // функция shooter
            console.log(j); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
