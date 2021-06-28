// eslint-disable-next-line max-classes-per-file
const types = ['Bowman', 'Swordsman', 'Daemon', 'Magician', 'Undead', 'Zombie'];
class Character {
  health = 100;

  level = 1;

  constructor(name, type) {
    this.name = name;
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    this.type = type;
    if (!types.includes(this.type)) {
      throw new Error('Несуществующий класс');
    }
  }
}

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 40;

  defence = 10;
}

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 10;

  defence = 40;
}

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 25;

  defence = 25;
}

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 40;

  defence = 10;
}

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 25;

  defence = 25;
}

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 10;

  defence = 40;
}

export {
  Undead, Daemon, Zombie, Bowman, Character,
};
