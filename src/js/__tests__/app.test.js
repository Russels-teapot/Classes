import {
  Undead, Bowman, Zombie, Daemon, Character,
} from '../Character';

test('short name', () => {
  expect(() => new Character('a', 'Zombie')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('long name', () => {
  expect(() => new Character('asdasdasdasd', 'Bowman')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('class does not exist', () => {
  expect(() => new Character('asd', 'Necromancer')).toThrow('Несуществующий класс');
});

test('two-symbol name', () => {
  const daemon = new Character('Al', 'Daemon');
  expect(daemon.name).toBe('Al');
});

test('ten-symbol name', () => {
  const undead = new Character('asdqwezxcr', 'Undead');
  expect(undead.name).toBe('asdqwezxcr');
});
