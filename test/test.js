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

describe('prime factor of 2', function () {
    it('should be a list containg 2', function () {
        actual = primeFactors.generate(2)

        expect(actual).to.eql([2])
    })
})

describe('prime factor of 4', function () {
    it('should be a list containg 2, 2', function () {
        actual = primeFactors.generate(4)

        expect(actual).to.eql([2, 2])
    })
})

describe('prime factor of 6', function () {
    it('should be a list containg 2, 3', function () {
        actual = primeFactors.generate(6)

        expect(actual).to.eql([2, 3])
    })
})

describe('prime factor of 8', function () {
    it('should be a list containg 2, 2, 2', function () {
        actual = primeFactors.generate(8)

        expect(actual).to.eql([2, 2, 2])
    })
})

describe('prime factor of 9', function () {
    it('should be a list containg 3, 3', function () {
        actual = primeFactors.generate(9)

        expect(actual).to.eql([3, 3])
    })
})

describe('prime factor of 15', function () {
    it('should be a list containg 3, 5', function () {
        actual = primeFactors.generate(15)

        expect(actual).to.eql([3, 5])
    })
})

describe('prime factor of 126', function () {
    it('should be a list containg 2, 3, 3, 7', function () {
        actual = primeFactors.generate(126)

        expect(actual).to.eql([2, 3, 3, 7])
    })
})
