type Student = {
    name: String;
    id: number;
    city: String;
    greet: (country:string) => string;
}

let student1: Student = {
    name: "Shruty",
    id: 1,
    city: "Pathankot",
    greet: (country) => {
        return `Hello ${student1.name} with id ${student1.id} and I am from ${country}`
    },
}

console.log(student1);
console.log("STUDENT1: " + student1.greet("India"));

type Greet = {
    ( country: string ) : string 
}

let student2: Student = {
    name: "Shruty",
    id: 4,
    city: "Pathankot",
    greet: ((country) => {
        return `Hello ${student2.name} with id ${student2.id} and I am from ${country}`
    }) as Greet,
}
console.log(student2);
console.log("STUDENT2: " + student2.greet("Canada"));


