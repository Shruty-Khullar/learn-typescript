
const arr3 = [1,2,3];
function printArray(arr: number []){
    return arr.map((cur) => console.log(cur));
}
printArray(arr3);

const arr2: number [] = new Array(1,2,3,4);
console.log(arr2[0]);

const arr: string[] = Array.of("Shruty", "Khullar");
console.log(arr); 