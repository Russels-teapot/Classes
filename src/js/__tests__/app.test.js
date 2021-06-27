import {
  Undead, Bowman, Magician, Zombie, Daemon, types,
} from '../Character';

test('short name', () => {
  expect(new Zombie('as', 'Zombie')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('long name', () => {
  expect(new Bowman('asdasdasdasd', 'Bowman')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('class does not exist', () => {
  expect(new Magician('asd', 'Necromancer')).toThrow('Несуществующий класс');
});

test('two-symbol name', () => {
  const daemon = new Daemon('Al', 'Daemon');
  expect(daemon.name).toBe('Al');
});

test('ten-symbol name', () => {
  const undead = new Undead('asdqwezxcr', 'Undead');
  expect(undead.name).toBe('asdqwezxcr');
});
