Here are the most important TypeScript types you should know, especially for interviews and real projects.

---

# 1. Primitive Types

## string

```ts
let name: string = "Shruty";
```

## number

```ts
let age: number = 25;
```

## boolean

```ts
let isLoggedIn: boolean = true;
```

## bigint

```ts
let big: bigint = 123456789n;
```

## symbol

```ts
let id: symbol = Symbol("id");
```

---

# 2. Array Types

```ts
let nums: number[] = [1, 2, 3];
```

Alternative:

```ts
let nums: Array<number> = [1, 2, 3];
```

---

# 3. Tuple

Fixed-length array with fixed types.

```ts
let user: [string, number] = ["Shruty", 25];
```

Very important in APIs and React hooks.

---

# 4. Object Type

```ts
let person: {
  name: string;
  age: number;
};
```

Example:

```ts
let person = {
  name: "Shruty",
  age: 25
};
```

---

# 5. Enum

Used for constants.

```ts
enum Role {
  Admin,
  User,
  Guest
}

let r: Role = Role.Admin;
```

---

# 6. any

Turns off type checking.

```ts
let data: any = "hello";
data = 10;
```

Avoid when possible.

---

# 7. unknown

Safer version of `any`.

```ts
let value: unknown = "hello";
```

Need checking before use:

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

# 8. void

Function returns nothing.

```ts
function greet(): void {
  console.log("Hello");
}
```

---

# 9. null and undefined

```ts
let a: null = null;
let b: undefined = undefined;
```

---

# 10. never

Function never finishes.

```ts
function throwError(): never {
  throw new Error("Error");
}
```

---

# 11. Union Type (`|`)

Most important feature.

```ts
let id: string | number;
```

Example:

```ts
id = 101;
id = "EMP101";
```

---

# 12. Literal Types

Exact values only.

```ts
let direction: "left" | "right";
```

---

# 13. Type Alias

```ts
type User = {
  name: string;
  age: number;
};
```

Used everywhere in real projects.

---

# 14. Interface

Very important.

```ts
interface User {
  name: string;
  age: number;
}
```

Difference:

* `interface` → mainly for objects/classes
* `type` → more flexible

---

# 15. Optional Properties (`?`)

```ts
interface User {
  name: string;
  age?: number;
}
```

---

# 16. Function Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# 17. Type Assertions

```ts
let value: unknown = "hello";

let len = (value as string).length;
```

---

# 18. Generics

SUPER important.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
identity<string>("hello");
identity<number>(10);
```

---

# 19. Union vs Intersection

## Union

```ts
type A = string | number;
```

## Intersection

```ts
type A = { name: string };
type B = { age: number };

type C = A & B;
```

---

# 20. Record

Very useful.

```ts
type Users = Record<string, number>;
```

Example:

```ts
const marks: Record<string, number> = {
  math: 90,
  science: 85
};
```

---

# Most Important Types for Beginners

Focus first on:

1. string
2. number
3. boolean
4. arrays
5. objects
6. interfaces
7. type aliases
8. union types
9. functions
10. generics

These cover 80–90% of real TypeScript usage.

-----------------

BigINT
Here’s a simple example of using `bigint` in TypeScript.

## Basic Example

```ts
const largeNumber: bigint = 9007199254740991n;

console.log(largeNumber);
```

Notice the `n` at the end — that tells TypeScript/JavaScript this is a `bigint`.

---

## Why use `bigint`?

Normal JavaScript numbers lose precision for very large integers.

Example:

```ts
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
```

Anything larger may become inaccurate with `number`.

`bigint` solves this.

---

## Arithmetic with bigint

```ts
const a: bigint = 12345678901234567890n;
const b: bigint = 10n;

console.log(a + b); // addition
console.log(a * b); // multiplication
console.log(a / b); // division
```

---

## Important Rule

You cannot mix `number` and `bigint` directly.

❌ Wrong:

```ts
const x = 10n + 5;
```

✅ Correct:

```ts
const x = 10n + BigInt(5);
```

---

## Using `BigInt()` constructor

```ts
const value = BigInt("123456789012345678901234567890");

console.log(value);
```

---

## Function Example

```ts
function factorial(n: bigint): bigint {
  if (n === 0n) return 1n;
  return n * factorial(n - 1n);
}

console.log(factorial(20n));
```

---

## TypeScript Config Note

Make sure your target supports BigInt:

```json
{
  "compilerOptions": {
    "target": "ES2020"
  }
}
```
