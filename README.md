# is-falsy

Predicate that returns true for *falsy* values.

# Install

```bash
npm install is-falsy
```

```bash
bower install is-falsy
```

# Usage

```javascript
var isFalsy = require('is-falsy');

console.log(isFalsy('')); // true
console.log(isFalsy(0)); // true
console.log(isFalsy(null)); // true
console.log(isFalsy(undefined)); // true
console.log(isFalsy(1)); // false
console.log(isFalsy({})); // false
console.log(isFalsy([])); // false
console.log(isFalsy(function(){})); // false
```

# License

MIT
