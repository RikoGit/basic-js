/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const countCats = (matrix) => {
  if (!Array.isArray(matrix)) {
    throw new Error("The argument is not an array!");
  }

  return matrix.reduce((count, row) => {
    count += row.filter((cell) => cell === "^^").length;

    return count;
  }, 0);
};

module.exports = {
  countCats,
};
