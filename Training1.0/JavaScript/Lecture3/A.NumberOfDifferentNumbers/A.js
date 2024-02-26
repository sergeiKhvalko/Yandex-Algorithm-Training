const fs = require('fs')
const list = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split(' ')

function getDifferentNumbers(list) {
	const hash = {}
	for (let num of list) {
		hash[num] = true
	}

	return Object.keys(hash).length
}

console.log(getDifferentNumbers(list))
