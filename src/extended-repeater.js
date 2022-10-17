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
  const repeaterText = ({ text, separator, time }) => {
    let textValue = String(text);

    for (let i = 0; i < time - 1; i++) {
      textValue = textValue + separator + text;
    }
    return textValue;
  };

  const finalTextToRepeat =
    str +
    repeaterText({
      text: addition,
      separator: additionSeparator,
      time: additionRepeatTimes,
    });

  return repeaterText({
    text: finalTextToRepeat,
    separator,
    time: repeatTimes,
  });
};

module.exports = {
  repeater,
};
