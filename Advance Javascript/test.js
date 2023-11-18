const arr = [400, 1, 200, 3, 2, 4];

let count = 0;

for (let i of arr) {
  if (arr.includes(i - 1 || i + 1)) {
    count++;
  }
}

// console.log(count);

// let leftSubTreeCount = 0, rightSubTreeCount = 0; totalHeight = 1;
// if (leftNode) {
//     if (leftNode.val) {
//         leftSubTreeCount++;
//         (leftNode.left || leftNode.right) && findMaxNode(leftNode.left, leftNode.right);
//     }
// }
//     if (rightNode) {
//         if (rightNode.val) {
//             rightSubTreeCount++;
//             (rightNode.left || rightNode.right) && findMaxNode(rightNode.left, rightNode.right);
//         }
//     }

//     return totalHeight += Number(Math.max(leftSubTreeCount ,rightSubTreeCount));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const key = [3, 6];

key.forEach((k,i)=> {
    
})
