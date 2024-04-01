class Character {
   constructor(name, type) { 
    if (name.length < 2 || name.length > 10) { 
      throw new Error('Name must be between 2 and 10 characters'); 
    } 
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
       throw new Error('Invalid character type'); 
    }

 
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = 0;
  this.defence = 0;
  this.isAlive = true;
}

levelUp() {
    if (this.health === 0) {
        throw new Error('Cannot level up a dead character');
    }

    this.level += 1;
    this.attack += Math.round(this.attack * 0.2);
    this.defence += Math.round(this.defence * 0.2);

    if (this.health < 100) {
        this.health = 100;
    }
}

damage(points) {
    if (this.health === 0) {
        throw new Error('Cannot damage a dead character');
    }

    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
        this.health = 0;
        this.isAlive = false;
    }
}
}
 
  class Bowman extends Character {
    constructor(name) {
      super(name, 'Bowman');
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
      this.attack = 40;
      this.defence = 10;
    }
  }

  class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
      this.attack = 10;
      this.defence = 40;
    }
  }

  class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
      this.attack = 10;
      this.defence = 40;
    }
  }

  class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
      this.attack = 25;
      this.defence = 25;
    }
  }

  class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  function getCharacterSpecialAttacks({ special }) {
    return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
      id,
      name,
      description,
      icon
    }));
  }
  
  module.exports = { getCharacterSpecialAttacks };  
  