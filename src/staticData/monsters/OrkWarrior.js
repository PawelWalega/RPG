export const orc = {
	agi        : 8,
	str        : 17,
	vit        : 16,
	int        : 5,
	name       : 'Orc Warrior',
	class      : 'Monster',
	race       : 'Orc',
	critChance : 5,
	armor      : 15,
	talents    : {
		tier1 : {
			name       : 'Axe Strike',
			baseDamage : {
				minDMG : 6,
				maxDMG : 17
			},
			sources    : [ 'Physical' ],
			modifier   : {
				name  : 'attackPower',
				value : 0.15
			},
			cooldown   : 0
		},
		tier2 : {
			name       : 'Power Blow',
			baseDamage : {
				minDMG : 13,
				maxDMG : 21
			},
			modifier   : {
				name  : 'attackPower',
				value : 0.27
			},
			sources    : [ 'Physical' ],
			cooldown   : 3
		}
	}
};
