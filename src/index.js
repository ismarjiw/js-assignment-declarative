import defaultObject from "./hof-exercise";

const { calculateTotalDeclarative, prices } = defaultObject;

// OPTIONAL TODO - Write tests that use the calculateTotalDeclarative function

describe("calculateTotalDeclarative", () => {
  test("calculate total correctly without tax", () => {
    const items = [{ price: 1.5 }, { price: 2.0 }];
    const tax = 0;
    const total = calculateTotalDeclarative(items, tax);
    expect(total).toBe(3.5); 
  });

  test("calculate total correctly with tax", () => {
    const items = [
      { price: 1.5, taxable: true },
      { price: 2.0, taxable: false },
    ];
    const tax = 5; 
    const total = calculateTotalDeclarative(items, tax);
    expect(total).toBeCloseTo(3.675); 
  });
});
