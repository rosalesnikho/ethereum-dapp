
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())

class Car {

	park() {
		return "Stopped"
	}

	dirve() {
		return "Vroom"
	}
}

const car = new Car();

describe('Car', () => {

	it('Car Park', () => {

		assert.strictEqual(car.park(), 'Stopped');
	})

	it('Car Drive', () => {
		assert.strictEqual(car.dirve(), 'Vroom')
	})
})

