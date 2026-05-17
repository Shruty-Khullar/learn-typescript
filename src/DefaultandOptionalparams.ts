//by default the ts inferenced the return type as void if we dont use word return
const fn1 = (name: string, id: number=1) => {
    console.log(`Welcome ${name} with id ${id}`);
}

//optional param are defined using ?
//here return type is string
const fn2 = (name: string, id: number=1, city?: string): string => {
   return (`Welcome ${name} with id ${id} in city ${city}`);
}

console.log(fn1("shruty", 2));
console.log(fn1("bnoi"));
console.log(fn2("Snoi", 3)) //city will be undefined
console.log(fn2("Alex", 4, "Bengaluru"));

