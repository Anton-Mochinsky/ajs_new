const { getCharacterSpecialAttacks } = require('./character');

test('Extracting special attacks with description', () => {
  const character = {
    special: [
      { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
      { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }
    ]
  };

  const result = getCharacterSpecialAttacks(character);

  expect(result).toEqual([
    { id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...' },
    { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...' }
  ]);
});

test('Extracting special attacks without description', () => {
  const character = {
    special: [
      { id: 10, name: 'Огненный шар', icon: 'http://...' }
    ]
  };

  const result = getCharacterSpecialAttacks(character);

  expect(result).toEqual([
    { id: 10, name: 'Огненный шар', description: 'Описание недоступно', icon: 'http://...' }
  ]);
});

