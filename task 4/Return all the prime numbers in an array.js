// Anonymous function
const getPrimeNumbers = function(arr) {
    const primeArr = arr.filter(function(num) {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    return primeArr;
  };
  
  // IIFE
  const primeArr = (function(arr) {
    return arr.filter(function(num) {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primeArr);

  