const fs = require('fs')
const [line1, ...rest] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

const [rows, cols, mines] = line1.split(' ').map(Number)
const coords = rest.map((el) => el.split(' '))

function getMinSwipperField(rows, cols, mines, coords = []) {
	const field = new Array(rows).fill('').map(() => new Array(cols).fill('0'))

	for (let [x, y] of coords) {
		field[x - 1][y - 1] = '*'
	}

	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			if (field[i][j] === '0') {
				field[i][j] = findMines(field, i, j)
			}
		}
	}

	for (let item of field) {
		console.log(...item)
	}
}

function findMines(arr, row, col) {
	let count = 0

	if (arr[row][col - 1] === '*') count += 1
	if (arr[row][col + 1] === '*') count += 1
	if (arr[row - 1]) {
		if (arr[row - 1][col - 1] === '*') count += 1
		if (arr[row - 1][col] === '*') count += 1
		if (arr[row - 1][col + 1] === '*') count += 1
	}
	if (arr[row + 1]) {
		if (arr[row + 1][col - 1] === '*') count += 1
		if (arr[row + 1][col] === '*') count += 1
		if (arr[row + 1][col + 1] === '*') count += 1
	}

	return count
}

getMinSwipperField(rows, cols, mines, coords)
