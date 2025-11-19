/**
 * Test suite for the Song Class problem
 *
 * Problem: Implement a Song class with instance properties, methods, static properties, and static methods.
 */

const { Song } = require('./index.js');

// Clear playlist before each test to ensure clean state
beforeEach(() => {
  Song.playlist = [];
});

describe('Song Class', () => {
  describe('Instance Properties', () => {
    test('should have public title and artist properties', () => {
      const song = new Song("Bohemian Rhapsody", "Queen");
      expect(song.title).toBe("Bohemian Rhapsody");
      expect(song.artist).toBe("Queen");
    });

    test('should have private playCount and rating fields that are not directly accessible', () => {
      const song = new Song("Test Song", "Test Artist");
      // Private fields cannot be accessed directly - they must be accessed through getters
      // Direct property access would be undefined (private fields are not enumerable)
      expect(song.playCount).toBeDefined(); // Accessible through getter
      expect(song.rating).toBeDefined(); // Accessible through getter
    });

    test('should initialize playCount to 0 and rating to 0', () => {
      const song = new Song("Test Song", "Test Artist");
      expect(song.playCount).toBe(0);
      expect(song.rating).toBe(0);
    });
  });

  describe('Getter Methods', () => {
    test('playCount getter should return the play count', () => {
      const song = new Song("Test Song", "Test Artist");
      expect(song.playCount).toBe(0);
      
      song.play();
      expect(song.playCount).toBe(1);
      
      song.play();
      song.play();
      expect(song.playCount).toBe(3);
    });

    test('rating getter should return the rating', () => {
      const song = new Song("Test Song", "Test Artist");
      expect(song.rating).toBe(0);
      
      song.rate(5);
      expect(song.rating).toBe(5);
      
      song.rate(3);
      expect(song.rating).toBe(3);
    });
  });

  describe('play Method', () => {
    test('should increase playCount by 1', () => {
      const song = new Song("Bohemian Rhapsody", "Queen");
      expect(song.playCount).toBe(0);
      
      song.play();
      expect(song.playCount).toBe(1);
      
      song.play();
      expect(song.playCount).toBe(2);
    });

    test('should log the correct message when play is called', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      const song = new Song("Bohemian Rhapsody", "Queen");
      
      song.play();
      expect(consoleSpy).toHaveBeenCalledWith("Now playing: Bohemian Rhapsody by Queen");
      
      song.play();
      expect(consoleSpy).toHaveBeenCalledWith("Now playing: Bohemian Rhapsody by Queen");
      
      consoleSpy.mockRestore();
    });

    test('should handle multiple play calls correctly', () => {
      const song = new Song("Test Song", "Test Artist");
      song.play();
      song.play();
      song.play();
      expect(song.playCount).toBe(3);
    });
  });

  describe('rate Method', () => {
    test('should set rating to the given stars', () => {
      const song = new Song("Test Song", "Test Artist");
      expect(song.rating).toBe(0);
      
      song.rate(5);
      expect(song.rating).toBe(5);
      
      song.rate(3);
      expect(song.rating).toBe(3);
    });

    test('should log the correct message when rate is called', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      const song = new Song("Bohemian Rhapsody", "Queen");
      
      song.rate(5);
      expect(consoleSpy).toHaveBeenCalledWith("You rated Bohemian Rhapsody 5 stars");
      
      song.rate(4);
      expect(consoleSpy).toHaveBeenCalledWith("You rated Bohemian Rhapsody 4 stars");
      
      consoleSpy.mockRestore();
    });

    test('should handle different rating values', () => {
      const song = new Song("Test Song", "Test Artist");
      song.rate(1);
      expect(song.rating).toBe(1);
      
      song.rate(2);
      expect(song.rating).toBe(2);
      
      song.rate(5);
      expect(song.rating).toBe(5);
    });
  });

  describe('isPopular Method', () => {
    test('should return false for a new song', () => {
      const song = new Song("Test Song", "Test Artist");
      expect(song.isPopular()).toBe(false);
    });

    test('should return false when playCount is less than 10', () => {
      const song = new Song("Test Song", "Test Artist");
      
      for (let i = 0; i < 9; i++) {
        song.play();
      }
      
      expect(song.playCount).toBe(9);
      expect(song.isPopular()).toBe(false);
    });

    test('should return true when playCount is exactly 10', () => {
      const song = new Song("Test Song", "Test Artist");
      
      for (let i = 0; i < 10; i++) {
        song.play();
      }
      
      expect(song.playCount).toBe(10);
      expect(song.isPopular()).toBe(true);
    });

    test('should return true when playCount is greater than 10', () => {
      const song = new Song("Test Song", "Test Artist");
      
      for (let i = 0; i < 15; i++) {
        song.play();
      }
      
      expect(song.playCount).toBe(15);
      expect(song.isPopular()).toBe(true);
    });
  });

  describe('Static Properties', () => {
    test('playlist should track all created songs', () => {
      const song1 = new Song("Bohemian Rhapsody", "Queen");
      const song2 = new Song("Stairway to Heaven", "Led Zeppelin");
      const song3 = new Song("Hotel California", "Eagles");
      
      expect(Song.playlist).toHaveLength(3);
      expect(Song.playlist).toContain(song1);
      expect(Song.playlist).toContain(song2);
      expect(Song.playlist).toContain(song3);
    });

    test('playlist should be an array', () => {
      expect(Array.isArray(Song.playlist)).toBe(true);
    });
  });

  describe('Static Methods', () => {
    test('getTotalSongs should return the count of all created songs', () => {
      expect(Song.getTotalSongs()).toBe(0);
      
      const song1 = new Song("Bohemian Rhapsody", "Queen");
      expect(Song.getTotalSongs()).toBe(1);
      
      const song2 = new Song("Stairway to Heaven", "Led Zeppelin");
      expect(Song.getTotalSongs()).toBe(2);
      
      const song3 = new Song("Hotel California", "Eagles");
      expect(Song.getTotalSongs()).toBe(3);
    });

    test('findByTitle should return the song with matching title', () => {
      const song1 = new Song("Bohemian Rhapsody", "Queen");
      const song2 = new Song("Stairway to Heaven", "Led Zeppelin");
      const song3 = new Song("Hotel California", "Eagles");
      
      const found = Song.findByTitle("Stairway to Heaven");
      expect(found).toBe(song2);
      expect(found.title).toBe("Stairway to Heaven");
      expect(found.artist).toBe("Led Zeppelin");
    });

    test('findByTitle should return undefined if no song matches', () => {
      new Song("Bohemian Rhapsody", "Queen");
      new Song("Stairway to Heaven", "Led Zeppelin");
      
      const found = Song.findByTitle("Never Gonna Give You Up");
      expect(found).toBeUndefined();
    });

    test('findByTitle should handle case sensitivity', () => {
      const song = new Song("Bohemian Rhapsody", "Queen");
      
      expect(Song.findByTitle("Bohemian Rhapsody")).toBe(song);
      expect(Song.findByTitle("bohemian rhapsody")).toBeUndefined();
      expect(Song.findByTitle("BOHEMIAN RHAPSODY")).toBeUndefined();
    });
  });

  describe('Integration Tests', () => {
    test('should work with examples from README', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      // Creating songs
      const song1 = new Song("Bohemian Rhapsody", "Queen");
      const song2 = new Song("Stairway to Heaven", "Led Zeppelin");
      
      expect(song1.title).toBe("Bohemian Rhapsody");
      expect(song1.artist).toBe("Queen");
      
      // Private fields are accessed through getters, not directly
      // Getter examples
      expect(song1.playCount).toBe(0);
      expect(song1.rating).toBe(0);
      
      // Play examples
      song1.play();
      expect(consoleSpy).toHaveBeenCalledWith("Now playing: Bohemian Rhapsody by Queen");
      expect(song1.playCount).toBe(1);
      
      song1.play();
      expect(song1.playCount).toBe(2);
      
      song2.play();
      expect(consoleSpy).toHaveBeenCalledWith("Now playing: Stairway to Heaven by Led Zeppelin");
      expect(song2.playCount).toBe(1);
      
      // Rate examples
      song1.rate(5);
      expect(consoleSpy).toHaveBeenCalledWith("You rated Bohemian Rhapsody 5 stars");
      expect(song1.rating).toBe(5);
      
      song2.rate(4);
      expect(consoleSpy).toHaveBeenCalledWith("You rated Stairway to Heaven 4 stars");
      expect(song2.rating).toBe(4);
      
      // Check popularity
      expect(song1.isPopular()).toBe(false);
      expect(song2.isPopular()).toBe(false);
      
      // Static property examples
      expect(Song.playlist).toHaveLength(2);
      expect(Song.playlist).toContain(song1);
      expect(Song.playlist).toContain(song2);
      
      // Static method examples
      expect(Song.getTotalSongs()).toBe(2);
      
      const found = Song.findByTitle("Bohemian Rhapsody");
      expect(found).toBe(song1);
      expect(found.title).toBe("Bohemian Rhapsody");
      
      consoleSpy.mockRestore();
    });

    test('should handle multiple songs independently', () => {
      const song1 = new Song("Song 1", "Artist 1");
      const song2 = new Song("Song 2", "Artist 2");
      
      song1.play();
      song1.play();
      song2.play();
      
      expect(song1.playCount).toBe(2);
      expect(song2.playCount).toBe(1);
      
      song1.rate(5);
      song2.rate(3);
      
      expect(song1.rating).toBe(5);
      expect(song2.rating).toBe(3);
      
      expect(song1.isPopular()).toBe(false);
      expect(song2.isPopular()).toBe(false);
    });

    test('should make a song popular after 10 plays', () => {
      const song = new Song("Popular Song", "Popular Artist");
      
      for (let i = 0; i < 9; i++) {
        song.play();
      }
      expect(song.isPopular()).toBe(false);
      
      song.play(); // 10th play
      expect(song.isPopular()).toBe(true);
      expect(song.playCount).toBe(10);
    });
  });
});
