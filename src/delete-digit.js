/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

const deleteDigit = (n) => {
  let maximalNumber = 0;
  const numberToString = String(n);

  for (let i = 0; i < numberToString.length; i++) {
    const number = Number(
      numberToString.slice(0, i) + numberToString.slice(i + 1)
    );
    if (number > maximalNumber) {
      maximalNumber = number;
    }
  }

  return maximalNumber;
};

module.exports = {
  deleteDigit,
};
