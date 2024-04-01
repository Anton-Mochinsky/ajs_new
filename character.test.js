const { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } = require('./character');

describe('Character', () => {
  describe('Constructor', () => {
    it('should create a character with valid parameters', () => {
      const character = new Character('Alice', 'Bowman');
      
      expect(character.name).toBe('Alice');
      expect(character.type).toBe('Bowman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(0);
      expect(character.defence).toBe(0);
      expect(character.isAlive).toBe(true);
    });

    it('should throw an error if name length is less than 2 characters', () => {
      expect(() => new Character('A', 'Bowman')).toThrowError('Name must be between 2 and 10 characters');
    });

    it('should throw an error if name length is greater than 10 characters', () => {
      expect(() => new Character('ThisNameIsTooLong', 'Bowman')).toThrowError('Name must be between 2 and 10 characters');
    });

    it('should throw an error if type is invalid', () => {
      expect(() => new Character('Alice', 'Invalid')).toThrowError('Invalid character type');
    });
  });

  describe('levelUp', () => {
    it('should increase level, attack, and defence by 20% each and reset health to 100', () => {
      const character = new Character('Alice', 'Bowman');
      character.attack = 20;
      character.defence = 10;
      character.health = 50;

      character.levelUp();

      expect(character.level).toBe(2);
      expect(character.attack).toBe(24); // 20 + 20% = 24
      expect(character.defence).toBe(12); // 10 + 20% = 12
      expect(character.health).toBe(100);
    });

    it('should throw an error if character is dead', () => {
      const character = new Character('Alice', 'Bowman');
      character.health = 0;

      expect(() => character.levelUp()).toThrowError('Cannot level up a dead character');
    });
  });

  describe('damage', () => {
    it('should decrease health based on points and defence', () => {
      const character = new Character('Alice', 'Bowman');
      character.defence = 50;

      character.damage(30);

      // 30 * (1 - 50 / 100) = 30 * 0.5 = 15
      expect(character.health).toBe(85); // 100 - 15 = 85
    });

    it('should set character as dead if health drops below 0', () => {
      const character = new Character('Alice', 'Bowman');
      character.defence = 0;

      character.damage(200);

      expect(character.health).toBe(0);
      expect(character.isAlive).toBe(false);
    });

    it('should throw an error if character is dead', () => {
      const character = new Character('Alice', 'Bowman');
      character.health = 0;

      expect(() => character.damage(20)).toThrowError('Cannot damage a dead character');
    });
  });
});