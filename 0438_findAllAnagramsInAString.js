/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const isAnagram = (word, candidate) => {
  if (word.length !== candidate.length) return false;

  const charMap = {};
  for (let index = 0; index < word.length; index++) {
    if (word.indexOf(candidate[index]) < 0) {
      return false;
    }
    charMap[word[index]] = charMap[word[index]] ? charMap[word[index]] + 1 : 1;
    charMap[candidate[index]] = charMap[candidate[index]] ? charMap[candidate[index]] - 1 : -1;
  }

  return Object.keys(charMap).every(char => charMap[char] === 0);
};

const findAnagrams = (s, p) => {
  const anagrams = {};
  anagrams[p] = true;

  const answer = [];

  const length = s.length - p.length + 1;
  for (let index = 0; index < length; index++) {
    const candidate = s.slice(index, index + p.length);

    if (anagrams[candidate] === undefined) anagrams[candidate] = isAnagram(p, candidate);

    if (anagrams[candidate]) answer.push(index);
  }

  return answer;
};
