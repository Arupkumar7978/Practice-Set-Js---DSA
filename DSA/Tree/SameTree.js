const BinaryTree = require('./TreeImpl');

class HybridBinaryTree extends BinaryTree {
  constructor() {
    super();
  }
}

HybridBinaryTree.prototype.isEqual = function isSameTree(targetTree) {
    const sourceTree = this;
    window.sourceTree = this;
    console.log((sourceTree));

  if (!sourceTree && !targetTree) return true;
  if (!sourceTree || !targetTree) return false;
  if (sourceTree.data == targetTree.data) {
    return (
      isSameTree(sourceTree.left, targetTree.left) &&
      isSameTree(sourceTree.right, targetTree.right)
    );
  }
  return false;
};

const BST1 = new HybridBinaryTree();

BST1.insert(1);
BST1.insert(2);
BST1.insert(3);

const BST2 = new HybridBinaryTree();

BST2.insert(1);
BST2.insert(2);
BST2.insert(3);

console.log('BST1 is Equals BST2 --> ', BST1.isEqual(BST2));
