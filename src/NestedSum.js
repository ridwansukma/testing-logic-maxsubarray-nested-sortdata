function NestedSum(params) {
  let result = 0;

  for (let index in params) {
    let value = params[index];
    if (typeof value === "number" && value % 2 === 0) {
      result += value;
    } else if (typeof value === "object" && value !== null) {
      result += NestedSum(value);
    }
  }

  return result;
}

module.exports = NestedSum;