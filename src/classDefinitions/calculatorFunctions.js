export class calculators {
	static calculateDodgeChance(agi, int, mods = null) {
		if (mods) {
			const sum = mods.reduce((acc, curr) => acc + curr);
			return Number(((agi + int * 0.25) * 0.8 + sum).toFixed(2));
		}
		return Number(((agi + int * 0.25) * 0.8).toFixed(2));
	}

	static calculateDefenseRating(str, armor, mods = null) {
		if (mods) {
			const sum = mods.reduce((acc, curr) => acc + curr);
			return Number((str * 1.2 + armor + sum).toFixed(2));
		}
		return Number((str * 1.2 + armor).toFixed(2));
	}

	static calculateHealthPoints(vit, str, mods = null) {
		if (mods) {
			const sum = mods.reduce((acc, curr) => acc + curr);
			return Number(((vit * 1.5 + str * 0.25 + sum) * 10).toFixed(2));
		}
		return Number(((vit * 1.5 + str * 0.25) * 10).toFixed(2));
	}

	static calculateAttackPower(mainStat, mods = null) {
		if (mods) {
			const sum = mods.reduce((acc, curr) => acc + curr);
			return Number(parseInt((mainStat + sum) * 7.5));
		}
		return Number((mainStat * 7.5).toFixed(2));
	}
	static calculateMagicPower(int, mods = null) {
		if (mods) {
			const sum = mods.reduce((acc, curr) => acc + curr);
			return Number(((int + sum) * 10).toFixed(2));
		}
		return Number((int * 10).toFixed(2));
	}
}
