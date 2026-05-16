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
