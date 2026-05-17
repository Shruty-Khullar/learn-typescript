# TypeScript `any` Notes

## What is `any`?

`any` is a special TypeScript type that disables type checking for a variable.

It tells TypeScript:

> "This variable can hold any type of value."

Example:

```ts
let value: any = 10;

value = "hello";
value = true;
value = [1, 2, 3];
```

---

# Why do we use `any`?

We use `any` when the type of data is unknown or can change dynamically.

Common use cases:

* API responses
* third-party libraries
* migrating JavaScript code to TypeScript
* temporary development/testing

Example:

```ts
function logData(data: any) {
  console.log(data);
}
```

This function accepts any type of input.

---

# Problem with `any`

Using `any` removes TypeScript safety.

Example:

```ts
let user: any = "Shruty";

console.log(user.age);
```

TypeScript gives NO error because `user` is `any`.

---

# What happens in JavaScript?

JavaScript also allows this:

```js
let user = "Shruty";

console.log(user.age);
```

Output:

```js
undefined
```

because strings do not have an `age` property.

JavaScript only throws an error when accessing properties on `undefined` or `null`.

Example:

```js
let user = undefined;

console.log(user.age);
```

Error:

```txt
TypeError: Cannot read properties of undefined
```

---

# TypeScript Without `any`

```ts
let user: string = "Shruty";

console.log(user.age);
```

TypeScript error:

```txt
Property 'age' does not exist on type 'string'
```

This is the main benefit of TypeScript:

* catches bugs early
* provides type safety
* improves autocomplete and readability

---

# Difference Between `any` and `unknown`

| Feature                | any | unknown |
| ---------------------- | --- | ------- |
| Accepts any value      | ✅   | ✅       |
| Disables type checking | ✅   | ❌       |
| Safe to use directly   | ❌   | ✅       |
| Recommended            | ❌   | ✅       |

---

# Best Practice

Use `any` only when necessary.

Prefer proper types or `unknown` whenever possible.


# TypeScript `unknown` Type

## What is `unknown`?

`unknown` is a safer alternative to `any`.

It means:

> "This value can be anything, but you must check its type before using it."

Example:

```ts id="vc9rms"
let value: unknown = "Shruty";
```

The variable can store any type of value:

```ts id="t2k84x"
value = 10;
value = true;
value = ["a", "b"];
```

---

# Difference Between `any` and `unknown`

| Feature                        | any | unknown |
| ------------------------------ | --- | ------- |
| Accepts any value              | ✅   | ✅       |
| Type checking disabled         | ✅   | ❌       |
| Can access properties directly | ✅   | ❌       |
| Safer                          | ❌   | ✅       |

---

# Example with `any`

```ts id="p5u8ka"
let user: any = "Shruty";

console.log(user.age);
```

✅ No TypeScript error

Because `any` disables checking completely.

Output in JS:

```txt id="6zmtam"
undefined
```

---

# Example with `unknown`

```ts id="y4s0e2"
let user: unknown = "Shruty";

console.log(user.age);
```

❌ TypeScript error:

```txt id="7o4v1k"
Object is of type 'unknown'.
```

Because TypeScript does not know what type `user` is.

---

# Correct Way to Use `unknown`

You must check the type first.

Example:

```ts id="0k0g7u"
let user: unknown = "Shruty";

if (typeof user === "string") {
  console.log(user.toUpperCase());
}
```

Now TypeScript allows it because the type is confirmed.

---

# Another Example

```ts id="zowjpw"
let data: unknown = 100;

if (typeof data === "number") {
  console.log(data + 10);
}
```

Output:

```txt id="gz5r11"
110
```

---

# Why `unknown` is Better

`unknown` forces safer coding.

It prevents mistakes like:

```ts id="xfu9n7"
let value: unknown = null;

console.log(value.toUpperCase());
```

TypeScript stops this before runtime.

---

# When to Use `unknown`

Use `unknown` when:

* you truly don't know the type yet
* handling API responses
* parsing JSON
* accepting dynamic input

Then narrow the type using:

* `typeof`
* `instanceof`
* custom type guards

---

# Simple Mental Model

## `any`

> "Do whatever you want."

## `unknown`

> "First check what this is, then use it."


-------------------------------

if (typeof user === "string") { console.log(user.toUpperCase()); } this will not work if user typpe is any?

It **will work** with `any` too.

Example:

```ts id="0w8g81"
let user: any = "Shruty";

if (typeof user === "string") {
  console.log(user.toUpperCase());
}
```

Output:

```txt id="4dys6j"
SHRUTY
```

---

# Then what's the difference?

The difference is:

## With `any`

TypeScript does NOT force you to check.

You can directly do this:

```ts id="4e7ih8"
let user: any = "Shruty";

console.log(user.toUpperCase());
console.log(user.age);
console.log(user.randomMethod());
```

✅ No TS errors

Even dangerous code is allowed.

---

## With `unknown`

TypeScript forces type checking first.

This gives error:

```ts id="n3nqsl"
let user: unknown = "Shruty";

console.log(user.toUpperCase());
```

❌ Error:

```txt id="tpphl5"
Object is of type 'unknown'
```

You MUST narrow the type:

```ts id="a6q41k"
let user: unknown = "Shruty";

if (typeof user === "string") {
  console.log(user.toUpperCase());
}
```

✅ Now it works.

---

# Main Idea

## `any`

> "I know what I'm doing. Don't check anything."

## `unknown`

> "I don't know the type yet. Check first."

That is the core difference.
