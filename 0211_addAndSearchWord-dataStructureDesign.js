/**
 * Class representing a Trie data structure.
 * @summary Add and Search Word - Data structure design {@link https://leetcode.com/problems/add-and-search-word-data-structure-design/}
 * @description Implement a structure that allows to add words and search words with wildcard support.
 */
class WordDictionary {
  /**
   * @description Create a new Trie with root node.
   */
  constructor() {
    this.trie = {};
  }

  /**
   * @description Add word to the trie (supported letters a-z).
   * @param {string} word String to be added to our trie.
   * Space O(n) - where n is word.length - at best we add 0 chars (word is already here), at worst word.length - when none of the leaves/branches exist.
   * Time O(n) - where n is word.length, iterate over string length.
   */
  addWord(word) {
    let currentNode = this.trie;

    for (let index = 0; index < word.length; index++) {
      const char = word[index];

      if (!currentNode[char]) currentNode[char] = {};

      currentNode = currentNode[char];
    }

    currentNode.hasWord = true;
  }

  /**
   * @description Search word in a trie (supported letters a-z and match all char '.').
   * @param {string} word String to search for
   * @param {Object} [node=this.trie] Node currently at, defaults to trie root.
   * @param {number} index Position of current node relative to search term.
   * @return {boolean} true mmatching value found in trie.
   * Space(n) - for stack (recursion).
   * Time O(m*n) - for worst case scenario (all '.') we have to traverse all leaves(m) to word.length(n) depth.
   */
  search(word, node = this.trie, index = 0) {
    const SPECIAL_CHAR = '.';

    const char = word[index];

    if (index === word.length - 1) {
      if (char === SPECIAL_CHAR) return Object.keys(node).some(key => node[key].hasWord);
      return !!node[char]?.hasWord;
    }

    if (char === SPECIAL_CHAR) return Object.keys(node).some(key => this.search(word, node[key], index + 1));
    if (char !== SPECIAL_CHAR) {
      if (!node[char]) return false;
      else return this.search(word, node[char], index + 1);
    }
  }
}
