/**
 * @typedef {Object} TreeNode
 * @description Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root Root of the binary tree.
 * @return {number[]} List of nodes for right side of tree, ordered top to bottom.
 * @summary Binary Tree Right Side View {@link https://leetcode.com/problems/binary-tree-right-side-view/}
 * @description Given a binary tree, return right side of it, ordered.
 * Space O(1) -
 * Time O(n) -
 */
const rightSideView = root => {
  let current = [];
  let next = [root];

  const answer = [];

  let node = null;
  while (next.length) {
    current = next;
    next = [];

    while (current.length) {
      node = current.shift();

      if (!node) continue;
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }

    if (!current.length && node) answer.push(node.val);
  }

  return answer;
};
