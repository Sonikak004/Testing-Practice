//tasks 1

function stringLength(string) {
  if (typeof string !== 'string') {
    throw new Error('Argument must be a string');
  }

    const length = string.length;

    if(length < 1 || length > 10){
      console.log('string must be between 1 and 10 characters long')
    }  

    return length;
  }

  // task 2

  function reverseString(string) {

    return string.split('').reverse().join('');
  }

  //task 3

  class Calculator {

    add(a, b) {
      return a + b;
    }
    
    subtract(a, b) {
      return a - b;
    }
    
    divide(a, b) {
      return a / b;
    }
    
    multiply(a, b) {
      return a * b;
    }
  }

  module.exports = { stringLength, reverseString, Calculator};