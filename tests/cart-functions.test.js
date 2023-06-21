const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test.todo("add calculateChange tests here");

  test("Given total 5 and payment 6, it returns 1", () => {
    const total = 5;
    const payment = 6;
    const expectedResult = 1;

    const difference = calculateChange(total, payment);

    expect(difference).toEqual(expectedResult);
  });

  test("Given total 12.30 and payment 13.03, it returns 0.73", () => {
    const total = 12.3;
    const payment = 13.03;
    const expectedResult = 0.73;

    const difference = calculateChange(total, payment);

    expect(difference).toBeCloseTo(expectedResult, 2);
  });

  test("Given total 50.00 and payment 49.00, it returns -1.00", () => {
    const total = 50.0;
    const payment = 49.0;
    const expectedResult = -1.0;

    const difference = calculateChange(total, payment);

    expect(difference).toEqual(expectedResult);
  });
});

describe("isSufficientPayment", () => {
  test.todo("add isSufficientPayment tests here");

  test("Given total 5 and payment 6, it returns true", () => {
    const total = 5;
    const payment = 6;
    const expectedResult = true;

    const difference = isSufficientPayment(total, payment);

    expect(difference).toEqual(expectedResult);
  });

  test("Given total 10 and payment 7, it returns false", () => {
    const total = 10;
    const payment = 7;
    const expectedResult = false;

    const difference = isSufficientPayment(total, payment);

    expect(difference).toEqual(expectedResult);
  });

  test("Given total 3 and payment 3, it returns true", () => {
    const total = 3;
    const payment = 3;
    const expectedResult = true;

    const difference = isSufficientPayment(total, payment);

    expect(difference).toEqual(expectedResult);
  });

  test("Given total '123' and payment 'abc', it returns false", () => {
    const total = 123;
    const payment = "abc";
    const expectedResult = false;

    const difference = isSufficientPayment(total, payment);

    expect(difference).toEqual(expectedResult);
  });
});

describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");

  test("Given an itemsArray of one item with price 4.99, it returns 4.99", () => {
    const itemsArray = [
      { name: "redItem", price: 4.99 },
      { name: "blueItem", price: 0.0 },
    ];
    const itemResult = 4.99;

    const result = calculateTotal(itemsArray);

    expect(result).toEqual(itemResult);
  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", () => {
    const itemsArray = [
      { name: "redItem", price: 3.5 },
      { name: "blueItem", price: 12.99 },
      { name: "greenItem", price: 0.03 },
    ];
    const itemResult = 16.52;

    const result = calculateTotal(itemsArray);

    expect(result).toBeCloseTo(itemResult, 2);
  });

  test("Given an empty itemsArray, it returns 0;", () => {
    const itemsArray = [];
    const itemResult = 0;

    const result = calculateTotal(itemsArray);

    expect(result).toEqual(itemResult);
  });

  test("Add two items with negative prices -12 and -24", () => {
    const itemsArray = [
      { name: "Item 1", price: -12 },
      { name: "Item 2", price: -24 },
    ];
    const itemResult = -36;

    const result = calculateTotal(itemsArray);

    expect(result).toEqual(itemResult);
  });
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});
