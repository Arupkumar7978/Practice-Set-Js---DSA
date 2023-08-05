/* 
NOTE :
1. Generally , it does not return's anything in case of clear , but i have return true here for test purpose . 
*/

function Stack() {
  let items = [];
  let top = 0;

  this.push = function (element) {
    items[top++] = element;
  };
  this.pop = function () {
    return items[--top];
  };
  this.peek = function () {
    return items[top - 1];
  };
  this.isEmpty = function () {
    return top === 0;
  };
  this.clear = function () {
    top = 0;
    return true;
  };
  this.size = function () {
    return top;
  };
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log('pop:', stack.pop());
console.log('peek:', stack.peek());
console.log('isEmpty:', stack.isEmpty());
console.log('size:', stack.size());
console.log('clear:', stack.clear());

class StackClass {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  clear() {
    this.items.length = 0;
    return true;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const sc = new StackClass();
sc.push(1);
sc.push(2);
sc.push(3);
sc.push(4);

console.log('pop:', sc.pop());
console.log('peek:', sc.peek());
console.log('isEmpty:', sc.isEmpty());
console.log('size:', sc.size());
console.log('clear:', sc.clear());
