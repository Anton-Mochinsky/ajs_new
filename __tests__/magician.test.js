import Magician from './Magician';

describe('Magician', () => {
  it('should create a Magician character with the correct properties', () => {
    const magician = new Magician('Charlie');
    
    expect(magician.name).toBe('Charlie');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.isAlive).toBe(true);
  });

  it('should throw an error if the name is less than 2 characters', () => {
    expect(() => new Magician('A')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the name is more than 10 characters', () => {
    expect(() => new Magician('ThisIsALongName')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the type is not valid', () => {
    expect(() => new Magician('Charlie', 'InvalidType')).toThrowError('Invalid character type');
  });
});
