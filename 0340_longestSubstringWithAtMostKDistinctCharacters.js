/**
 * @param {string} s Input string.
 * @param {number} k Limit of distinct characters in substring.
 * @return {number} Length of substring with at most k distinct characters.
 * @summary Longest Substring With At Most K Distinct Characters {@link https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/}
 * @description Given a string, remove m
 * Space O(k) - Hash will contain at most k characters.
 * Time O(n*k) - For length of string and k distinct characters.
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
  const charMap = {};
  let left = 0;
  let right = 0;
  let max = 0;
  let count = 0;

  while (right < s.length) {
    const char = s[right];

    if (!charMap[char]) {
      charMap[char] = 1;
      count++;
    } else {
      charMap[char]++;
    }

    while (count === k + 1) {
      const char = s[left];
      charMap[char]--;
      if (!charMap[char]) count--;
      left++;
    }

    max = Math.max(max, right - left + 1);

    right++;
  }

  return max;
};
