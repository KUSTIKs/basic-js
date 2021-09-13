import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = countSteps(disksNumber);
  const turnsPS = 3600 / turnsSpeed;
  const seconds = Math.floor(turnsPS * turns);
  return { turns, seconds };
}

function countSteps(n) {
  if (n === 0) return 0;
  return 2 * countSteps(n - 1) + 1;
}
