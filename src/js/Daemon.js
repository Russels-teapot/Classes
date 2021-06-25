import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
  }

  type = 'Daemon';

  attack = 10;

  defence = 40;
}
