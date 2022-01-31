function showVerticalMessage(str) {
    let result = '';
    if (str != result)  {
        let m = 'м';
        result += str.startsWith(m) ? m.toUpperCase() : str[0];
        for (let char of (str.slice(1, 10))) {
            result += `\n${char}`;
        }
    }

    console.log(result);
}

//Function test
showVerticalMessage('');
console.log();
showVerticalMessage('abcdef');
console.log();
showVerticalMessage('ABCDEFGHIJabcdefghij');
console.log();
showVerticalMessage('марафон');
