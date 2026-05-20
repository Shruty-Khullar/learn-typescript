class Persons {
    name: string;
    age: number;
    hobbies: string[];
    constructor(name: string, age:number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce() : string {
        return `Hi, I'm ${this.name} and I am ${this.age} years old and have hobbies ${this.hobbies.join(',')}`
    }
}

class Students extends Persons {
    grade: number;
    constructor(name: string, age:number, hobbies: string[], grade:number){
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() : string {
        return `Hi, I'm ${this.name} and I am ${this.age} years old, in grade ${this.grade} and have hobbies ${this.hobbies.join(',')}`
    }
    introduce2() : string {
        return `${super.introduce()} in grade ${this.grade}`
    }
}

const person1 = new Persons('Shruty', 25, ['Cooking', 'Coding']);
const student1 = new Students('Bnoi', 4, ['Sleeping', 'eating'],1);
console.log(person1);
console.log(student1);
console.log(student1.introduce());
console.log(student1.introduce2());