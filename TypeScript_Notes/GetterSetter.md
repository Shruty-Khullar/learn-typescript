Getters and setters in TypeScript are special methods used to **control access to class properties**.

They help:

* protect data
* validate values
* control reading/writing
* hide internal implementation

---

# 1. Getter

A getter is used to **get/read** a property value.

Uses `get`.

```ts
class Person {
    constructor(private _name: string) {}

    get name(): string {
        return this._name;
    }
}
```

Usage:

```ts
const p1 = new Person("Shruty");

console.log(p1.name);
```

Notice:

✅ We access it like a property
❌ Not like a function

```ts
p1.name      // correct
p1.name()    // wrong
```

---

# 2. Setter

A setter is used to **set/update** a property value.

Uses `set`.

```ts
class Person {
    constructor(private _name: string) {}

    set name(newName: string) {
        this._name = newName;
    }
}
```

Usage:

```ts
const p1 = new Person("Shruty");

p1.name = "Anu";
```

---

# Full Getter + Setter Example

```ts
class Person {

    constructor(private _age: number) {}

    // getter
    get age(): number {
        return this._age;
    }

    // setter
    set age(value: number) {

        if (value < 0) {
            console.log("Age cannot be negative");
            return;
        }

        this._age = value;
    }
}
```

Usage:

```ts
const p1 = new Person(22);

console.log(p1.age);

p1.age = 25;

console.log(p1.age);
```

---

# Why Use Getters and Setters?

## 1. Validation

Prevent invalid data.

```ts
set age(value: number) {
    if (value < 0) {
        throw new Error("Invalid age");
    }

    this._age = value;
}
```

---

## 2. Encapsulation (Data Hiding)

Keep properties private but still accessible safely.

```ts
private _salary: number
```

Direct access blocked:

```ts
employee._salary // ❌
```

Controlled access:

```ts
employee.salary // ✅ getter
```

---

## 3. Read-Only Properties

Only getter → property becomes read-only.

```ts
class Student {
    constructor(private _id: number) {}

    get id() {
        return this._id;
    }
}
```

Now:

```ts
s1.id       // ✅
s1.id = 5   // ❌
```

---

# Why `_name` or `_age`?

Common convention:

```ts
private _name: string
```

underscore means:

> "internal/private property"

Getter exposes clean API:

```ts
person.name
```

instead of:

```ts
person._name
```

---

# Real-Life Example

```ts
class BankAccount {

    constructor(private _balance: number) {}

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {

        if (amount < 0) {
            console.log("Invalid balance");
            return;
        }

        this._balance = amount;
    }
}
```

---

# Quick Summary

| Feature        | Getter     | Setter        |
| -------------- | ---------- | ------------- |
| Keyword        | `get`      | `set`         |
| Purpose        | Read value | Update value  |
| Returns value? | ✅          | ❌             |
| Parameters     | none       | one parameter |

---

# Easy Memory Trick

| Word   | Meaning  |
| ------ | -------- |
| Getter | Get data |
| Setter | Set data |
