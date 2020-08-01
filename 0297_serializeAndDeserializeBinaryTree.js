/**
 * @typedef {Object} TreeNode
 * @description Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @summary Serialize and Deserialize Binary Tree {@link https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/}
 * @description Write functions to serialize and deserialize binary tree.
 * Space O(n) - For both serialize and deserialize, we store every node.
 * Time O(n) - For both serialize and deserialize, we traverse every node.
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const current = queue.shift();

    if (current === null) result.push('null');
    else {
      result.push(current.val);

      queue.push(current.left);
      queue.push(current.right);
    }
  }

  while (result[result.length - 1] === 'null') {
    result.pop();
  }

  return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = string => {
  if (string === '') return null;

  const treeData = string.split(',');

  const root = new TreeNode(+treeData.shift());
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (treeData.length) {
      const leftData = treeData.shift();

      if (leftData !== 'null') {
        const left = new TreeNode(+leftData);
        current.left = left;
        queue.push(current.left);
      }
    }

    if (treeData.length) {
      const rightData = treeData.shift();

      if (rightData !== 'null') {
        const right = new TreeNode(+rightData);
        current.right = right;
        queue.push(current.right);
      }
    }
  }
  return root;
};
