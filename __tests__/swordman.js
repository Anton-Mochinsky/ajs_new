import Swordsman from './Swordsman';

describe('Swordsman', () => {
  it('should create a Swordsman character with the correct properties', () => {
    const swordsman = new Swordsman('Kris');
    
    expect(swordsman.name).toBe('Kris');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.isAlive).toBe(true);
  });

  it('should throw an error if the name is less than 2 characters', () => {
    expect(() => new Swordsman('K')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the name is more than 10 characters', () => {
    expect(() => new Swordsman('ThisIsALongName')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the type is not valid', () => {
    expect(() => new Swordsman('Kris', 'InvalidType')).toThrowError('Invalid character type');
  });
});
