const removeFromArray = function(arr, ...args) {
	let newarr = []

	if (args.length === 1) {
		for (const element of arr) {
			if (element !== args[0]) newarr.push(element);
		}
		return newarr
	}

	for (let i = 1; i < args.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === args[i]) arr[j] = args[0]
		}
	}
	return removeFromArray(arr, args[0])
};

// Do not edit below this line
module.exports = removeFromArray;
