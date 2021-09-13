import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  return domains.reduce((res, doms) => {
    const includedDomains = doms
      .split('.')
      .reverse()
      .map((_, ind, arr) => `.${arr.slice(0, ind + 1).join('.')}`);
    return {
      ...res,
      ...includedDomains.reduce((prev, domain) => {
        return {
          ...prev,
          [domain]: res[domain] ? res[domain] + 1 : 1,
        };
      }, {}),
    };
  }, {});
}

const domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];

console.log(getDNSStats(domains));
