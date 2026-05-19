function addNum(a: number, b: number) : number {
    return a + b;
}

function addString(a: string, b:string) : string {
    return a+b;
}

console.log(addNum(2,3));
console.log(addString('Shruty', 'khullar'));

//See for same type of function, we had to create 2 diff funs just because param type and return type can be diff. So in such case we use generic - to prevent function overloading
//TypeScript does not know that generic type T supports the + operator because T could be anything like obj on which + doesnt work. For such case use union OF PARAMs

 function genericType<T>(a: T) : T {
    return a;
 }
 let ans1 = genericType<number>(2);
 let ans2 = genericType<string>("Shruty");
 console.log(ans1 , 'and' , ans2);


//Add two numbers 
function add<T, U>(a: T, b: U) : void {
    console.log(typeof a);
    console.log(typeof b);
}

add<number, string>(1, 'Shruty');
add<number, boolean>(0, false);

function add2<T, U>(a: T, b: U, c: boolean) : void {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
add2<number,string>(1, 'abc', true);