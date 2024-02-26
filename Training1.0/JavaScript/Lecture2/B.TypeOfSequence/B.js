const fs = require('fs')
const list = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.split('\n')
	.map(Number)

function typeOfSequence(list) {
	const set = new Set()
	let prev = list[0]

	for (let i = 1; i < list.length; i++) {
		if (list[i] === -2 * 10 ** 9) break

		if (list[i] === prev) {
			set.add('CONSTANT')
		} else if (list[i] > prev) {
			set.add('ASCENDING')
		} else if (list[i] < prev) {
			set.add('DESCENDING')
		}
		prev = list[i]
	}

	const res = Array.from(set)
	if (res.length === 1) {
		return res[0]
	} else if (res.length === 2 && res.includes('CONSTANT')) {
		return res.includes('ASCENDING') ? 'WEAKLY ASCENDING' : 'WEAKLY DESCENDING'
	} else {
		return 'RANDOM'
	}
}

console.log(typeOfSequence(list))
