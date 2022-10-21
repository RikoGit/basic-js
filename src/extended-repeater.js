const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

const repeater = (
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) => {
  let text = String(str);
  if (String(addition)) {
    text =
      text +
      repeater(addition, {
        repeatTimes: additionRepeatTimes,
        separator: additionSeparator,
      });
  }
  text = new Array(repeatTimes).fill(text).join(separator);

  return text;
};

module.exports = {
  repeater,
};
