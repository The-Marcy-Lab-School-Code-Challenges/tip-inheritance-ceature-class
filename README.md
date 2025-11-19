# Code Challenge: Song Class

## Instructions

1. Clone this assignment into your `tip-challenges` directory.
2. Implement your solution in `index.js` using JavaScript.
3. **Run and test your code thoroughly** (see `index.test.js`).
4. By the end of class, **commit and push your changes to GitHub**.
5. In your browser, verify the solution appears in your remote repository on GitHub.

---

## Problem (edit `index.js`)

Create a `Song` class with the following specifications:

### Instance Properties

- `title` (String, public, set by the constructor)
- `artist` (String, public, set by the constructor)
- `playCount` (Number, *private*, starting value of `0`)
- `rating` (Number, *private*, starting value of `0`)

### Instance Methods

- **Getter methods** for the `playCount` and `rating` private fields. Bonus points if you use the `get` syntax!
- `play()` - increases `playCount` by `1`, then prints `"Now playing: {title} by {artist}"`.
- `rate(stars)` - sets `rating` to `stars` (a number from 1-5), then prints `"You rated {title} {stars} stars"`.
- `isPopular()` - returns `true` if `playCount` is `10` or more, `false` otherwise.

### Static Properties

- `playlist` (array tracking all created Songs)

### Static Methods

- `getTotalSongs()` - returns count of all Songs created
- `findByTitle(title)` - searches the `playlist` array and returns matching Song

---

## Usage Examples

### Creating Songs

```javascript
const song1 = new Song("Bohemian Rhapsody", "Queen");
const song2 = new Song("Stairway to Heaven", "Led Zeppelin");
const song3 = new Song("Hotel California", "Eagles");

// Access public properties
console.log(song1.title);  // "Bohemian Rhapsody"
console.log(song1.artist); // "Queen"
```

### Using Instance Methods

```javascript
// Play a song (increases playCount)
song1.play();
// Output: "Now playing: Bohemian Rhapsody by Queen"

song1.play();
song1.play();
// Output: "Now playing: Bohemian Rhapsody by Queen" (each time)

// Rate a song
song1.rate(5);
// Output: "You rated Bohemian Rhapsody 5 stars"

song2.rate(4);
// Output: "You rated Stairway to Heaven 4 stars"

// Check if song is popular (10+ plays)
console.log(song1.isPopular()); // false (only played 3 times)

// Play more times to make it popular
for (let i = 0; i < 7; i++) {
  song1.play();
}
console.log(song1.isPopular()); // true (played 10+ times)
```

### Using Getter Methods

```javascript
// Access private fields through getters
console.log(song1.playCount); // 10 (or current play count)
console.log(song1.rating);    // 5

// Note: Direct access to private fields should be undefined
console.log(song1.#playCount); // SyntaxError or undefined (depending on implementation)
```

### Using Static Properties and Methods

```javascript
// Access the playlist (all created songs)
console.log(Song.playlist);
// [song1, song2, song3]

// Get total number of songs
console.log(Song.getTotalSongs()); // 3

// Find a song by title
const found = Song.findByTitle("Stairway to Heaven");
console.log(found);           // song2 object
console.log(found.artist);    // "Led Zeppelin"

// Search for non-existent song
const notFound = Song.findByTitle("Never Gonna Give You Up");
console.log(notFound); // undefined
```

### Complete Example

```javascript
// Create some songs
const song1 = new Song("Bohemian Rhapsody", "Queen");
const song2 = new Song("Stairway to Heaven", "Led Zeppelin");

// Play songs multiple times
song1.play(); // "Now playing: Bohemian Rhapsody by Queen"
song1.play();
song2.play(); // "Now playing: Stairway to Heaven by Led Zeppelin"

// Rate the songs
song1.rate(5); // "You rated Bohemian Rhapsody 5 stars"
song2.rate(4); // "You rated Stairway to Heaven 4 stars"

// Check popularity
console.log(song1.isPopular()); // false (only 2 plays)
console.log(song2.isPopular()); // false (only 1 play)

// Access play counts and ratings
console.log(song1.playCount); // 2
console.log(song1.rating);    // 5
console.log(song2.playCount); // 1
console.log(song2.rating);    // 4

// Use static methods
console.log(Song.getTotalSongs()); // 2
console.log(Song.playlist.length); // 2

const found = Song.findByTitle("Bohemian Rhapsody");
console.log(found === song1); // true
```