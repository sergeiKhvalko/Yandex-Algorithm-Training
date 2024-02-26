const fs = require('fs')
const fileContent = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.split('\n')

const n = +fileContent[0]
const numbers = fileContent[1].split(' ').map(Number)
const x = +fileContent[2]

function getNearestNumber(numbers, x) {
	let nearest = numbers[0]
	let difference = Infinity

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] <= x) {
			if (x - numbers[i] < difference) {
				difference = x - numbers[i]
				nearest = numbers[i]
			}
		} else {
			if (numbers[i] - x < difference) {
				difference = numbers[i] - x
				nearest = numbers[i]
			}
		}
	}

	return nearest
}

console.log(getNearestNumber(numbers, x))
