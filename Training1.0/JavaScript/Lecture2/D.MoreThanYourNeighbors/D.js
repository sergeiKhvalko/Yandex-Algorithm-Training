const fs = require('fs')
const list = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.split(' ')
	.map(Number)

function getMoreThanYourNeighbors(list) {
	let count = 0

	for (let i = 1; i < list.length - 1; i++) {
		if (list[i] > list[i - 1] && list[i] > list[i + 1]) count += 1
	}
	return count
}

console.log(getMoreThanYourNeighbors(list))
