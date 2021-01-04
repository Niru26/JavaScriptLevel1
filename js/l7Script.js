'use strict';

//Task 1.1
console.log ('Task 1.1');
const products = {
    one: "один",
    two: "два",
    three: "три",
};

for (let property in products) {
    // console.log (property);
    console.log (property, products[property]);
}

console.log ('');

//Task 1.2
console.log ('Task 1.2');

const clearP = document.querySelector ('.task_1_2');
clearP.innerHTML = "";

console.log ('');

//Task 1.3
console.log ('Task 1.3');

let string = "";

for (let i=1; i<=3; i++ ) {
    string += `slovo${i}`;
}
console.log (string);

console.log ('');

//Task 1.4
console.log ('Task 1.4');

let link = "https://picsum.photos/200/300";
let linkTarget = "_blank";
let linkText = "picture";
let linkPlace = document.querySelector ('.task_1_4');

document.body.insertAdjacentHTML ('afterend', `<a href="${link}" target ="${linkTarget}">${linkText}</a>`);
