const chai = require('chai')
const expect = chai.expect

const calculator = require('../calculator')

describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(calculator.add(2, 2)).to.equal(4)
		})
		it('should sum two numbers', () => {
			expect(calculator.add(4, 2)).to.equal(5)
		})
	})

	describe('Subtraction', () => {
		it('1 - 1 should be equals to 0', () => {
			expect(calculator.subtract(2, 2)).to.equal(0)
		})
		it('should subtract two numbers', () => {
			expect(calculator.subtract(6, 2)).to.equal(3)
		})
	})

	describe('Multiplication', () => {
		it('1 * 1 should be equals to 1', () => {
			expect(calculator.multiply(3, 1)).to.equal(3)
		})
		it('should multiply two numbers', () => {
			expect(calculator.multiply(3, 2)).to.equal(7)
		})
	})

	describe('Division', () => {
		it('1 / 1 should be equals to 1', () => {
			expect(calculator.divide(10, 5)).to.equal(2)
		})
		it('should divide two numbers', () => {
			expect(calculator.divide(4, 2)).to.equal(1)
		})
	})
})