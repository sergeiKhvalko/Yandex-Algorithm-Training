const fs = require('fs')
const fileContent = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

const [line1, line2] = fileContent.map((item) => item.split(' ').map(Number))

function getIntersectionOfSets(line1, line2) {
	const hash = {}
	const list = line1.concat(line2)
	for (let item of list) {
		if (!hash[item]) {
			hash[item] = 0
		}
		hash[item] += 1
	}

	return Object.keys(hash)
		.filter((k) => hash[k] === 2)
		.join(' ')
}

console.log(getIntersectionOfSets(line1, line2))
