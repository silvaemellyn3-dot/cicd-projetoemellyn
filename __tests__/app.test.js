function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Divisão por zero não permitida");
  return a / b;
}

function ehPar(num) {
  return num % 2 === 0;
}

test("soma 2 + 3 deve ser 5", () => {
  expect(soma(2, 3)).toBe(5);
});

test("subtrai 10 - 4 deve ser 6", () => {
  expect(subtrai(10, 4)).toBe(6);
});

test("multiplica 3 * 7 deve ser 21", () => {
  expect(multiplica(3, 7)).toBe(21);
});

test("divide 20 / 4 deve ser 5", () => {
  expect(divide(20, 4)).toBe(5);
});

test("6 deve ser par", () => {
  expect(ehPar(6)).toBe(true);
});
