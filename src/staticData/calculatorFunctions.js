export const calculateDodgeChance = function(agi, int, mods = null) {
	if (mods) {
		const sum = mods.reduce((acc, curr) => acc + curr);
		return ((agi + int * 0.25) * 0.8 + sum).toFixed(2);
	}
	return ((agi + int * 0.25) * 0.8).toFixed(2);
};

export const calculateDefenseRating = function(str, armor, mods = null) {
	if (mods) {
		const sum = mods.reduce((acc, curr) => acc + curr);
		return (str * 1.2 + armor + sum).toFixed(2);
	}
	return (str * 1.2 + armor).toFixed(2);
};

export const calculateHealthPoints = function(vit, str, mods = null) {
	if (mods) {
		const sum = mods.reduce((acc, curr) => acc + curr);
		return ((vit * 1.5 + str * 0.25 + sum) * 10).toFixed(2);
	}
	return ((vit * 1.5 + str * 0.25) * 10).toFixed(2);
};

export const calculateAttackPower = function(mainStat, mods = null) {
	if (mods) {
		const sum = mods.reduce((acc, curr) => acc + curr);
		return (mainStat * 7.5 + sum).toFixed(2);
	}
	return (mainStat * 7.5).toFixed(2);
};
