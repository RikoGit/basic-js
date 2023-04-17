/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

const encodeLine = (str) => {
  let encodedLine = "";
  let character = "";
  let characterCount = 0;

  for (let i = 0; i < str.length + 1; i++) {
    if (character === str[i]) {
      characterCount += 1;
    } else {
      if (characterCount === 0 || characterCount === 1) {
        encodedLine += character;
      } else encodedLine += characterCount + character;

      character = str[i];
      characterCount = 1;
    }
  }

  return encodedLine;
};

module.exports = {
  encodeLine,
};
