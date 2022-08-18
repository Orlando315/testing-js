const Person = require('./06-person');

describe('Test for Person', () => {
  let person;

  // Arrange - setup the test
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return "down"', () => {
    // AAA
    // Arrange / Given
    // Act / When
    // Assert / Then

    // Arrange - setup the test
    person.weight = 45;
    // Act - execute the test
    const imc = person.calcIMC();
    // Assert - verify the test
    expect(imc).toBe('down');
  });

  test('should return "normal"', () => {
    person.weight = 59;

    expect(person.calcIMC()).toBe('normal');
  });
});
