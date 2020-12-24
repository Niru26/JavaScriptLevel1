'use strict';

// Task 1
console.log("Task1")

function cheacker(number) {
    if (!Number.isInteger(number) || number >= 999 || number <= 0) {
        console.log('Enter integer between 0 and 999');
        return {};
    }
}

function showDigitsOfNumbers(number) {
    return {
        hundreds: Math.floor(number / 100),
        tens: Math.floor(number / 10) % 10,
        units: number % 10
    }
}

console.log(showDigitsOfNumbers(753));
console.log("");

// Task 1.1
console.log("Task 1.1 - ES5");

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount25percent = function () {
    this.price = this.price - (this.price * 0.25);
};

let skates = new Product('Skates', 12700);
skates.discount25percent();

console.log(skates);

console.log("");
console.log("Task 1.1 - ES6");

class ProductES6 {
    constructor(nameES6, priceES6) {
        this.nameES6 = nameES6;
        this.priceES6 = priceES6;
    }
    discount25percentES6() {
        this.priceES6 = this.priceES6 - (this.priceES6 * 0.25);
    }
}


let ski = new ProductES6('Ski', 149900);
ski.discount25percentES6();

console.log(ski);
console.log("");

// Task 1.2
console.log("Task 1.2 - ES5");

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.editMe = function(text) {
    this.text = text;
}

const postMy = new Post ('Nikolay', 'My 1st post', new Date());

console.log (postMy);
postMy.editMe ('My post from function');
console.log (postMy);

function AttachedPost (author, text, date) {
    Post.call (this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeHighlight = function () {
    this.highlighted = true;
}

const attachedMy = new AttachedPost ('user', 'Enter password', new Date ());

console.log (attachedMy);
attachedMy.makeHighlight();
attachedMy.editMe ('Function for attachment');
console.log (attachedMy);

console.log("");
console.log("Task 1.2 - ES6");

class PostES6 {
    constructor (authorES6, textES6, dateES6) {
        this.authorES6 = authorES6;
        this.textES6 = textES6;
        this.dateES6 = dateES6;
    }
    editES6 (textES6) {
        this.textES6 = textES6;
    }
}

const postES6 = new PostES6 ('Vaniya', 'Uncle Vaniya', new Date());
console.log (postES6);
postES6.editES6 ('Sort of message');
console.log (postES6);

class AttachedPostES6 extends PostES6 {
    constructor (authorES6, textES6, dateES6) {
        super (authorES6, textES6, dateES6);
        this.highlighted = false;
    }

    makeHighlighted () {
        this.highlighted = true;
    }
}

let attachedES6 = new AttachedPostES6 ('Vasili', 'It is a parrot master', new Date());
console.log (attachedES6);
attachedES6.makeHighlighted();
attachedES6.editES6('Replaced by edit function');
console.log (attachedES6);
