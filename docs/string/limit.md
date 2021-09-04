# string/limit

This file contains functions that has to deal with `limiting` strings.

## Functions

- [strLimit](#strlimit) - Split an array into chunks of defined size.

### strLimit

Limit string to defined length

```ts
import {strLimit} from "@trapcode/js-toolbox/string/limit";

strLimit("Do have a lovely day", 14, "...")

// "Do have a love..."
```

### strLimitWords

Limit string by words.

```ts
import {strLimitWords} from "@trapcode/js-toolbox/string/limit";

strLimitWords("Do have a lovely day.", 4, "...")

// "Do have a lovely..."
```

### strLimitWords

Limit string to defined length without cutting words short.

```ts
import {strLimitWordsByLength} from "@trapcode/js-toolbox/string/limit";

strLimit("Do have a lovely day", 14, "...")
// "Do have a love..." 
// lovely is cut short

strLimitWordsByLength("Do have a lovely day", 14, "...")
// "Do have a..."
// lovely is not included.
```

