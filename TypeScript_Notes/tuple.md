A **tuple** in TypeScript is a special type of array where:

✅ the number of elements is fixed
✅ the type of each position is fixed

---

# Example

```ts id="i5v2s3"
let person: [string, number] = ["Shruty", 25];
```

This means:

| Position | Type   |
| -------- | ------ |
| 1st      | string |
| 2nd      | number |

---

# Why not use normal array?

## Normal Array

```ts id="87rmg2"
let arr: (string | number)[] = ["Shruty", 25];
```

Problem:

* order not enforced
* types not fixed per position

This is also allowed:

```ts id="c8n1tx"
[25, "Shruty"]
```

---

# Tuple solves this

```ts id="y1z7yz"
let person: [string, number];
```

Now ONLY this works:

```ts id="7sbn8z"
["Shruty", 25]
```

This gives error:

```ts id="w57tm7"
[25, "Shruty"]
```

---

# Real-world Example

## API Response

```ts id="1lsvrc"
const response: [number, string] = [200, "Success"];
```

Meaning:

* status code
* message

---

# React Example

Very important.

```ts id="73ehl7"
const [count, setCount] = useState(0);
```

This is actually a tuple:

```ts id="um6tpk"
[number, function]
```

---

# Tuple with More Types

```ts id="mq1j4n"
let student: [string, number, boolean];

student = ["Shruty", 101, true];
```

---

# Tuple vs Array

| Feature       | Tuple              | Array        |
| ------------- | ------------------ | ------------ |
| Length        | Fixed              | Flexible     |
| Types         | Different possible | Usually same |
| Order matters | Yes                | No           |
| Use case      | Structured data    | List data    |

---

# Important Note

Tuples are internally arrays in JavaScript.

So sometimes methods like:

```ts id="rtk7ls"
push()
```

still work unexpectedly.

Example:

```ts id="i5l0s6"
let user: [string, number] = ["Shruty", 25];

user.push("coding");
```

TypeScript may allow this in some cases.

That’s a known tuple limitation.

---

# Interview-friendly definition

> A tuple in TypeScript is a fixed-length array where each element has a predefined type and position.
