import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

function* infiniteElementsGenerator(arr) {
  let ind = 0;
  while (true) {
    yield arr[ind % arr.length];
    ind++;
  }
}

export default class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const keySymbolsGenerator = infiniteElementsGenerator(key.toUpperCase());

    const encryptedMessageArr = [...message].map((symbol) => {
      symbol = symbol.toUpperCase();
      if (![...this.alphabet].includes(symbol)) return symbol;
      return this.alphabet[
        (this.alphabet.indexOf(symbol) +
          this.alphabet.indexOf(keySymbolsGenerator.next().value)) %
          this.alphabet.length
      ];
    });

    return this.isDirect
      ? encryptedMessageArr.join('')
      : encryptedMessageArr.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const keySymbolsGenerator = infiniteElementsGenerator(key.toUpperCase());

    const decryptedMessageArr = [...encryptedMessage].map((symbol) => {
      symbol = symbol.toUpperCase();
      if (![...this.alphabet].includes(symbol)) return symbol;

      return this.alphabet[
        (this.alphabet.length +
          this.alphabet.indexOf(symbol) -
          this.alphabet.indexOf(keySymbolsGenerator.next().value)) %
          this.alphabet.length
      ];
    });

    return this.isDirect
      ? decryptedMessageArr.join('')
      : decryptedMessageArr.reverse().join('');
  }
}
