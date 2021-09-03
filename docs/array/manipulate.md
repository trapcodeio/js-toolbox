# array/manipulate

This file contains functions that has to deal with `manipulating` Arrays.

## Functions

- [chunkArray](#chunkarray) - Split an array into chunks of defined size.


### chunkArray
```ts
import {chunkArray} from "@trapcode/js-toolbox/array/manipulate";

chunkArray(["a", "b",  "c", "d", "e", "f", "g", "h"], 3) 

// Returns:
[["a", "b",  "c"], ["d", "e", "f"], ["g", "h"]]
```