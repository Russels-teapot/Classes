export default class Character {
  health = 100;

  level = 1;

  constructor(name) {
    this.name = name;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
  }
}
