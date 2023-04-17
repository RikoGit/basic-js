/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

const getCommonCharacterCount = (s1, s2) => {
  let count = 0;
  let s2characters = [...s2];

  for (const character of s1) {
    let index = s2characters.indexOf(character);

    if (index !== -1) {
      s2characters.splice(index, 1);
      count += 1;
    }
  }

  return count;
};

module.exports = {
  getCommonCharacterCount,
};
