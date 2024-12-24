const findTheOldest = function(ppl) {
	return ppl.reduce((a, b) => {
		if (((b.yearOfDeath??= new Date().getFullYear()) - b.yearOfBirth) > (a.yearOfDeath??= new Date().getFullYear()) - a.yearOfBirth) {
			return b
		}
		else return a
	}, ppl[0])
};

// Do not edit below this line
module.exports = findTheOldest;
