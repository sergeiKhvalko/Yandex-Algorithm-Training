const fs = require('fs')
const [n, ...rest] = fs
	.readFileSync(__dirname + '/input.txt', 'utf-8')
	.trim()
	.split('\n')

function polyglots(n, languages) {
	const allLangs = languages.filter((lang) => isNaN(lang))
	const set = new Set(allLangs)
	const hash = {}

	for (let lang of allLangs) {
		if (!hash[lang]) {
			hash[lang] = 0
		}
		hash[lang] += 1
	}

	const langsAllStudents = Object.keys(hash).filter((lang) => hash[lang] === n)
	return `${langsAllStudents.length}\n${langsAllStudents.join('\n')}\n${
		set.size
	}\n${Array.from(set).join('\n')}`
}

console.log(polyglots(+n, rest))
