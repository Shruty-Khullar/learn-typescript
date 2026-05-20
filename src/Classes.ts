//A class is a blueprint or template used in programming to create objects. It defines the properties (data) and methods (functions/actions) that the objects created from it will have.
class Persons {
    name: string;
    age: number;
    hobbies: string[];
    constructor(name: string, age: number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

const person1 = new Persons("shruty", 25, ['Music', 'Coding']);
console.log(person1);
const person2 = new Persons("Bnoi", 3, ['Sleeping', 'eating']);
console.log(person2);