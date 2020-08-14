export const calculateDodgeChance = function(agi, int, modifiers = null) {
	if (modifiers) {
		let sum;
		for (let mod of modifiers) {
			sum += mod;
		}

		return (agi + int * 0.25) * 2 + sum;
	}
	return (agi + int * 0.25) * 2;
};
