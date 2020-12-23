'use strict';

// Task 1
let a = 1;
let b = 1;
let c;
let d;

console.log(`Пример 1: ${c = ++a} - префиксная форма записи инкримента, сначала прибавляет 1 а затем возвращает полученное значение.`);
console.log(`Пример 2: ${d = b++} - постфиксная форма записи инкримента, сначала возвращает значение а потом увеличивает его на 1.`);
console.log(`Пример 3: ${c = 2 + ++a} - в примере 1 значение "а" было увеличино на 1, здесь прибавили еще 1 итого 2 + 3.`);
console.log(`Пример 4: ${d = 2 + b++} - тоже самое что и в примере 3, с учетом постфиксной формы записи "b".`);
console.log(`а = ${a} и b = ${b} - в предыдущих примерах эти переменные увеличивались на 1 два раза.`);

// Task 2
let ai = 2;
let x = 1 + (ai *= 2);

console.log(`x = ${x} поскольку сначало выполняются действия в скобках, 2 умножается на 2, префиксная форма возвращает 4 сразу и затем прибавляем 1.`);

// Task 3
let aj = -5;
let bi = -7;
let mathOp;

if (aj > 0 && bi > 0) {
    console.log(`${mathOp = aj - bi} - разность двух положительных чисел.`);
} else if (aj < 0 && bi < 0) {
    console.log(`${mathOp = aj * bi} - произведение двух отрицательных чисел.`);
} else {
    console.log(`${mathOp = aj + bi} - суммa чисел с разными знаками.`);
}

// Task 4
let arg1;
let arg2;

const summary = (arg1, arg2) => {
    return arg1 + arg2;
};
console.log(`${summary(8, 2)} - сумма двух чисел`);

const subtraction = (arg1, arg2) => {
    return arg1 - arg2;
};
console.log(`${subtraction(10, 5)} - разность двух чисел`);

const division = (arg1, arg2) => {
    return arg1 / arg2;
};
console.log(`${division(23, 5)} - частное двух чисел`);

const multiplication = (arg1, arg2) => {
    return arg1 * arg2;
};
console.log(`${multiplication(7, 7)} - произведение двух чисел`);

// Task 5
/**
 * Функция выполняет 4 арифмитических операции в зависимости от переданного параметра operation
 * @param {число} arg1 
 * @param {число} arg2 
 * @param {строка} operation - значения 'sum', 'substract', 'div', 'multiplication'.
 */

const mathOperation = (arg1, arg2, operation) => {
    switch (operation) {
        case 'sum':
            return summary(arg1, arg2);
        case 'substract':
            return subtraction(arg1, arg2);
        case 'div':
            return division(arg1, arg2);
        case 'multiplication':
            return multiplication(arg1, arg2);
    }
};

console.log(`Результат выполнения функции mathOperation - ${mathOperation(4, 5, 'multiplication')}`);