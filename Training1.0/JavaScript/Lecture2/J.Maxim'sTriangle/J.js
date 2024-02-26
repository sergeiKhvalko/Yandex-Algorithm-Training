const fs = require('fs')
const fileContent = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

function getInterval(source) {
	let [min, max] = [30.0, 4000.0]

	let n = +source[0]
	if (n < 2) return [min, max]

	let a = +source[1]
	let b, status

	for (let i = 2; i <= n; i++) {
		;[b, status] = source[i].split(' ')
		b = +b

		if (a === b) continue

		if (b < a && status === 'closer') {
			;[a, max] = lessAndCloser(a, b, max)
		} else if (b < a && status === 'further') {
			;[a, min] = lessAndFuther(a, b, min)
		} else if (b > a && status === 'closer') {
			;[a, min] = greaterAndCloser(a, b, min)
		} else if (b > a && status === 'further') {
			;[a, max] = greaterAndFuther(a, b, max)
		}
	}

	return `${min} ${max}`
}

function lessAndCloser(a, b, max) {
	let x = b + (a - b) / 2
	if (x < max) max = x
	return [b, max]
}

function lessAndFuther(a, b, min) {
	let x = a - (a - b) / 2
	if (x > min) min = x
	return [b, min]
}

function greaterAndCloser(a, b, min) {
	let x = b - (b - a) / 2
	if (x > min) min = x
	return [b, min]
}

function greaterAndFuther(a, b, max) {
	let x = a + (b - a) / 2
	if (x < max) max = x
	return [b, max]
}

console.log(getInterval(fileContent))
