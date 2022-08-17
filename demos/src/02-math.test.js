const {
  sum, sub, multiply, divide,
} = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('subtracts 4 - 1 should be 3', () => {
  expect(sub(4, 1)).toBe(3);
});

test('multiply 2 * 2 should be 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('should divide', () => {
  expect(divide(6, 3)).toBe(2);
  expect(divide(5, 2)).toBe(2.5);
});

test('should divide by zero', () => {
  expect(divide(6, 0)).toBeNull();
  expect(divide(5, 0)).toBeNull();
  expect(divide(5, 0)).toBeNull();
});
