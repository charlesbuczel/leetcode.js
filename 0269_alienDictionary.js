/**
 * @param {string[]} words Array of strings.
 * @return {string} String containing letters in order for alien language.
 * @summary Alien Dictionary {@link https://leetcode.com/problems/alien-dictionary/}
 * @description Given a list of words in alien dictionary which are sorted by rules of the language, return the order of letters in the language.
 * Space O(1) - store number of relations and at mosat unique records for number of unique chars.
 * Time O(n) - where n is the length of all of the words combined.
 */
const alienOrder = words => {
  const adjList = {};
  const counts = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      adjList[char] = [];
      counts[char] = 0;
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    if (w1.length > w2.length && !w1.indexOf(w2)) {
      return '';
    }

    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const c1 = w1[j];
      const c2 = w2[j];
      if (c1 !== c2) {
        adjList[w1[j]].push(w2[j]);
        counts[w2[j]]++;
        break;
      }
    }
  }

  const answer = [];
  const queue = [];

  Object.keys(counts).forEach(char => {
    if (!counts[char]) queue.push(char);
  });

  while (queue.length) {
    const char = queue.pop();
    answer.push(char);

    (adjList[char] || []).forEach(adjacent => {
      counts[adjacent]--;
      if (!counts[adjacent]) queue.unshift(adjacent);
    });
  }

  return answer.length < Object.keys(counts).length ? '' : answer.join('');
};
