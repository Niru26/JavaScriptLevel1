'use strict';
//Task 1.1
console.log("Task 1.1")
const link = document.getElementById("four");
console.log(link);

console.log(" ");
//Task 1.2
console.log("Task 1.2");
const ones = document.getElementsByClassName("one");
console.log(ones);

console.log(" ");
//Task 1.3
console.log("Task 1.3");
const link2 = document.querySelectorAll(".card-body .card-link");
console.log(link2);

console.log(" ");
//Task 1.4
console.log("Task 1.4");

const div = document.querySelector('[aria-valuenow="50"]');
console.log(div);

console.log(" ");
//Task 1.5
console.log("Task 1.5");

console.log(document.title);

console.log(" ");
//Task 2.1
console.log("Task 2.1");

let mt0 = document.querySelector(".mt-0");
console.log(mt0.parentNode);

//Task 2.2
let div2_2 = document.querySelector('.sample2_2');
let h3 = document.createElement('h3');
h3.innerText = 'hello world';
div2_2.appendChild(h3);

//Task 2.3
let btnWarning = document.querySelector('.btn-outline-warning');
btnWarning.remove();
let btnDark = document.querySelector('.btn-outline-dark');
btnDark.remove();

//Task 2.4
let btn2_4 = document.querySelector('.btn-info');
btn2_4.innerText = 'Кнопка из задание 2.4';

//Task 3.1
let ul = document.querySelector('ul');
ul.classList.add('task3_1');

//Task 3.2
let navLink3_2 = document.querySelector('.nav-link');
navLink3_2.classList.toggle('active');

//Task 3.3
let menu3_3 = document.querySelector('.dropdown-menu');
menu3_3.classList.remove('dropdown-menu');

//Task 3.4
let div3_4 = document.querySelector('.menu3_4');
div3_4.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

console.log(" ");
//Task 3.5
console.log("Task 3.5");
let button3_5 = document.querySelector('.task3_5');
console.log(button3_5.getAttribute('data-dismiss'));
console.log(button3_5.getAttribute('aria-label'));

//Task 3.6
let h3_6 = document.querySelector('.task3_6');
h3_6.setAttribute('data-one', 'один');
h3_6.setAttribute('data-two', 'два');

//Task 3.7
let header3_7 = document.getElementById('title3_7');
header3_7.id = 'newValue';

console.log(" ");
//Task 4.1
console.log("Task 4.1");
document.addEventListener('DOMContentLoaded', function () {
    console.log("все теги успешно добавлены на страницу");
});

console.log(" ");
//Task 4.2
console.log("Task 4.2");
window.addEventListener('load', function () {
    console.log("все картинки загружены");
});

console.log(" ");
//Task 4.3
console.log("Task 4.3");
let btn4_3 = document.querySelector('.btn4_3');
btn4_3.addEventListener('click', function () {
    console.log('клик');
});

//Task 4.4
let textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', function () {
    console.log("вы навели на textarea");
});