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
 * Iterator over a binary search tree
 * @summary Binary Search Tree Iterator {@link https://leetcode.com/problems/binary-search-tree-iterator/}
 * @description Given a root node of BST, implement an iterator that returns smallest available number.
 */
class BSTIterator {
  constructor(root) {
    this.node = root;
    this.stack = [];
  }

  /**
   * Space O(1) , Time O(1)
   */
  hasNext() {
    return this.node || this.stack.length;
  }

  /**
   * Space O(n) - worst case stack will have all nodes.
   * Time O(n) - worst case iterate over all nodes.
   */
  next() {
    while (this.node) {
      this.stack.push(this.node);
      this.node = this.node.left;
    }

    this.node = this.stack.pop();
    const result = this.node.val;
    this.node = this.node.right;

    return result;
  }
}
