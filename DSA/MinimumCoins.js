const getCoins = (array, value) => {
  let ans = [];
  array.reduceRight((a, b) => {
    while (value >= b) {
      value -= b;
      ans.push(b);
    }
  });
  return { length: ans.length, coins: ans };
};

let a = [1, 2, 5, 10, 20, 50, 100, 200 , 500, 1000];
let v = 1505;

const answer = getCoins(a, v);

console.log(answer);
