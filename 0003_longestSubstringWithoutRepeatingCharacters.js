/**
 * @param {string} s Input string.
 * @return {number} Length of longest substring without repeating characters.
 * @summary Longest Substring Without Repeating Characters {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/}
 * @description Given a string, find length of its longest substring without repeating characters.
 * Space O(n) - hash object storing data will have no more than n elements.
 * Time O(n) - one iteration of n elements.
 */
const lengthOfLongestSubstring = s => {
  const charMap = {};
  let maxLength = 0;
  let currentStart = 0;

  for (let index = 0; index < s.length; index++) {
    const c = s[index];

    if (charMap[c] !== undefined && charMap[c] >= currentStart) {
      maxLength = Math.max(maxLength, index - currentStart);
      currentStart = charMap[c] + 1;
    }

    charMap[c] = index;
  }

  return Math.max(maxLength, s.length - currentStart);
};
