const fs = require('fs')
const [genome1, genome2] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

function getGenomeProximity(genome1, genome2) {
	const hash = {}
	for (let i = 0; i < genome2.length - 1; i++) {
		hash[genome2[i] + genome2[i + 1]] = true
	}

	let count = 0
	for (let i = 0; i < genome1.length - 1; i++) {
		if (hash[genome1[i] + genome1[i + 1]]) count += 1
	}

	return count
}

console.log(getGenomeProximity(genome1, genome2))
