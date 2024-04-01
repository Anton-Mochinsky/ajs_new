    const sortHeroesByHealth = require('./sortHeroesByHealth');

    test('Сортировка героев по уровню жизни', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const sortedHeroes = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
    });

    test('Сравнение массивов через toEqual', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const sortedHeroes = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(sortHeroesByHealth(heroes));
    });

    test('Сортировка героев по уровню жизни (не упадет)', () => {
        const heroes = [
          {name: 'мечник', health: 10},
          {name: 'маг', health: 100},
          {name: 'лучник', health: 80},
        ];
        const unsortedHeroes = sortHeroesByHealth(heroes);
        const sortedHeroes = [
          {name: 'маг', health: 100},
          {name: 'лучник', health: 80},
          {name: 'мечник', health: 10},
        ];
        expect(unsortedHeroes).toEqual(sortedHeroes);
      });
