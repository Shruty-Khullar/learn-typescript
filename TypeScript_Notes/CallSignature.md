In TypeScript, a **call signature** describes:

> how a function can be called.

It defines:

* parameters
* parameter types
* return type

without writing the actual implementation.

---

# Basic Syntax

```ts
type Add = {
  (a: number, b: number): number;
};
```

This means:

* function takes 2 numbers
* returns a number

---

# Example

```ts
type Greet = {
  (name: string): string;
};

const greet: Greet = (name) => {
  return `Hello ${name}`;
};
```

---

# Why use call signatures?

They are useful when:

* typing functions
* creating callable objects
* defining APIs
* working with interfaces/types

---

# Using Interface

```ts
interface Multiply {
  (x: number, y: number): number;
}

const mul: Multiply = (a, b) => a * b;
```

---

# Real-world Example

Suppose you want a reusable fetch function type:

```ts
type FetchData = {
  (url: string): Promise<string>;
};
```

---

# Call Signature vs Normal Function Type

## Normal function type

```ts
type Add = (a: number, b: number) => number;
```

## Call signature

```ts
type Add = {
  (a: number, b: number): number;
};
```

Both work similarly.

---

# Why call signatures are powerful

Because you can combine them with properties.

Example:

```ts
type Counter = {
  (start: number): string;
  interval: number;
};
```

Now the function can ALSO have properties.

Example:

```ts
const counter = ((start: number) => {
  return `Started at ${start}`;
}) as Counter;

counter.interval = 5;
```

This is something normal function types cannot express cleanly.

---

# Interview-friendly definition

> A call signature in TypeScript defines the shape of a callable function, including its parameters and return type, and can also be combined with object properties.
