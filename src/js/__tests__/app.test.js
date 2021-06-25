import {
  zombie, bowman, necromancer, daemon, undead,
} from '../Character';

test('short name', () => {
  expect(zombie).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('long name', () => {
  expect(bowman).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('class does not exist', () => {
  expect(necromancer).toThrow('Несуществующий класс');
});

test('two-symbol name', () => {
  expect(daemon.name).toBe('Al');
});

test('ten-symbol name', () => {
  expect(undead.name).toBe('asdqwezxcr');
});
