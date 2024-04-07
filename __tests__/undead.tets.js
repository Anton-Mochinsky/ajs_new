import Undead from './Undead';

describe('Undead', () => {
  it('should create an Undead character with the correct properties', () => {
    const undead = new Undead('Li');
    
    expect(undead.name).toBe('Li');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.isAlive).toBe(true);
  });

  it('should throw an error if the name is less than 2 characters', () => {
    expect(() => new Undead('L')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the name is more than 10 characters', () => {
    expect(() => new Undead('ThisIsALongName')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the type is not valid', () => {
    expect(() => new Undead('Li', 'InvalidType')).toThrowError('Invalid character type');
  });
});
