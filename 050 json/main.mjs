/* 050 JSON

Run command:
node --experimental-json-modules main.mjs
*/

import data from './resourses/data.json';

const firstName = 'firstName';
const lastName = 'lastName';
const object = 'object';
const json = JSON.stringify(data);
let result = JSON.parse(json, function(k, v) {
    if (k === firstName || k === lastName || typeof v === object) {
        return v;
    }
});
console.log(result.users);
