//slice 0 inc 5 yani last not included
//str== str.slice(1,str.lemgth)
const isPanindrome = (str) => {
  // base condition
  if (str.length <= 1) return true;
  let lastindex = str.length - 1;
  if (str[0] != str[lastindex]) {
    return false;
  }
  return isPanindrome(str.slice(1, lastindex));
};
