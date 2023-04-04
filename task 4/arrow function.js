//Print odd numbers in an array

const printOddNumbers = arr => {
    arr.filter(num => num % 2 !== 0)
      .forEach(oddNum => console.log(oddNum));
  };

  
  //Convert all the strings to title caps in a string array

  const convertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };

  //Sum of all numbers in an array

  const sumArray = arr => {
    return arr.reduce((total, num) => total + num, 0);
  };

  
 // Return all the prime numbers in an array
 const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimeNumbers = arr => {
    return arr.filter(num => isPrime(num));
  };

  
  //Return all the palindromes in an array

  const isPalindrome = str => {
    return str === str.split('').reverse().join('');
  };
  
  const getPalindromes = arr => {
    return arr.filter(str => isPalindrome(str));
  };
  