const repeatString = function(str, count) {
	if (count < 0) return 'ERROR'

	let repeatedstr = ''
	for (let i = 0; i < count; i++) {
		repeatedstr += str;
	}
	return repeatedstr
};

// Do not edit below this line
module.exports = repeatString;
