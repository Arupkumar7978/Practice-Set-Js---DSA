// Input: num1 = "456", num2 = "77"
// Output: "533"

function addString_BigInt(num1, num2) {
  //   num1 = BigInt(num1);
  //   num2 = BigInt(num2);
  //   let ans = String(num1 + num2);
  //   return ans.slice(0, ans.length);
  let ans = String(+num1 + +num2);
  return ans;
}

console.log(addString_BigInt('9333852702227987', '85731737104263'));
