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
 * @param {TreeNode} root Root of a binary tree.
 * @param {number} target Target value to find.
 * @return {number} Value of a node closest to target
 * @summary Closest Binary Search Tree Value {@link https://leetcode.com/problems/closest-binary-search-tree-value/}
 * @description Given a binary tree and target, find node with closest value.
 * Space O(1) - Constant number of variables created.
 * Time O(h) - for height of the tree.
 */
const closestValue = (root, target) => {
  let node = root;
  closest = root.val;

  while (node !== null) {
    if (Math.abs(node.val - target) < Math.abs(closest - target)) closest = node.val;

    node = target > node.val ? node.right : node.left;
  }

  return closest;
};
