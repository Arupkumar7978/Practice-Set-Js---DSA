const obj = {
  j: 0,
};

const objProperty = new Proxy(obj, {
  get: (target, property) => {
    if (property === 'i') {
      target[property] = target[property] + 1;
      return target[property];
    }
  },
  set: (target, property, value) => {
    if (property === 'i' && value >= 10) {
      target[property] = value;
    } else {
      throw RangeError(
        'Property value should be more or equal to 10.'
      );
    }
  },
});

console.log(obj.j);
