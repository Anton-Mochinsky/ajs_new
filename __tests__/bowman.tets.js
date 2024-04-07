import Bowman from './Bowman';

describe('Bowman', () => {
  it('should create a Bowman character with the correct properties', () => {
    const bowman = new Bowman('Alice');
    
    expect(bowman.name).toBe('Alice');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.isAlive).toBe(true);
  });

  it('should throw an error if the name is less than 2 characters', () => {
    expect(() => new Bowman('A')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the name is more than 10 characters', () => {
    expect(() => new Bowman('ThisIsALongName')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the type is not valid', () => {
    expect(() => new Bowman('Alice', 'InvalidType')).toThrowError('Invalid character type');
  });
});
