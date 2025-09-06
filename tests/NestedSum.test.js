const NestedSum = require("../src/NestedSum");

test("nested even sum case 1", () => {
  const obj = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  expect(NestedSum(obj)).toBe(6);
});

test("nested even sum case 2", () => {
  const obj = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };
  expect(NestedSum(obj)).toBe(12);
});
