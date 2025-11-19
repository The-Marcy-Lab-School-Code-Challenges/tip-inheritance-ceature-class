/**
 * Test suite for the Creature Class problem
 *
 * Problem: Implement a Creature superclass and Dragon/Unicorn subclasses with inheritance.
 */

const { Creature, Dragon, Unicorn } = require('./index.js');

describe('Creature Class', () => {
  describe('Constructor', () => {
    test('should create a creature with name and habitat', () => {
      const creature = new Creature('Fluffy', 'forest');
      expect(creature.name).toBe('Fluffy');
      expect(creature.habitat).toBe('forest');
    });

    test('should handle different name and habitat values', () => {
      const creature = new Creature('Spike', 'mountain');
      expect(creature.name).toBe('Spike');
      expect(creature.habitat).toBe('mountain');
    });
  });

  describe('describe Method', () => {
    test('should return the correct description format', () => {
      const creature = new Creature('Fluffy', 'forest');
      expect(creature.describe()).toBe('Fluffy lives in the forest.');
    });

    test('should work with different names and habitats', () => {
      const creature = new Creature('Spike', 'mountain');
      expect(creature.describe()).toBe('Spike lives in the mountain.');
    });
  });

  describe('sleep Method', () => {
    test('should return the correct sleep message format', () => {
      const creature = new Creature('Fluffy', 'forest');
      expect(creature.sleep()).toBe('Fluffy falls asleep in the forest. 😴');
    });

    test('should work with different names and habitats', () => {
      const creature = new Creature('Spike', 'mountain');
      expect(creature.sleep()).toBe('Spike falls asleep in the mountain. 😴');
    });
  });
});

describe('Dragon Class', () => {
  describe('Constructor and Inheritance', () => {
    test('should extend Creature class', () => {
      const dragon = new Dragon('Smaug', 'mountain', 100);
      expect(dragon instanceof Creature).toBe(true);
      expect(dragon instanceof Dragon).toBe(true);
    });

    test('should have name, habitat, and firePower properties', () => {
      const dragon = new Dragon('Smaug', 'mountain', 100);
      expect(dragon.name).toBe('Smaug');
      expect(dragon.habitat).toBe('mountain');
      expect(dragon.firePower).toBe(100);
    });

    test('should handle different firePower values', () => {
      const dragon = new Dragon('Draco', 'cave', 50);
      expect(dragon.firePower).toBe(50);
    });
  });

  describe('Inherited Methods', () => {
    test('should inherit describe() method from Creature', () => {
      const dragon = new Dragon('Smaug', 'mountain', 100);
      expect(dragon.describe()).toBe('Smaug lives in the mountain.');
    });

    test('should inherit sleep() method from Creature', () => {
      const dragon = new Dragon('Smaug', 'mountain', 100);
      expect(dragon.sleep()).toBe('Smaug falls asleep in the mountain. 😴');
    });
  });

  describe('specialMove Method', () => {
    test('should return the correct special move format', () => {
      const dragon = new Dragon('Smaug', 'mountain', 100);
      expect(dragon.specialMove()).toBe('Smaug breathes fire with 100 intensity! 🔥');
    });

    test('should work with different names and firePower values', () => {
      const dragon = new Dragon('Draco', 'cave', 75);
      expect(dragon.specialMove()).toBe('Draco breathes fire with 75 intensity! 🔥');
    });
  });
});

describe('Unicorn Class', () => {
  describe('Constructor and Inheritance', () => {
    test('should extend Creature class', () => {
      const unicorn = new Unicorn('Sparkle', 'forest', 50);
      expect(unicorn instanceof Creature).toBe(true);
      expect(unicorn instanceof Unicorn).toBe(true);
    });

    test('should have name, habitat, and sparkleLevel properties', () => {
      const unicorn = new Unicorn('Sparkle', 'forest', 50);
      expect(unicorn.name).toBe('Sparkle');
      expect(unicorn.habitat).toBe('forest');
      expect(unicorn.sparkleLevel).toBe(50);
    });

    test('should handle different sparkleLevel values', () => {
      const unicorn = new Unicorn('Rainbow', 'meadow', 80);
      expect(unicorn.sparkleLevel).toBe(80);
    });
  });

  describe('Inherited Methods', () => {
    test('should inherit describe() method from Creature', () => {
      const unicorn = new Unicorn('Sparkle', 'forest', 50);
      expect(unicorn.describe()).toBe('Sparkle lives in the forest.');
    });

    test('should inherit sleep() method from Creature', () => {
      const unicorn = new Unicorn('Sparkle', 'forest', 50);
      expect(unicorn.sleep()).toBe('Sparkle falls asleep in the forest. 😴');
    });
  });

  describe('specialMove Method', () => {
    test('should return the correct special move format', () => {
      const unicorn = new Unicorn('Sparkle', 'forest', 50);
      expect(unicorn.specialMove()).toBe('Sparkle heals allies with a sparkle level of 50! ✨');
    });

    test('should work with different names and sparkleLevel values', () => {
      const unicorn = new Unicorn('Rainbow', 'meadow', 80);
      expect(unicorn.specialMove()).toBe('Rainbow heals allies with a sparkle level of 80! ✨');
    });
  });
});

describe('Integration Tests', () => {
  test('should work with examples from README', () => {
    // Create one Dragon and one Unicorn object with unique values
    const dragon = new Dragon('Smaug', 'mountain', 100);
    const unicorn = new Unicorn('Sparkle', 'forest', 50);

    // Test Dragon methods
    expect(dragon.describe()).toBe('Smaug lives in the mountain.');
    expect(dragon.sleep()).toBe('Smaug falls asleep in the mountain. 😴');
    expect(dragon.specialMove()).toBe('Smaug breathes fire with 100 intensity! 🔥');

    // Test Unicorn methods
    expect(unicorn.describe()).toBe('Sparkle lives in the forest.');
    expect(unicorn.sleep()).toBe('Sparkle falls asleep in the forest. 😴');
    expect(unicorn.specialMove()).toBe('Sparkle heals allies with a sparkle level of 50! ✨');
  });

  test('should handle multiple creatures independently', () => {
    const dragon1 = new Dragon('Draco', 'cave', 75);
    const dragon2 = new Dragon('Flame', 'volcano', 150);
    const unicorn1 = new Unicorn('Rainbow', 'meadow', 80);
    const unicorn2 = new Unicorn('Stardust', 'garden', 60);

    // Each creature should have its own properties
    expect(dragon1.name).toBe('Draco');
    expect(dragon2.name).toBe('Flame');
    expect(unicorn1.name).toBe('Rainbow');
    expect(unicorn2.name).toBe('Stardust');

    // Each creature should have its own methods
    expect(dragon1.specialMove()).toBe('Draco breathes fire with 75 intensity! 🔥');
    expect(dragon2.specialMove()).toBe('Flame breathes fire with 150 intensity! 🔥');
    expect(unicorn1.specialMove()).toBe('Rainbow heals allies with a sparkle level of 80! ✨');
    expect(unicorn2.specialMove()).toBe('Stardust heals allies with a sparkle level of 60! ✨');
  });

  test('should verify inheritance chain', () => {
    const dragon = new Dragon('TestDragon', 'test', 10);
    const unicorn = new Unicorn('TestUnicorn', 'test', 10);

    // Both should be instances of Creature
    expect(dragon instanceof Creature).toBe(true);
    expect(unicorn instanceof Creature).toBe(true);

    // But not instances of each other's class
    expect(dragon instanceof Unicorn).toBe(false);
    expect(unicorn instanceof Dragon).toBe(false);
  });
});
