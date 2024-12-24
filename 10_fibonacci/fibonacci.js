const fibonacci = function(n) {
	n = +n
	if (!Number.isInteger(n) || n < 0) return 'OOPS'

	let perv = 0
	let curr = 1
	for (let i=0; i < n; i++) {
		let temp = curr
		curr = curr + perv
		perv = temp
	}
	return perv
};

// Do not edit below this line
module.exports = fibonacci;
