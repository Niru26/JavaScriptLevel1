'use strict';

// Task 1
console.log('Task 1')
const limit = 10;

console.log('0 - это ноль');

for (let number = 1; number <= limit; number++) {
    if (number % 2 === 0) console.log(`${number} - это четное число`)
    else console.log(`${number} - это нечетное число`)
}

console.log('')
// Task 2
console.log('Task 2')
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

console.log('')
// Task 3
console.log('Task 3')

const myProducts = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

myProducts.forEach(product => {
    product.price = product.price - product.price * 0.15;
})

console.log(myProducts);

// let cost = products.forEach(product => {
//     return product.price = product.price - product.price * 0.15;
// })

// console.log (cost); - вопрос - а как можно извлечь значение полученное при помощи forEach и поместить его в переменную? я пробовал просто указывать 
// return, но cost выводит в консоль значение undefined.

console.log('')
// Task 4
console.log('Task 4')

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let foto = products.filter(item =>
    "photos" in item && item.photos.length > 0
);
let sort = products.sort((price1, price2) => {
    return price1.price - price2.price;
});

console.log(foto);
console.log(sort);

console.log('')
// Task 5
console.log('Task 5')

for (let i = 0; i <= 9; console.log(i++)) {};

console.log('')
// Task 6
console.log('Task 6')

function stars(rows) {
    for (let row = 0; row < rows; row++) {
        let star = '*';
        for (let column = 0; column < row; column++) {
            star += '*';
        }
        console.log(star);
    }
}

stars(5);