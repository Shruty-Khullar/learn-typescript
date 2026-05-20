An **abstract class** in TypeScript is a class that is used only as a **base/parent class** and **cannot create objects directly**.

It is created using the `abstract` keyword.

---

# Syntax

```ts
abstract class Animal {

}
```

---

# Main Purpose

Abstract classes are used when:

* multiple classes share common behavior
* some methods must be implemented by child classes

---

# Example

```ts
abstract class Animal {

    constructor(public name: string) {}

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving`);
    }
}
```

---

# What is Happening Here?

## Normal Method

```ts
move(): void
```

has implementation.

---

## Abstract Method

```ts
abstract makeSound(): void;
```

has:

* no body
* no implementation

Child classes MUST implement it.

---

# Child Class

```ts
class Dog extends Animal {

    makeSound(): void {
        console.log("Dog barks");
    }
}
```

---

# Usage

```ts
const d1 = new Dog("Tommy");

d1.makeSound();
d1.move();
```

Output:

```text
Dog barks
Tommy is moving
```

---

# Important Rule

❌ Cannot create object of abstract class.

Wrong:

```ts
const a1 = new Animal("Animal");
```

Error:

```text
Cannot create an instance of an abstract class
```

---

# Why Use Abstract Class?

Suppose every vehicle should have:

* start()
* stop()

But implementation differs for:

* Car
* Bike
* Truck

So create common blueprint:

```ts
abstract class Vehicle
```

and let child classes define details.

---

# Abstract Class vs Interface

| Abstract Class                            | Interface                        |
| ----------------------------------------- | -------------------------------- |
| Can have method implementation            | Usually only method declarations |
| Can have constructor                      | ❌ Interface cannot               |
| Can have properties with access modifiers | Limited in interface             |
| Used for shared base behavior             | Used for structure/contract      |

---

# Simple Analogy

Think of abstract class as:

```text
Template / Blueprint
```

Example:

* `Animal` is abstract
* actual objects are:

  * Dog
  * Cat
  * Lion

You never create a generic "Animal".

---

# Real Example with Your Learning

```ts
abstract class Persons {

    constructor(
        public name: string,
        public age: number
    ) {}

    abstract introduce(): string;
}
```

Child class:

```ts
class Student extends Persons {

    constructor(
        name: string,
        age: number,
        public grade: number
    ) {
        super(name, age);
    }

    introduce(): string {
        return `Hi I'm ${this.name} from grade ${this.grade}`;
    }
}
```

---

# Key Points

| Feature                                   | Abstract Class |
| ----------------------------------------- | -------------- |
| Can create object directly                | ❌              |
| Can contain normal methods                | ✅              |
| Can contain abstract methods              | ✅              |
| Used for inheritance                      | ✅              |
| Forces child classes to implement methods | ✅              |
