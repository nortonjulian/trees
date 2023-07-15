/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0; // If the tree is empty, return 0
    }

    let sum = 0;

    function traverse(node) {
      sum += node.val; // Add the current node's value to the sum

      // Recursively traverse all children of the current node
      for (let child of node.children) {
        traverse(child)
      }
    }

    traverse(this.root); // Start the traversal from the root node

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0; // If the tree is empty, return 0
    }

    let count = 0;

    function traverse(node) {
      if (node.val % 2 === 0) {
        count++; // If the current node's value is even, increment the count
      }

      // Recursively traverse all children of the current node
      for (let child of node.children) {
        traverse(child)
      }
    }

    traverse(this.root); // Start the traversal from the root node

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0; // If the tree is empty, return 0
    }

    let count = 0;

    function traverse(node) {
      if (node.val > lowerBound) {
        count++; // If the current node's value is greater than lowerBound, increment the count
      }

      // Recursively traverse all children of the current node
      for (let child of node.children) {
        traverse(child);
      }
    }

    traverse(this.root); // Start the traversal from the root node

    return count;
  }
}


module.exports = { Tree, TreeNode };
