const fs = require('fs')
const list = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split(' ')
	.map(Number)

function GreatestOfThreeNumbers(list) {
	let [max1, max2, max3] = getThreeMaxNumbers(list[0], list[1], list[2])

	let min1 = max3
	let min2 = max2

	for (let i = 3; i < list.length; i++) {
		if (list[i] > max1) {
			max3 = max2
			max2 = max1
			max1 = list[i]
		} else if (list[i] > max2) {
			max3 = max2
			max2 = list[i]
		} else if (list[i] > max3) max3 = list[i]

		if (list[i] < min1) {
			min2 = min1
			min1 = list[i]
		} else if (list[i] < min2) min2 = list[i]
	}

	const maxProduct = max1 * max2 * max3
	const minProduct = min1 * min2 * max1

	return maxProduct >= minProduct
		? `${max1} ${max2} ${max3}`
		: `${min1} ${min2} ${max1}`
}

function getThreeMaxNumbers(num1, num2, num3) {
	if (num1 >= num2) {
		if (num2 >= num3) {
			return [num1, num2, num3]
		} else return [num1, num3, num2]
	} else if (num2 >= num3) {
		if (num1 > num3) {
			return [num2, num1, num3]
		} else return [num2, num3, num1]
	} else return [num3, num2, num1]
}

console.log(GreatestOfThreeNumbers(list))
