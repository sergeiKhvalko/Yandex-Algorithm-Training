const fs = require('fs')
const [...fileContent] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

const text = fileContent.join(' ').split(' ')
function getWordCount(text) {
	if (text.length === 1 && text[0] === '') return 0
	const hash = {}

	for (let word of text) {
		hash[word] = true
	}

	return Object.keys(hash).length
}

console.log(getWordCount(text))
