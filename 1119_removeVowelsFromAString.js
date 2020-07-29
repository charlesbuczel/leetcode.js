/**
 * @param {string} s Input string, can contain vowels.
 * @return {string} String with vowels removed
 * @summary Remove Vowels from a String {@link https://leetcode.com/problems/remove-vowels-from-a-string/}
 * @description Return a string with vowels (a, e, i, o, u) removed
 * Space O(n) - where n is s.length, create array from input string.
 * Time O(n) - where n is s.length, iterate over string length.
 */
const removeVowels = s =>
  s
    .split('')
    .filter(c => !['a', 'e', 'i', 'o', 'u'].includes(c))
    .join('');
