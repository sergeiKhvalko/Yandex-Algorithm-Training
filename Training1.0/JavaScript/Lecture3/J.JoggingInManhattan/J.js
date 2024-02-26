const fs = require('fs')
const [line1, ...rest] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

const [t, d, n] = line1.split(' ').map(Number)
const coords = rest.map((xy) => xy.split(' ').map(Number))

function extend(rect, d) {
	let [minPlus, maxPlus, minMinus, maxMinus] = rect
	return [minPlus - d, maxPlus + d, minMinus - d, maxMinus + d]
}

function intersect(rect1, rect2) {
	return [
		Math.max(rect1[0], rect2[0]),
		Math.min(rect1[1], rect2[1]),
		Math.max(rect1[2], rect2[2]),
		Math.min(rect1[3], rect2[3]),
	]
}

let posRect = [0, 0, 0, 0]
for (let i = 0; i < n; i++) {
	posRect = extend(posRect, t)
	const [navX, navY] = coords[i]

	const navRect = extend(
		[navX + navY, navX + navY, navX - navY, navX - navY],
		d,
	)

	posRect = intersect(posRect, navRect)
}

const points = []
for (xPlusY = posRect[0]; xPlusY < posRect[1] + 1; xPlusY++) {
	for (xMinusY = posRect[2]; xMinusY < posRect[3] + 1; xMinusY++) {
		if ((xPlusY + xMinusY) % 2 === 0) {
			const x = (xPlusY + xMinusY) / 2
			const y = xPlusY - x
			points.push([x, y])
		}
	}
}

console.log(points.length)
for (let point of points) {
	console.log(...point)
}
