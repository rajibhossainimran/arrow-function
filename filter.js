

const products = [
    {id:1, name: 'laptop', price:50000},
    {id:2, name: 'mobile', price:17000},
    {id:3, name: 'watch', price:1000},
    {id:4, name: 'bag', price:2000},
    {id:5, name: 'tablet', price:12000}
];

const lowPrice = products.filter(product => product.price < 50000);
// console.log(lowPrice);


const numbers = [21,32,23,34,12,32];
const evenNumber = numbers.filter(number => number % 2 === 0);
console.log(evenNumber);