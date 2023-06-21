

const { stringLength, reverseString, Calculator} = require("./tasks.js");

// task 1

describe('stringLength', () => {
    test('the string length is valid', () => {
        expect(stringLength('hello')).toBe(5)
    })

    test('the string is more than 1 and less than 10', () => {
        expect(stringLength('happy')).toBe(5)
    })

    test('throws an error if it is a non-string', () => {
        expect(() => stringLength(234)).toThrow('Argument must be a string');
      });
    })

//Task 2

describe('reverseString', () => {
    test('the string is reversed', () => {
        expect(reverseString('hello')).toBe('olleh')
    })
})

//Task 3

describe('Calculator', () => {
    let calculator;
    
    beforeEach(() => {
      calculator = new Calculator();
    });
    
    describe('add', () => {
      test('adds two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });

      test('accepts two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
        
    });
    
    describe('subtract', () => {

      test('subtracks two numbers', () => {
          expect(calculator.subtract(3, 2)).toBe(1);
        });
  
        test('accepts two numbers', () => {
          expect(calculator.subtract(3, 2)).toBe(1);
        });

    });
    
    describe('divide', () => {
      test('divides two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3);
      });

      test('accepts two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3);
      });
      
    });
    
    describe('multiply', () => {
      test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });

      test('accepts two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });

    });
  });