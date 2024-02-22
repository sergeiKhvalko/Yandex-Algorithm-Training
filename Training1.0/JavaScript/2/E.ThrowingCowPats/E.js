const fs = require('fs')
let [n, list] = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n')

list = list.split(' ').map(Number)

function throwingCowPats(list) {
	let winner = list[0]
	let winIndex = 0

	for (let i = 1; i < list.length; i++) {
		if (list[i] > winner) {
			winner = list[i]
			winIndex = i
		}
	}

	let candidate = 0

	for (let i = winIndex + 1; i < list.length - 1; i++) {
		if (list[i] > candidate && list[i] % 10 === 5 && list[i] > list[i + 1]) {
			candidate = list[i]
		}
	}

	return candidate ? list.filter((el) => el > candidate).length + 1 : candidate
}

console.log(throwingCowPats(list))
