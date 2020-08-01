/**
 * @typedef {Object} TreeNode
 * @description Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let max = Number.MIN_SAFE_INTEGER;

const maxValue = node => {
  if (node === null) return 0;

  let leftValue = Math.max(maxValue(node.left), 0);
  let rightValue = Math.max(maxValue(node.right), 0);

  max = Math.max(max, node.val + leftValue + rightValue);

  return node.val + Math.max(leftValue, rightValue);
};

/**
 * @param {TreeNode} root Head of the binary tree.
 * @return {max} Maximum path sum.
 * @summary Binary Tree Maximum Path Sum {@link https://leetcode.com/problems/binary-tree-maximum-path-sum/}
 * @description Given a non-empty binary tree, find the maximum path sum
 * Space O(n) - where n is number of nodes.
 * Time O(k) - where k is height of tree.
 */
const maxPathSum = root => {
  maxValue(root);

  return max;
};
