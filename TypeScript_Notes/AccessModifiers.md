Access modifiers in TypeScript control **where properties and methods can be accessed**.

There are mainly 3 access modifiers:

| Modifier    | Accessible Inside Class | Child Class | Outside Class |
| ----------- | ----------------------- | ----------- | ------------- |
| `public`    | ✅                       | ✅           | ✅             |
| `private`   | ✅                       | ❌           | ❌             |
| `protected` | ✅                       | ✅           | ❌             |

---

# 1. `public`

Default access modifier.

Accessible everywhere.

```ts id="gluxr6"
class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p1 = new Person("Shruty");

console.log(p1.name); // ✅ allowed
```

Even if you don't write `public`, TypeScript assumes it.

```ts id="4m1sv0"
name: string; // same as public name: string
```

---

# 2. `private`

Accessible only inside the same class.

```ts id="xjlwm5"
class Person {
    private age: number;

    constructor(age: number) {
        this.age = age;
    }

    showAge() {
        console.log(this.age); // ✅ allowed
    }
}

const p1 = new Person(22);

// ❌ Error
console.log(p1.age);
```

Child classes also cannot access private members.

---

# 3. `protected`

Accessible:

* inside the class
* inside child classes

But NOT outside.

```ts id="97q04j"
class Person {
    protected hobbies: string[];

    constructor(hobbies: string[]) {
        this.hobbies = hobbies;
    }
}

class Student extends Person {
    showHobbies() {
        console.log(this.hobbies); // ✅ allowed
    }
}

const s1 = new Student(["Coding"]);

// ❌ Error
console.log(s1.hobbies);
```

---

# Real Example

```ts id="4xb2mw"
class BankAccount {
    public accountHolder: string;
    private balance: number;

    constructor(name: string, balance: number) {
        this.accountHolder = name;
        this.balance = balance;
    }

    public deposit(amount: number) {
        this.balance += amount;
    }

    public getBalance() {
        return this.balance;
    }
}

const acc = new BankAccount("Shruty", 1000);

console.log(acc.accountHolder); // ✅
console.log(acc.getBalance()); // ✅

// ❌ Cannot access directly
// console.log(acc.balance);
```

---

# Quick Memory Trick

| Modifier    | Meaning               |
| ----------- | --------------------- |
| `public`    | Everyone can access   |
| `private`   | Only this class       |
| `protected` | Class + child classes |

---

# Bonus: Short Constructor Syntax

TypeScript allows this:

```ts id="4g3wvb"
class Person {
    constructor(
        public name: string,
        private age: number
    ) {}
}
```

Instead of writing properties separately.
