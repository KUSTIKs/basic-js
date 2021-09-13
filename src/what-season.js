import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
    throw new Error('Invalid date!');
  }
  try {
    const month = date.getMonth();
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    return seasons[Math.trunc(((month + 1) % 12) / 3)];
  } catch (err) {
    if (err.message === 'this is not a Date object.') {
      throw new Error('Invalid date!');
    } else {
      throw err;
    }
  }
}
