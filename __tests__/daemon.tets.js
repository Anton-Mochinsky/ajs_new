import Daemon from './Daemon';

describe('Daemon', () => {
  it('should create a Daemon character with the correct properties', () => {
    const daemon = new Daemon('Bob');
    
    expect(daemon.name).toBe('Bob');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.isAlive).toBe(true);
  });

  it('should throw an error if the name is less than 2 characters', () => {
    expect(() => new Daemon('A')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the name is more than 10 characters', () => {
    expect(() => new Daemon('ThisIsALongName')).toThrowError('Name must be between 2 and 10 characters');
  });

  it('should throw an error if the type is not valid', () => {
    expect(() => new Daemon('Bob', 'InvalidType')).toThrowError('Invalid character type');
  });
});
