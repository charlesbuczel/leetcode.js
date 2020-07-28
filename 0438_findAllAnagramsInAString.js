/**
 * @param {string} stream Input string.
 * @param {string} word Word to compare substring to.
 * @return {number[]} Array with indexes of all substrings that are anagrams of word.
 * @summary Find All Anagrams in a String {@link https://leetcode.com/problems/find-all-anagrams-in-a-string/}
 * @description Given two input strings return indexes of substrings that are anagrams of second input.
 * Space O(A+B) - A length of string 'word', B length of string 'stream'.
 * Time O(1) - Two new arrays, each of 26 elements.
 */
const findAnagrams = (stream, word) => {
  const counts = Array(26);
  const currentCount = Array(26);
  const offset = 'a'.charCodeAt();
  const answer = [];
  const sLength = stream.length;
  const wLength = word.length;

  for (let i = 0; i < wLength; i++) {
    const index = word[i].charCodeAt() - offset;

    counts[index] = counts[index] ? counts[index] + 1 : 1;
  }

  for (let i = 0; i < sLength; i++) {
    const index = stream[i].charCodeAt() - offset;

    currentCount[index] = currentCount[index] ? currentCount[index] + 1 : 1;

    if (i >= wLength) {
      const index = stream[i - wLength].charCodeAt() - offset;
      currentCount[index] = currentCount[index] ? currentCount[index] - 1 : undefined;
    }

    if (counts.every((count, index) => count === currentCount[index])) {
      answer.push(i - wLength + 1);
    }
  }

  return answer;
};
