const { add, subtract, multiply, divide, squareRoot, max } = require("./math");

describe("Testing Math equations", () => {
  test("should add together two number", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("should subtract two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("should multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("should divide two numbers", () => {
    expect(divide(4, 2)).toBe(2);
  });
});

describe("Testing more advanced Math equations", () => {
  test("should find the square root of a number", () => {
    expect(squareRoot(36)).toBe(6);
  });

  test("should find the max of two numbers", () => {
    expect(max(4, 7)).toBe(7);
  });
});
