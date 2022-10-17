/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value) {
    const link = value === undefined ? "" : value;
    this.values.push(`( ${link} )`);

    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.values = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    const indexValues = position - 1;
    if (indexValues < 0 || indexValues >= this.getLength()) {
      this.values = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.values.splice(indexValues, 1);

    return this;
  },
  reverseChain() {
    this.values.reverse();

    return this;
  },
  finishChain() {
    const chain = this.values.join("~~");
    this.values = [];

    return chain;
  },
};

module.exports = {
  chainMaker,
};
