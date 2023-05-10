const person = {
  name: 'Arup',
  title: 'Padhi',
  getFullName: function (homwTowm) {
    console.log(this.name + ' ' + this.title + " From " + homwTowm);
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

person.getFullName.call(name , "Bengaluru")
person.getFullName.apply(name , ["Hyderabad"]);


const func = person.getFullName.bind(nam2 , "Rayagada")

func()