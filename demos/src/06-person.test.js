const Person = require('./06-person');

describe('Test for Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return "down"', () => {
    person.weight = 45;

    expect(person.calcIMC()).toBe('down');
  });

  test('should return "normal"', () => {
    person.weight = 59;

    expect(person.calcIMC()).toBe('normal');
  });
});
