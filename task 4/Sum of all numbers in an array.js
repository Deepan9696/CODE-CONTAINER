// Anonymous function
const sumArray = function(arr) {
    let sum = 0;
    arr.forEach(function(num) {
      sum += num;
    });
    return sum;
  };
  
  // IIFE
  const sum = (function(arr) {
    let sum = 0;
    arr.forEach(function(num) {
      sum += num;
    });
    return sum;
  })([1, 2, 3, 4, 5]);
  console.log(sum);

  