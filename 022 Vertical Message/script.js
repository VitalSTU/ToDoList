function showVerticalMessage(str) {
    let m = 'м';
    let result = str.startsWith(m) ? m.toUpperCase() : str[0];
    for (let char of (str.slice(1, 10))) {
        result += `\n${char}`;
    }

    return result;
}

//Function test
console.log(showVerticalMessage('abcdef'));
console.log();
console.log(showVerticalMessage('ABCDEFGHIJabcdefghij'));
console.log();
console.log(showVerticalMessage('марафон'));
