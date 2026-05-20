class Persons {
    
    constructor(
        public name: string, 
        public age:number, 
        protected hobbies: string[],
        private id: number
    ){}

    introduce() : string {
        return `Hi, I'm ${this.name} and I am ${this.age} years old and have hobbies ${this.hobbies.join(',')}`
    }
}

class Students extends Persons {
   
    constructor(name: string, age:number, hobbies: string[], id:number, public grade:number){
        super(name, age, hobbies, id);
    }
    introduce() : string {
        return `Hi, I'm ${this.name} and I am ${this.age} years old, in grade ${this.grade} and have hobbies ${this.hobbies.join(',')}`
    }
    introduce2() : string {
        return `${super.introduce()} in grade ${this.grade}`
    }
}

const person1 = new Persons('Shruty', 25, ['Cooking', 'Coding'], 201000);
const student1 = new Students('Bnoi', 4, ['Sleeping', 'eating'], 2020000, 1);
console.log(person1);
console.log(student1);
console.log(student1.introduce());
console.log(student1.introduce2());