export const mage = {
	name    : 'Mage',
	talents : {
		tier1 : [
			{
				name          : 'Frost Bolt',
				tooltip       : 'Cast a bolt of frost at your oponent for a moderate damage',
				baseDamage    : {
					minDMG : 5,
					maxDMG : 8
				},
				cooldown      : 0,
				modifier      : {
					name  : 'magicPower',
					value : 0.1
				},
				sources       : [ 'Frost' ],
				role          : 'normal',
				specialEffect : null
			},
			{
				name          : 'Fire Bolt',
				tooltip       : 'Cast a bolt of fire at your oponent for a moderate damage',
				baseDamage    : {
					minDMG : 4,
					maxDMG : 9
				},
				modifier      : {
					name  : 'magicPower',
					value : 0.11
				},
				sources       : [ 'Fire' ],
				role          : 'normal',
				specialEffect : null
			}
		],
		tier2 : [
			{
				name       : 'Blizzard',
				tooltip    : 'Deals big chunk of frost damage',
				baseDamage : {
					minDMG : 7,
					maxDMG : 10
				},
				cooldown   : 3,
				modifier   : {
					name  : 'magicPower',
					value : 0.1
				},
				sources    : [ 'Frost' ]
			},
			{
				name       : 'Fireball',
				tooltip    : 'Deals big chunk of fire damage',
				baseDamage : {
					minDMG : 7,
					maxDMG : 13
				},
				modifier   : {
					name  : 'magicPower',
					value : 0.15
				},
				cooldown   : 3,
				sources    : [ 'Fire' ]
			}
		],
		tier3 : [
			{
				name       : 'Comet',
				tooltip    : 'Big frost damage but on 6 rounds cooldown',
				cooldown   : 6,
				baseDamage : {
					minDMG : 18,
					maxDMG : 24
				},
				modifier   : {
					name  : 'magicPower',
					value : 0.1
				},
				sources    : [ 'Frost' ]
			},
			{
				name       : 'Meteor',
				tooltip    : 'Huge fire damage but on 8 rounds cooldown',
				baseDamage : {
					minDMG : 17,
					maxDMG : 28
				},
				modifier   : {
					name  : 'magicPower',
					value : 0.15
				},
				cooldown   : 8,
				sources    : [ 'Fire' ]
			}
		]
	}
};
