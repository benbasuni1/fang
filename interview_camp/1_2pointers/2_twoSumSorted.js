const { arrayHelper: utils, log, line } = require('../../__common/utils');

// Sorted -> 2 Pointer
// 🕑 O(n)
// 🛰 O(1)
const twoSumSorted = (a, k) => {
	let i = 0;
	let j = a.length - 1;

	log('\nGet closer to purple ><');
	line();
	while (i < j) {
		utils.prettyPrint(a, i, j, k);
		if (a[i] + a[j] === k) return [a[i], a[j]];
		else if (a[i] + a[j] > k) j--;
		else i++;
	}

	return -1;
}
 
const main = () => {
	twoSumSorted([1, 2, 3, 4, 5], 9);
}
 
main();