var expect = require('chai').expect
var addTwoNumbers = require('../src/addTwoNumbers')

describe('test adds two numbers', function () {
    it('should add two numbers together', function () {
        const x = 1
        const y = 2
        
        result = addTwoNumbers(x, y)

        expect(result).to.be.equal(3)
    })
})