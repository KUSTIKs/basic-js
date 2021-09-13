import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let strCpy = `${str}`;
  const regex = /(.)\1+/;
  while (regex.test(strCpy)) {
    strCpy = strCpy.replace(regex, `${RegExp.lastMatch.length}$1`);
  }
  return strCpy;
}
