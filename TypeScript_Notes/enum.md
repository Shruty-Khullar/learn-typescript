An `enum` in TypeScript is used to define a set of named constant values.

It helps make code:

* more readable
* safer
* easier to manage

---

# Basic Example

```ts id="1lhz32"
enum Role {
  Admin,
  User,
  Guest
}
```

Now:

```ts id="kebhio"
let myRole: Role = Role.Admin;
```

---

# What happens internally?

By default:

```ts id="nqjlwm"
enum Role {
  Admin,
  User,
  Guest
}
```

gets values like:

```ts id="h9f3j0"
Admin = 0
User = 1
Guest = 2
```

---

# Example

```ts id="st92iu"
enum Status {
  Pending,
  Success,
  Failed
}

let orderStatus: Status = Status.Success;

console.log(orderStatus);
```

Output:

```text id="f5smoc"
1
```

---

# Custom Values

```ts id="pr7h02"
enum Status {
  Pending = 100,
  Success = 200,
  Failed = 400
}
```

---

# String Enums ⭐ Better in real projects

Very common in frontend apps.

```ts id="h0ntnm"
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

Usage:

```ts id="g3g73s"
let move: Direction = Direction.Up;
```

Output:

```text id="khqj6k"
UP
```

---

# Why use enums?

Instead of writing:

```ts id="fy2cjn"
let status = "success";
```

you use:

```ts id="8xplvw"
Status.Success
```

Benefits:

* avoids typos
* auto-completion
* cleaner code
* centralized constants

---

# Real-world Example

```ts id="zt3c24"
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Manager = "MANAGER"
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full Access");
  }
}
```

---

# Important Interview Question

## Enum vs Union Literal Types

Nowadays many React/frontend projects prefer:

```ts id="ffh21n"
type Status = "pending" | "success" | "failed";
```

instead of enums because:

* lighter
* simpler
* better with React
* no generated JS object

---

# When to use enum?

Good for:

* fixed constants
* status codes
* roles
* directions
* app states

---

# Interview-friendly definition

> An enum in TypeScript is a feature used to define a collection of named constant values, making code more readable and maintainable.
