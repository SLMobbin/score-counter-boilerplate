const calculateScore = require("../utils/calculateScore");

test("sum of points", () => {
  expect(calculateScore([1, 2, 3])).toBe(6);
});
