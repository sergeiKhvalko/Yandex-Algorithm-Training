const fs = require('fs')
let [n, list] = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n')

list = list.trim().split(' ')

function symmetricSequence(n, list) {
	const reversed = list.slice().reverse()
	let count = 0

	while (count < n) {
		if (isPalindrom(list.slice(count), reversed.slice(0, n - count))) {
			break
		}
		count += 1
	}

	if (count) count += `\n${reversed.slice(n - count).join(' ')}`

	return count
}

function isPalindrom(original, reversed) {
	for (let i in original) {
		if (original[i] !== reversed[i]) return false
	}
	return true
}

console.log(symmetricSequence(+n, list))
