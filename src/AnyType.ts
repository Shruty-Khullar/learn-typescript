let name: any = 'Shruty';
console.log(name)
name = 123;
console.log(name)
name = true;
console.log(name)

//“TS says I don’t know what name2 actually is, so I can’t allow string methods on it.”
let name2: unknown = "shruty"
//console.log(name2.toUpperCase())
//We have to ensure ts that its a string - Fix 1 — Type Narrowing (Recommended)
if(typeof name2 === "string"){
    console.log(name2.toUpperCase());
}

//Fix2 — Type Assertion
console.log((name2 as string).toUpperCase());

name2 as string;
//we can assign anything when typw is unknown but later its type will be checked
name2 = 123;
console.log(typeof name2);
//error 
//console.log(name2.age);

let name3: any = "Bnoi"
console.log(name3.toUpperCase());
name3 = 123
//this line will give error as a number toUppercase gives error in JS
//console.log(name3.toUpperCase());
console.log(typeof(name3));
//no error
console.log(name3.age);

