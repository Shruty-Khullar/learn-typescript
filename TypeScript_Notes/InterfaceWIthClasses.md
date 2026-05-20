## What is an Interface in TypeScript?

An **interface** is used to define the **structure/rules** of an object or class.

It tells:

* what properties should exist
* what methods should exist

but it does NOT provide implementation.

---

# Simple Example

```ts
interface Person {
    name: string;
    age: number;
}
```

This means:

Any object of type `Person` must have:

* `name`
* `age`

---

# Usage with Object

```ts
const p1: Person = {
    name: "Shruty",
    age: 22
};
```

✅ Correct because structure matches.

---

# Interface with Methods

```ts
interface Animal {
    name: string;

    makeSound(): void;
}
```

---

# What is `implements`?

The `implements` keyword is used when a class follows an interface.

It means:

> "This class promises to implement all rules of the interface."

---

# Example

```ts
interface Animal {
    name: string;

    makeSound(): void;
}

class Dog implements Animal {

    constructor(public name: string) {}

    makeSound(): void {
        console.log("Dog barks");
    }
}
```

---

# Why `implements`?

Because interface only defines rules.

The class must provide actual implementation.

---

# If Method Missing → Error

```ts
class Dog implements Animal {

    constructor(public name: string) {}
}
```

❌ Error because:

* `makeSound()` not implemented

---

# Real-Life Analogy

Interface = contract/rules.

Example:

```text
Payment System Interface
```

Rules:

* pay()
* refund()

Any class implementing it MUST provide those methods.

---

# Multiple Interfaces

A class can implement multiple interfaces.

```ts
interface A {
    methodA(): void;
}

interface B {
    methodB(): void;
}

class Test implements A, B {

    methodA(): void {
        console.log("A");
    }

    methodB(): void {
        console.log("B");
    }
}
```

---

# Interface vs Abstract Class

| Interface                   | Abstract Class                      |
| --------------------------- | ----------------------------------- |
| Only structure/rules        | Structure + implementation          |
| No constructor              | Can have constructor                |
| No method body (mostly)     | Can have normal methods             |
| Uses `implements`           | Uses `extends`                      |
| Multiple interfaces allowed | Only one abstract class inheritance |

---

# Example with Your Learning

```ts
interface Person {

    name: string;

    introduce(): string;
}

class Student implements Person {

    constructor(
        public name: string,
        public grade: number
    ) {}

    introduce(): string {
        return `Hi I'm ${this.name}`;
    }
}
```

---

# `extends` vs `implements`

| Keyword      | Used For            |
| ------------ | ------------------- |
| `extends`    | Inheriting class    |
| `implements` | Following interface |

---

# Key Idea

Interface says:

> "What should exist"

Class says:

> "How it works"

---

# Easy Memory Trick

| Word       | Meaning                |
| ---------- | ---------------------- |
| Interface  | Rules/contract         |
| Implements | Following the contract |
