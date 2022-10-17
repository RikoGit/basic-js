/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

const sortByHeight = (arr) => {
  const sortedValues = arr.filter((item) => item !== -1).sort((x, y) => x - y);
  let indexSortedValues = 0;

  return arr.map((item) => {
    if (item === -1) {
      return item;
    }
    indexSortedValues += 1;

    return sortedValues[indexSortedValues - 1];
  });
};

module.exports = {
  sortByHeight,
};
