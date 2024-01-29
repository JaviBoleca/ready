const prueba = require("./prueba");

describe("prueba", () => {
  test("should print 2 when I put 1", () => {
    const expected = 2;
    const result = prueba(1);
    expect(expected).toBe(result);
  });
});
