var expect = require('chai').expect
var addTwoNumbers = require('../src/addTwoNumbers')
var primeFactors = require('../src/primeFactors')

describe('test adds two numbers', function () {
    it('should add two numbers together', function () {
        const x = 1
        const y = 2
        
        result = addTwoNumbers(x, y)

        expect(result).to.be.equal(3)
    })
})

describe('prime factor of 1', function () {
    it('should be an empty list', function () {
        actual = primeFactors.generate(1)

        expect(actual).to.be.empty
    })
})