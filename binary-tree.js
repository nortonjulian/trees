/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) {
      return 0; // If the tree is empty, the depth is 0
    }

    function traverse(node) {
      if (!node.left && !node.right) {
        return 1; // If the node is a leaf, the depth is 1
      }

      let leftDepth = node.left ? traverse(node.left) : Infinity; // Calculate the depth of the left subtree
      let rightDepth = node.right ? traverse(node.right) : Infinity; // Calculate the depth of the right subtree


      return 1 + Math.min(leftDepth, rightDepth)
    }

    return traverse(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0; // If the tree is empty, the depth is 0
    }

    function traverse(node) {
      if (!node.left && !node.right) {
        return 1; // If the node is a leaf, the depth is 1
      }

      let leftDepth = node.left ? traverse(node.left) : 0; // Calculate the depth of the left subtree
      let rightDepth = node.right ? traverse(node.right) : 0; // Calculate the depth of the right subtree

      return 1+ Math.max(leftDepth, rightDepth)
    }

    return traverse(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) {
      return 0; // If the tree is empty, the maximum sum is 0
    }

    let maxSum = -Infinity

    function traverse(node) {
      if (!node) {
        return 0;
      }

      let leftSum = Math.max(traverse(node.left), 0); // Calculate the maximum sum of the left subtree
      let rightSum = Math.max(traverse(node.right), 0); // Calculate the maximum sum of the right subtree

      let currentSum = node.val + leftSum + rightSum; // Calculate the sum of the current path

      maxSum = Math.max(maxSum, currentSum); // Update the maximum sum if the current sum is greater

      return node.val + Math.max(leftSum, rightSum); // Return the maximum sum including the current node
    }

    traverse(this.root); // Start the traversal from the root node

    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) {
      return null; // If the tree is empty, return null
    }

    let result = null;

    function traverse(node) {
      if (!node) {
        return;
      }

      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      traverse(node.left); // Traverse the left subtree

      traverse(node.right); // Traverse the right subtree
    }

    traverse(this.root); // Start the traversal from the root node

    return result;
  }
}


module.exports = { BinaryTree, BinaryTreeNode };
