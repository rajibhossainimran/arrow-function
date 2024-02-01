


const multi =(num1,num2,num3)=>num1*num2*num3;


// console.log(multi(3,3,3));

const sum =(num1,num2=0)=>num1+num2;
// console.log(sum(10,40))


const friends  =['rajib','shakib','raju','afgani','gilebii'];

const checkFriend =friends =>{
    const array =[];
    for(const friend of friends){
        if(friend.length % 2 == 0){
            array.push(friend);
        }
    }
    return array;
}
// console.log(checkFriend(friends));

const numbersArray = [1,2,3,4,5,6,7,8];

const squareN = numbers => {
    let total=0;
    for(const number of numbers){
        const square = number*number;
        total=total+square;

    }
    const avg =total/numbers.length;
    return avg;
}

// console.log(squareN(numbersArray));


const arr1 = [231,32,343,542,1];
const arr2 = [2,43,54,65,322,999];

const combinedArray =(arr1,arr2) => {
    const newArr = [...arr1, ...arr2];
    const maxNumber =Math.min(...newArr);
    return maxNumber;
}

console.log(combinedArray(arr1,arr2));