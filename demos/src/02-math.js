function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

module.exports = {
  sum,
  sub,
  multiply,
  divide,
};
