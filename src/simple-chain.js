import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    position--;
    console.log(position);
    if (
      typeof position !== 'number' ||
      position < 0 ||
      position >= this.chainArr.length
    ) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const repr = this.chainArr.map((chain) => `( ${chain} )`).join('~~');
    this.chainArr = [];
    return repr;
  },
};
