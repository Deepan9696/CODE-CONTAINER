// Anonymous function
const getPalindromes = function(arr) {
    const palindromeArr = arr.filter(function(str) {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
    return palindromeArr;
  };
  
  // IIFE
  const palindromeArr = (function(arr) {
    return arr.filter(function(str) {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
  })(["hello", "racecar", "world", "deified"]);
  console.log(palindromeArr);
  