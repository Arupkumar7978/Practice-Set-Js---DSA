const checkValidParenthesis = (str) => {
  if (str === null || str === '')
    return 'Empty String can not acceptable';

  let arr = [];
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      arr.push(str[i]);
    } else if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
      if (arr.length === 0) return 'Not Valid';
      arr.pop();
    }
  }
  return arr.length === 0 ? 'Valid' : 'Not Valid';
};

const str1 = '{[()]}';

console.log(checkValidParenthesis(str1));
