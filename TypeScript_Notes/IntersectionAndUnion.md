# 1. Union Type (`|`)

Union means:

> value can be ONE of multiple types

Think:

## OR condition

```ts
string | number
```

means:

* either string
  OR
* number

---

# Example 1 — Simple Variable

```ts
let id: string | number;

id = 101;
id = "EMP101";
```

Both valid.

---

# Example 2 — Function Arguments using Union

```ts
function printId(id: string | number) {
  console.log(id);
}
```

Valid calls:

```ts
printId(101);
printId("EMP101");
```

---

# Real-world use case

Very common in:

* APIs
* optional values
* flexible parameters

Example:

```ts
type Status = "success" | "failed" | "loading";
```

---

# 2. Intersection Type (`&`)

Intersection means:

> combine multiple types into ONE

Think:

## AND condition

```ts
A & B
```

means:

* must contain ALL properties of A
  AND
* ALL properties of B

---

# Example 1 — Intersecting 2 Objects ⭐

```ts
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Staff = Person & Employee;
```

Now:

```ts
const user: Staff = {
  name: "Shruty",
  id: 101
};
```

Because `Staff` contains:

* name
  AND
* id

---

# Example 2 — Function Arguments using Intersection

```ts
type Admin = {
  name: string;
};

type Permissions = {
  accessLevel: number;
};

function manageUser(user: Admin & Permissions) {
  console.log(user.name);
  console.log(user.accessLevel);
}
```

Call:

```ts
manageUser({
  name: "Shruty",
  accessLevel: 5
});
```

Must pass BOTH properties.

---

# Difference Visually

---

# UNION (`|`)

```ts
type A = {
  name: string;
};

type B = {
  id: number;
};

A | B
```

Means:

```ts
{name}
OR
{id}
```

---

# INTERSECTION (`&`)

```ts
A & B
```

Means:

```ts
{name, id}
```

---

# Another Function Example

---

# Union Function Example

```ts
function greet(value: string | number) {
  console.log(value);
}
```

Accepts:

```ts
greet("Shruty");
greet(101);
```

---

# Intersection Function Example

```ts
type User = {
  name: string;
};

type Contact = {
  phone: string;
};

function showProfile(data: User & Contact) {
  console.log(data.name);
  console.log(data.phone);
}
```

Call:

```ts
showProfile({
  name: "Shruty",
  phone: "9999999999"
});
```

---

# Easy Memory Trick

## Union (`|`)

### “ONE of them”

```ts
string | number
```

---

## Intersection (`&`)

### “COMBINE all of them”

```ts
Person & Employee
```

---

# Interview-Friendly Definition

## Union

> A union type allows a value to be one of several possible types.

---

## Intersection

> An intersection type combines multiple types into a single type containing all properties from each type.
