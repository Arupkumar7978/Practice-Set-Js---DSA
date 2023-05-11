const person = {
  name: 'Arup',
  title: 'Padhi',
  getFullName: function (homwTowm) {
    console.log(this.name + ' ' + this.title + ' From ' + homwTowm);
  },
};

const name = {
  name: 'Ashok',
  title: 'Padhi',
};
const nam2 = {
  name: 'Shivani',
  title: 'Padhi',
};

person.getFullName.call(name, 'Bengaluru');
person.getFullName.apply(name, ['Hyderabad']);

const func = person.getFullName.bind(nam2, 'Rayagada');

func();

// Some Examples of Apply Method :

let arr = [1, 2, 3];
let alpha = ['a', 'b', 'c'];
let myName = 'Arup';

arr.push.apply(arr, alpha);
console.log(arr);

let numbers = [67, 56, 89, 34, 54, 93, 32];

let { min, max } = Math;
console.log(min.apply(null, numbers));
console.log(max.apply(null, numbers));

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Pizza(name, price) {
  Product.call(this, name, price);
  this.catagory = 'pizza';
}

function Toy(name, price) {
  Product.apply(this, [name, price]);
  this.catagory = 'toy';
}

let pizza = new Pizza('margherita', 2000);
let toy = new Toy('Car', 500);

console.log(pizza);
console.log(toy);

function getDetails(...args) {
  console.log(this.name + ' ' + this.title + ' From ' + args);
}

const myObj = {
  name: 'Subham',
  title: 'Panda',
};

getDetails.apply(myObj, ['Gunupur', 'Rayagada']);
