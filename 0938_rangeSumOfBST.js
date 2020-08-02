/**
 * @typedef {Object} TreeNode
 * @description Definition for a binary tree node.
 * @example
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} node Node of a binary tree.
 * @param {nubmer} lower Inclusive lower bound for the sum.
 * @param {nubmer} upper Inclusive upper bound for the sum.
 * @param {nubmer} [sum=0] Total sum gathered so far.
 * @return {number} Sum between values in the BST.
 * @summary Range Sum of BST {@link https://leetcode.com/problems/range-sum-of-bst/}
 * @description Given the root node of a binary search tree, return sum between two values (inclusive).
 * Space O(h) - Height of the tree.
 * Time O(n) - Number of nodes in the tree.
 */
const rangeSumBST = (node, lower, upper, sum = 0) => {
  if (node === null) return 0;

  if (node.val >= lower && node.val <= upper) sum += node.val;

  if (node.val > lower) sum += rangeSumBST(node.left, lower, upper);
  if (node.val < upper) sum += rangeSumBST(node.right, lower, upper);

  return sum;
};
