function add(numbers) {
  try {
    const newNums = numbers.split(/[/,;\n ]+/).filter((num) => num !== "");
    const hasNegative = newNums.filter((num) => Number(num) < 0);

    if (hasNegative.length && hasNegative) {
      throw new Error(`negative numbers not allowed ${hasNegative}`);
    }

    return newNums.reduce((acc, curr) => Number(acc) + Number(curr), 0);
  } catch (err) {
    return err.message;
  }
}

module.exports = add;
