/**
 * @param {string} s First string.
 * @param {string} t Second string
 * @return {boolean} Are strings anagrams of each other.
 * @summary Valid Anagram {@link https://leetcode.com/problems/valid-anagram/solution/}
 * @description Given two input strings return true if they are anagrams.
 * Space O(1) - Always two arrays of 26 items.
 * Time O(n) - Only loop two arrays if both strings are euqal length, hence 2 loops of n.
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const OFFSET = 'a'.charCodeAt();
  const ENGLISH_LETTERS_COUNT = 26;

  const countsS = Array(ENGLISH_LETTERS_COUNT);
  const countsT = Array(ENGLISH_LETTERS_COUNT);

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - OFFSET;

    countsS[index] = countsS[index] ? countsS[index] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    const index = t[i].charCodeAt() - OFFSET;

    countsT[index] = countsT[index] ? countsT[index] + 1 : 1;
  }

  return countsS.every((count, index) => count === countsT[index]);
};
