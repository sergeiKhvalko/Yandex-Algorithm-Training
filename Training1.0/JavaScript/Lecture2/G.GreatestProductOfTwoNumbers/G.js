const fs = require('fs')
const list = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split(' ')
	.map(Number)

function getGreatestProduct(list) {
	let max1 = Math.max(list[0], list[1])
	let max2 = Math.min(list[0], list[1])

	let min1 = max2
	let min2 = max1

	for (let i = 2; i < list.length; i++) {
		if (list[i] > max1) {
			max2 = max1
			max1 = list[i]
		} else if (list[i] > max2) max2 = list[i]

		if (list[i] < min1) {
			min2 = min1
			min1 = list[i]
		} else if (list[i] < min2) min2 = list[i]
	}

	const maxProduct = max1 * max2
	const minProduct = min1 * min2

	return maxProduct >= minProduct ? `${max2} ${max1}` : `${min1} ${min2}`
}

console.log(getGreatestProduct(list))
