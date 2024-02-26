const fs = require('fs')
const [n, ...coords] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

function getMinimumNumberOfShots(n, coords) {
	const set = new Set()
	for (let xy of coords) {
		set.add(xy.split(' ')[0])
	}

	return set.size
}

console.log(getMinimumNumberOfShots(n, coords))
