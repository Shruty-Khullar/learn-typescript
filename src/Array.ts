
const arr3 = [1,2,3];
function printArray(arr: number []){
    return arr.map((cur) => console.log(cur));
}
printArray(arr3);

const arr2: number [] = new Array(1,2,3,4);
console.log(arr2[0]);

const arr: string[] = Array.of("Shruty", "Khullar");
console.log(arr); 

const fruits: string[] = ['kiwi', 'apple', 'banana', 'orange'];
//push gives length of new array if we store in a var
let newUpdatedFruits = fruits.push('cherry');
console.log(newUpdatedFruits);
console.log(fruits);
//if we are storing value of pop in a var, it will be last element of array thats popped
let newUpdatedFruits2 = fruits.pop();
console.log(newUpdatedFruits2);
console.log(fruits);

let vegetables: string[] = ['tomato', 'brocolli', 'onion'];
const newUpdatedVegetables = vegetables.unshift('garlic');
console.log(newUpdatedVegetables);
console.log(vegetables);
let newUpdatedVegetables2 = vegetables.shift();
console.log(newUpdatedVegetables2);
console.log(vegetables);

//iterate over array
for(let fruit of fruits){
    console.log('Index:' + fruit)
}

//for..in iterate over indices and properties of obj
for(let veg in vegetables){
    console.log(veg, vegetables[veg])
}

fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

//Array Maps and filters
let nums: number[] = [1,2,3,4,5];
//maps returns a new array, doesnt mutate the old one
const doubleData = nums.map((currNum) => currNum*2);
const stringData: string[] = nums.map((currNum) => currNum.toString());
console.log(doubleData);
console.log(stringData);

let checkNum = nums.map((currNum) => currNum>2);
console.log(checkNum);

let checkNum2 = nums.filter((currNum) => currNum >2);
console.log(checkNum2);

let names = ['Alex', 'Bob', 'Martin', 'Shruty', 'Stella'];
let filteredNames = names.filter((currName)=> currName.length>4);
console.log(filteredNames);
filteredNames = names.filter((currName) => currName.startsWith('S'));
console.log(filteredNames);
