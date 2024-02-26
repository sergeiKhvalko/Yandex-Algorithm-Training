const fs = require('fs')
const [n, ...statements] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

function getHonestTurtles(n, statements) {
	let count = 0

	for (let item of new Set(statements)) {
		const [before, after] = item.split(' ').map(Number)
		if (before < 0 || after < 0) continue
		if (n - (before + after) === 1) count += 1
	}

	return count
}

console.log(getHonestTurtles(n, statements))
