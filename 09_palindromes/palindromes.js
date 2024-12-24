const palindromes = function (str) {
	str = str.toLowerCase()
	let arr = str.split('')
	let processed = arr.reduce((a, b) => {
		if (('A' <= b && b <= 'Z') || 
			('a' <= b && b <= 'z') || 
			('0' <= b && b <= '9')
		) return a+b
		else return a
	}, '')
	for (let i = 0; i < Math.floor(processed.length/2); i++) {
		if (processed[i] != processed[processed.length - 1 - i]) return false
	}
	return true
};

// Do not edit below this line
module.exports = palindromes;
