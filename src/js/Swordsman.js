import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
  }

  type = 'Swordsman';

  attack = 40;

  defence = 10;
}
