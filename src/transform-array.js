import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const temp = [];
  const arrCpy = [...arr];
  for (let i = 0; i < arrCpy.length; i++) {
    if (i < arrCpy.length - 1) {
      if (arrCpy[i] === '--double-next') {
        temp.push(arrCpy[i + 1]);
      } else if (arrCpy[i] === '--discard-next') {
        arrCpy.splice(i + 1, 1);
      }
    }
    if (i > 0) {
      if (arrCpy[i] === '--double-prev') {
        temp.push(arrCpy[i - 1]);
      } else if (arrCpy[i] === '--discard-prev') {
        temp.pop();
      }
    }
    temp.push(arrCpy[i]);
  }
  return temp.filter(
    (el) =>
      ![
        '--double-next',
        '--discard-next',
        '--double-prev',
        '--discard-prev',
      ].includes(el)
  );
}
