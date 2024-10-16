const add = require("../src/Calculator");

test("6", () => {
  expect(add("1,5")).toBe(6);
});

test("negative numbers not allowed -2,-3,-29", () => {
  expect(add("//;\n1;-2,-3,-29")).toBe(
    "negative numbers not allowed -2,-3,-29"
  );
});

test("3", () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("1\n2,3", () => {
  expect(add("1\n2,3")).toBe(6);
});
