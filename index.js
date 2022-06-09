const mocha = require('mocha');
const chai = require('chai');
const factorial = require('./factorial');

mocha.describe('Test factorials', () => {
    mocha.it('should equal 5', () => {
      chai.expect(5).to.equal(factorial.findFactorial(120));
    });
    mocha.it('should equal 0', () => {
      chai.expect(0).to.equal(factorial.findFactorial(110));
    });
  });

/*
mocha.describe('Testing factorials', () => {
    mocha.it('should equal 5', () => {
        chai.expect(factorial.findFactorial(120)).to.equal(5);
    });
    mocha.it('should equal 0', () => {
        chai.expect(factorial.findFactorial(110)).to.equal(0);
    });
});
*/