const fs = require('fs')
const [line1, ...rest] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

const [n, m] = line1.split(' ').map(Number)
const aList = rest.slice(0, n)
const bList = rest.slice(n)

function getNumberOfCubes(aList, bList) {
	const hash = {}
	const allList = aList.concat(bList)

	for (let item of allList) {
		if (!hash[item]) {
			hash[item] = 0
		}
		hash[item] += 1
	}

	const allMatches = Object.keys(hash)
		.filter((k) => hash[k] === 2)
		.sort((a, b) => a - b)
	const aMatches = aList.filter((el) => hash[el] === 1).sort((a, b) => a - b)
	const bMatches = bList.filter((el) => hash[el] === 1).sort((a, b) => a - b)

	return `${allMatches.length}\n${allMatches.join(' ')}\n${
		aMatches.length
	}\n${aMatches.join(' ')}\n${bMatches.length}\n${bMatches.join(' ')}`
}

console.log(getNumberOfCubes(aList, bList))
