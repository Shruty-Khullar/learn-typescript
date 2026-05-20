class Persons {
    private _age: number = 0;
    constructor(
        public name: string,
        public id: number,
    ){}
    public set age(age: number){
        if(age<0 || age>100){
            throw new Error('Invalid Age');
        } 
        this._age = age;
    }
    public get age(){
        return this._age;
    }
}

const person1 = new Persons('Shruty', 1);
//getter setters are properties
person1.age = 25;
console.log(person1);
console.log(person1.age);

class Student extends Persons {
    constructor(
        name: string,
        id: number,
        public grade: number
    ) {
        super(name, id);
        this.age=59;
    }
    
    showDetails() {
        console.log(this.name); // inherited public property
        console.log(this.age);  // inherited getter
        console.log(this.age);
        this.age = 25;          // inherited setter
        console.log(this.age);
    }
}
const student1 = new Student("Bnoi", 4, 1 );
console.log(student1);
student1.age = 89;
console.log(student1.age);