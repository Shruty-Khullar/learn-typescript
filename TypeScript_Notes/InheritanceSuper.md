`super` is a keyword used in **inheritance** to access the **parent class**.

In your example:

```ts id="k6c2x9"
class Students extends Persons
```

`Students` is the child class, and `Persons` is the parent class.

---

# Why `super()` is Used

When a child class has a constructor, it must call the parent constructor first using `super()`.

Example:

```ts id="bbv30x"
super(name, age, hobbies);
```

This sends the values to the `Persons` constructor.

---

# What Happens Internally

This:

```ts id="v9sq2q"
super(name, age, hobbies);
```

actually runs:

```ts id="nj3b9n"
constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
}
```

from the parent class.

So the child class reuses the parent's setup code.

---

# Simple Analogy

Imagine:

* `Persons` = basic human template
* `Students` = special type of person

A student already has:

* name
* age
* hobbies

So instead of rewriting them, `super()` says:

> "Use the parent class setup first."

---

# Example

```ts id="mjlwm7"
class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
}
```

Here:

* `super(name)` calls the `Animal` constructor
* so `name` gets initialized there

---

# Important Rule

In TypeScript/JavaScript:

✅ `super()` must be called before using `this` in a child constructor.

Wrong:

```ts id="v6uk93"
this.grade = grade;
super(name, age, hobbies);
```

Correct:

```ts id="w6xkqb"
super(name, age, hobbies);
this.grade = grade;
```

---

# `super` Can Also Access Parent Methods

Example:

```ts id="x8e0gt"
class Parent {
    greet() {
        console.log("Hello");
    }
}

class Child extends Parent {
    greet() {
        super.greet();
        console.log("Hi from child");
    }
}
```

Output:

```text id="x0dt1u"
Hello
Hi from child
```

So:

* `super()` → parent constructor
* `super.methodName()` → parent method
