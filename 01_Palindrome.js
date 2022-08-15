const checkPalindrome = (str) => {
  let tempStr = str.split(" ").join("");
  tempStr = tempStr.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");

  // tempStr = tempStr.replace(/[^a-zA-Z ]/g, "");
  let newStr = "";
  console.log(tempStr);

  for (let i = tempStr.length - 1; i >= 0; i--) {
    newStr += tempStr[i];
  }
  if (tempStr == newStr) {
    return console.log(`it's palindrome`);
  } else {
    return console.log("Not a palindrome");
  }
};
checkPalindrome("1 eye for of 1 eye.");
