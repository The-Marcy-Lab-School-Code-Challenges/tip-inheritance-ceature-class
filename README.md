# Code Challenge: Creature Class

## Instructions

1. Clone this assignment into your `tip-challenges` directory.
2. Implement your solution in `index.js` using JavaScript.
3. **Run and test your code thoroughly** (see `index.test.js`).
4. By the end of class, **commit and push your changes to GitHub**.
5. In your browser, verify the solution appears in your remote repository on GitHub.

---

## Problem (edit `index.js`)

### Part 1: Create a superclass called `Creature`

**Properties** (set in the constructor):

- `name` (string) – the creature's name
- `habitat` (string) – where the creature lives

**Methods**:

- `describe()` – returns a string like: `"NAME lives in the HABITAT."`
- `sleep()` – returns a string like: `"NAME falls asleep in the HABITAT. 😴"`

### Part 2: Create a subclass called `Dragon` that extends `Creature`

**Additional property**:

- `firePower` (number) – how strong the dragon's fire is

**Methods**:

- `specialMove()` – returns a string like: `"NAME breathes fire with FIREPOWER intensity! 🔥"`

### Part 3: Create a subclass called `Unicorn` that extends `Creature`

**Additional property**:

- `sparkleLevel` (number) – how magical the unicorn is

**Methods**:

- `specialMove()` – returns a string like: `"NAME heals allies with a sparkle level of SPARKLELEVEL! ✨"`

### Test your classes

1. Create one `Dragon` and one `Unicorn` object with unique values.
2. Call all methods (`describe()`, `sleep()`, and `specialMove()`) on each object.
3. Make sure outputs match the format above.