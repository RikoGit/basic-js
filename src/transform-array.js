/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const transform = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const flags = [
    "--discard-prev",
    "--discard-next",
    "--double-prev",
    "--double-next",
  ];

  let flag = false;
  let isItemRemoved = false;

  return arr.reduce((transformedArray, item) => {
    if (flags.includes(item)) {
      flag = item;

      return transformedArray;
    }
    if (!flag) {
      transformedArray.push(item);

      return transformedArray;
    }
    if (flag === "--discard-prev") {
      if (isItemRemoved) {
        transformedArray.push(item);
        flag = false;
        isItemRemoved = false;

        return transformedArray;
      }
      if (transformedArray.length !== 0) {
        transformedArray.pop();
      }
      transformedArray.push(item);
    }
    if (flag === "--double-prev") {
      if (isItemRemoved) {
        transformedArray.push(item);
        flag = false;
        isItemRemoved = false;

        return transformedArray;
      }
      if (transformedArray.length !== 0) {
        const last = transformedArray[transformedArray.length - 1];
        transformedArray.push(last);
      }
      transformedArray.push(item);
    }
    if (flag === "--discard-next") {
      isItemRemoved = true;
    }
    if (flag === "--double-next") {
      transformedArray.push(item, item);
    }
    flag = false;

    return transformedArray;
  }, []);
};

module.exports = {
  transform,
};
