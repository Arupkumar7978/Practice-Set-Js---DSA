//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

class Node {
  data;
  left;
  right;
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  #insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else this.#insertNode(node.left, newNode);
      return;
    }
    if (node.right === null) {
      node.right = newNode;
    } else this.#insertNode(node.right, newNode);
  }
  insert(data) {
    // create a New Node
    const newNode = new Node(data);

    // check if root is null or not
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // if root is not null then add it to left / right accordingly
    this.#insertNode(this.root, newNode);
  }

  // get the root node
  getRootNode() {
    if (this.root !== null) {
      return this.root;
    } else return null;
  }

  // Depth First Search - [DFS]

  // root --> left --> right
  preOrderTraverse(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderTraverse(node.left);
      this.preOrderTraverse(node.right);
    }
  }
  // left --> right --> root
  postorderTraverse(node) {
    if (node !== null) {
      this.postorderTraverse(node.left);
      this.postorderTraverse(node.right);
      console.log(node.data);
    }
  }
  // left --> root --> right
  inorderTraverse(node) {
    if (node !== null) {
      this.inorderTraverse(node.left);
      console.log(node.data);
      this.inorderTraverse(node.right);
    }
  }

  BFS(node) {
    if (node === null) return;
    const queue = [];
    const result = [];

    queue.push(node);
    debugger;
    while (queue.length) {
      const popNode = queue.shift();
      BFS_STACK.push(popNode.data);
      if (popNode.left) queue.push(popNode.left);
      if (popNode.right) queue.push(popNode.right);
    }

    console.log(result.join(' --> '));
  }
}

const BST = new BinaryTree();

BST.insert(15);
BST.insert(10);
BST.insert(25);
BST.insert(7);
BST.insert(13);
BST.insert(22);
BST.insert(27);
BST.insert(5);
BST.insert(9);
BST.insert(17);


const root = BST.getRootNode();

// console.log(root);

// BST.preOrderTraverse(root);

BST.BFS(root);




//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17


/*  
store result --> [15,10 ,25 , 7 , 13 , 22 , 27 , 5 , 9 , 17]

Take an temp queue -->  [] 

queue.push(root.data)

while(queue.length) 
    popValue = queue.shift();

    push to result array 

    popValue.left --> push to queue
    popValue.right --> push to queue

    else continue 

*/
