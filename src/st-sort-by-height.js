import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  const temp = [...arr];
  let swaps;
  do {
    swaps = 0;
    for (let i = 0; i < temp.length; i++) {
      const curEl = temp[i];
      if (curEl === -1) {
        continue;
      }

      const prevIndex =
        i -
        1 -
        temp
          .slice(0, i)
          .reverse()
          .findIndex((el) => el !== -1);
      const prevEl = temp[prevIndex];

      if (prevIndex >= temp.length) {
        continue;
      }

      if (prevEl > curEl) {
        swaps++;
        temp[prevIndex] = curEl;
        temp[i] = prevEl;
      }
    }
  } while (swaps !== 0);
  return temp;
}
