/**
 * @param {string[]} words Words to check for order.
 * @param {string} order Order of characters in alien alphabet.
 * @return {boolean} Are given words in alphabetical order given Alien alphabet
 * @summary Verifying Alien Dictionary {@link https://leetcode.com/problems/verifying-an-alien-dictionary/}
 * @description Given a list of words and custom alphabet, return true if list of word is sorted alphabetically.
 * Space O(1) - not asiggning any new memory.
 * Time O(n) - number of words.
 */
const isAlienSorted = (words, order) => {
  const OFFSET = 'a'.charCodeAt(0);
  const orderLength = order.length;
  const wordsLength = words.length;
  const humanToAlien = Array('z'.charCodeAt(0) - OFFSET);

  for (let i = 0; i < orderLength; i++) {
    humanToAlien[order[i].charCodeAt(0) - OFFSET] = i;
  }

  for (let i = 0; i < wordsLength - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const iterationLength = w1.length < w2.length ? w1.length : w2.length;

    let sameChars = true;
    for (let j = 0; j < iterationLength; j++) {
      const char1 = w1[j];
      const char2 = w2[j];

      if (char1 !== char2) {
        sameChars = false;

        if (humanToAlien[char1.charCodeAt(0) - OFFSET] > humanToAlien[char2.charCodeAt(0) - OFFSET]) return false;
        break;
      }
    }

    if (sameChars && w1.length > w2.length) return false;
  }

  return true;
};
