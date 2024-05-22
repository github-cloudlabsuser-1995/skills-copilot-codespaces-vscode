const assert = require('assert');
const Calculator = require('./Calculator');
const { describe } = require('mocha');

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it('should add two numbers correctly', function() {
        assert.equal(calculator.add(1, 2), 3);
    });

    it('should subtract two numbers correctly', function() {
        assert.equal(calculator.subtract(5, 2), 3);
    });

    it('should multiply two numbers correctly', function() {
        assert.equal(calculator.multiply(3, 2), 6);
    });

    it('should divide two numbers correctly', function() {
        assert.equal(calculator.divide(6, 2), 3);
    });

    it('should throw an error when dividing by zero', function() {
        assert.throws(() => calculator.divide(6, 0), Error, "Cannot divide by zero");
    });
});