const fs = require('fs')
const [line1, line2] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

const xyz = line1.split(' ')
const nums = line2.split('')

function openCalculator(xyz, nums) {
	const set = new Set(xyz)
	let count = 0
	for (let num of nums) {
		if (!set.has(num)) {
			count += 1
			set.add(num)
		}
	}

	return count
}

console.log(openCalculator(xyz, nums))
