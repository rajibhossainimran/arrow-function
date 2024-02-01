

const numbers = [21,32,23,34,12,32];
const numberDubble = numbers.map(number=> number*2);
// console.log(numberDubble);

const friends = ['Alamin', 'Aladin','Johirul','Lamiya', 'Rajib'];
const friendFirst = friends.map(friend=> friend.length);
// console.log(friendFirst);

const products = [
    {id:1, name: 'laptop', price:50000},
    {id:2, name: 'mobile', price:17000},
    {id:3, name: 'watch', price:1000},
    {id:4, name: 'bag', price:2000},
    {id:5, name: 'tablet', price:12000}
];
const productList = products.map(product=>product.name);
// console.log(productList);

