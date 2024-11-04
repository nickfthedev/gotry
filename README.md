# gotry

TypeScript/JavaScript error handling inspired by Go's error pattern.

## Why?

- ✨ Simple and clean error handling pattern
- 🔄 Supports both sync and async functions
- 📦 Zero dependencies
- 🛡️ Written in TypeScript with full type safety
- 🎯 Reduces error handling boilerplate
- 🔍 Inspired by Go's error handling pattern

## Installation

```bash
npm install @nickfthedev/gotry
```

## Usage

The package provides two functions: `gotry` for synchronous operations and `gotryAsync` for asynchronous operations. Both return a tuple of `[result, error]`.

### Synchronous Usage

```typescript
import { gotry } from "gotry";

const [result, error] = gotry(() => {
  return someRiskyOperation();
});

if (error) {
  console.error("Operation failed:", error);
  return;
}

console.log("Success:", result);
```

### Asynchronous Usage

```typescript
import { gotryAsync } from "gotry";

const [result, error] = await gotryAsync(async () => {
  return await fetchSomeData();
});

if (error) {
  console.error("Fetch failed:", error);
  return;
}

console.log("Data:", result);
```

## API Reference

### gotry<T>(fn: () => T): [T | null, Error | null]

Executes a synchronous function and returns a tuple containing the result and error (if any).

```typescript
import { gotry } from "gotry";

const [result, error] = gotry(() => {
  if (Math.random() > 0.5) throw new Error("Bad luck!");
  return "Success!";
});
```

### gotryAsync<T>(fn: () => Promise<T>): Promise<[T | null, Error | null]>

Executes an asynchronous function and returns a promise of a tuple containing the result and error (if any).

```typescript
import { gotryAsync } from "gotry";

const [result, error] = await gotryAsync(async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
});
```

## Error Handling Pattern

Both functions follow Go's error handling pattern:

- On success: Returns `[result, null]`
- On error: Returns `[null, error]`

All errors are guaranteed to be instances of `Error`. If a non-Error is thrown, it will be converted to an Error instance.

## License

MIT
