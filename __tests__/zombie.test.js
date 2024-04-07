import Zombie from './Zombie';

describe('Zombie', () => {
  it('should create a Zombie character with the correct properties', () => {
    const zombie = new Zombie('Dave');
    
    expect(zombie.name).toBe('Dave');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.isAlive).toBe(true);
  });

  it('should throw an error if the name is less than 2 characters', () => {
    expect(() => new Zombie('D')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the name is more than 10 characters', () => {
    expect(() => new Zombie('ThisIsALongName')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the type is not valid', () => {
    expect(() => new Zombie('Dave', 'InvalidType')).toThrowError('Invalid character type');
  });
});
