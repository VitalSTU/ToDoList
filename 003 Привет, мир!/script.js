// 3 - Hello, world!
let sender = 'Vitaly';

function showMessage(from, message = requestMessage(from)) {
    alert(from + ' says: ' + message);
}

function requestMessage(from) {
    return prompt(from + ', type message');
}

//showMessage(sender);

// 24 - Arrays
console.log('24.1');
let fruits = ['apple', 'orange', 'mellon'];
console.log(fruits);

console.log('\n24.2');
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');
console.log(styles);

console.log('\n24.3');
let arr = ["a", "b"];
arr.push(function() {
    console.log( this );
})
arr[2]();
