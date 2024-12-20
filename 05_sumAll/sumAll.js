const sumAll = function(a, b) {
	if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
	if (a < 0 || b < 0) return 'ERROR'
	if (a > b) b = [a, a = b][0];
	return ((b+1)*(b)-(a-1)*(a)) / 2
};

// Do not edit below this line
module.exports = sumAll;
