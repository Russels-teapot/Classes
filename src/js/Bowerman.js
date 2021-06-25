import Character from './Character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name);
  }

  type = 'Bowerman';

  attack = 25;

  defence = 25;
}
