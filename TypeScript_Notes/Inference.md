# Type Inference in TypeScript

## Definition

Type inference is when TypeScript automatically determines the type of a variable, function return value, or expression without you explicitly writing the type.

---

# Basic Example

```ts
let name = "Shruty"
```

TypeScript automatically infers:

```ts
string
```

So this is equivalent to:

```ts
let name: string = "Shruty"
```

---

# Number Example

```ts
let age = 25
```

TypeScript infers:

```ts
number
```

---

# Boolean Example

```ts
let isLoggedIn = true
```

TypeScript infers:

```ts
boolean
```

---

# Array Example

```ts
const numbers = [1, 2, 3]
```

TypeScript infers:

```ts
number[]
```

---

# Object Example

```ts
const user = {
  name: "Shruty",
  age: 25
}
```

TypeScript infers:

```ts
{
  name: string
  age: number
}
```

---

# Function Return Type Inference

```ts
function add(a: number, b: number) {
  return a + b
}
```

TypeScript infers the return type as:

```ts
number
```

Equivalent to:

```ts
function add(a: number, b: number): number {
  return a + b
}
```

---

# Contextual Type Inference

```ts
const numbers = [1, 2, 3]

numbers.map((num) => {
  return num * 2
})
```

TypeScript automatically infers:

```ts
num → number
```

based on the array type.

---

# When Type Inference Fails

```ts
let value
```

TypeScript cannot infer the type properly, so it becomes:

```ts
any
```

---

# Advantages of Type Inference

* Less code to write
* Cleaner syntax
* Better developer experience
* Automatic type safety

---

# Key Point

Type inference means:

```txt
TypeScript automatically guesses the type from the value or context.
```

---

# Summary Table

| Code              | Inferred Type |
| ----------------- | ------------- |
| `"hello"`         | string        |
| `25`              | number        |
| `true`            | boolean       |
| `[1,2,3]`         | number[]      |
| `{name:"Shruty"}` | object        |
