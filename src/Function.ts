//function returning promise of unknown type
const fetchCall = async (): Promise<unknown> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    //console.log(data);
    return data;
}

const useFetchCall = async () => {
    const fetchcallresponse = await fetchCall();
    if(typeof fetchcallresponse === 'object'){
        console.log("Its an Object");
    }
}

useFetchCall();

const isPalindrome = (str: string): boolean => {
    console.log(str);
    let strArray = str.split('');
    return str === strArray.reverse().join('');
}

console.log(isPalindrome("aabaa"));

const FindAvg = (arr: number[]) => {
    return arr.reduce((prev, currVal) => prev+currVal)/arr.length;
}
console.log(FindAvg([1,2,3,4]));
//for in - iterating over KEYS / INDEXES / PROPERTY NAMES
const arr1 = [1,2,3,4];
for(let itr in arr1){
    console.log(itr);
} 