import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digitArray = [...n.toString()].map(Number);
  digitArray.splice(digitArray.lastIndexOf(Math.min(...digitArray)), 1);
  return Number(digitArray.join(''));
}
