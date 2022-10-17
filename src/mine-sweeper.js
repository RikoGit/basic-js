/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const minesweeper = (matrix) => {
  const transformedMatrix = matrix.map((row) => row.map((cell) => 0));

  matrix.forEach((row, i) => {
    row.forEach((cell, y) => {
      if (cell === false) {
        return;
      }

      if (cell === true) {
        if (i > 0) {
          transformedMatrix[i - 1][y] += 1;
        }
        if (i < matrix.length) {
          transformedMatrix[i + 1][y] += 1;
        }

        if (y > 0) {
          transformedMatrix[i][y - 1] += 1;
          if (i > 0) {
            transformedMatrix[i - 1][y - 1] += 1;
          }

          if (i < matrix.length) {
            transformedMatrix[i + 1][y - 1] += 1;
          }
        }

        if (y < row.length - 1) {
          transformedMatrix[i][y + 1] += 1;
          if (i > 0) {
            transformedMatrix[i - 1][y + 1] += 1;
          }
          if (i < matrix.length) {
            transformedMatrix[i + 1][y + 1] += 1;
          }
        }
      }
    });
  });

  return transformedMatrix;
};

module.exports = {
  minesweeper,
};
