// Anonymous function
const convertToTitleCaps = function(arr) {
    const titleCapsArr = arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    return titleCapsArr;
  };
  
  // IIFE
  const titleCapsArr = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  })(["hello world", "goodbye moon"]);
  console.log(titleCapsArr);

  