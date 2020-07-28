/**
 * @param {string} s String to test for palindrome.
 * @return {boolean} Can permutate the string to create valid palindrome.
 * @summary Palindrome Permutations {@link https://leetcode.com/problems/palindrome-permutation/}
 * @description Given input string - can it be permutated to create a palindrome.
 * Space O(1) - Hashmap with entries for unique characters, there is a limited number of those.
 * Time O(n) - Loop once for s.length to create a map, after that verify it.
 */
const canPermutePalindrome = s => {
  const charCount = {};

  for (i = 0; i < s.length; i++) {
    if (!charCount[s[i]]) charCount[s[i]] = 1;
    else charCount[s[i]] = charCount[s[i]] + 1;
  }

  const isSingleCharAllowed = !!(s.length % 2);
  let hasOddChar = false;

  return Object.keys(charCount).every(char => {
    const count = charCount[char];
    if (count % 2) {
      if (isSingleCharAllowed && !hasOddChar) {
        hasOddChar = true;
        return true;
      }
      return false;
    }

    return !(count % 2);
  });
};
