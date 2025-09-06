const MaxNumberSubArray = require("../src/MaxNumberSubArray");

test("max subarray sum case 1", () => {
  expect(MaxNumberSubArray([100, 200, 300, 400], 2)).toBe(700);
});

test("max subarray sum case 2", () => {
  expect(MaxNumberSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test("max subarray sum case 3", () => {
  expect(MaxNumberSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});
