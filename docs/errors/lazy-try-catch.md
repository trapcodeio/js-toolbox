# errors/lazy-try-catch

This file contains functions that has to deal with boycotting forceful `try` and `catch`.

## Functions

- [tryFn](#tryFn) - Try and catch functions.
- [resolve](#resolve) - Try and catch promises.

### tryFn

```ts
import {tryCatch as t} from "@trapcodeio/js-toolbox/errors/lazy-try-catch";

let [err, value] = t(() => {
    // Do something
});

console.log(err) // Error Stack
console.log(value) // returned value
```

### resolve

```ts
import {resolve as r} from "@trapcodeio/js-toolbox/errors/lazy-try-catch";

let [err, value] = await r(User.find({name: 'john'}));

console.log(err) // Error Stack
console.log(value) // returned value if no error.
```

