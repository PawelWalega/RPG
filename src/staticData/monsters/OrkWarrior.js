export const orc = {
	agi     : 8,
	str     : 17,
	vit     : 16,
	int     : 5,
	name    : 'Orc Warrior',
	class   : 'Monster',
	race    : 'Orc',
	armor   : 15,
	talents : {
		tier1 : {
			name       : 'Axe Strike',
			baseDamage : {
				minDMG : 7,
				maxDMG : 12
			},
			sources    : [ 'Physical' ],
			cooldown   : 0
		},
		tier2 : {
			name       : 'Power Blow',
			baseDamage : {
				minDMG : 13,
				maxDMG : 17
			},
			sources    : [ 'Physical' ],
			cooldown   : 3
		}
	}
};
