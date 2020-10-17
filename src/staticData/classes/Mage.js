export const mage = {
	name    : 'Mage',
	talents : {
		tier1 : [
			{
				name       : 'Frost Bolt',
				tooltip    :
					'Cast a bolt of frost at your oponent for a moderate damage',
				baseDamage : {
					minDMG : 8,
					maxDMG : 14
				},
				cooldown   : null,
				modifier   : {
					name  : 'magicPower',
					value : 0.05
				},
				sources    : [ 'Frost' ]
			},
			{
				name       : 'Fire Bolt',
				tooltip    :
					'Cast a bolt of fire at your oponent for a moderate damage',
				baseDamage : {
					minDMG : 6,
					maxDMG : 10
				},
				modifier   : {
					name  : 'magicPower',
					value : 0.09
				},
				sources    : [ 'Fire' ]
			}
		],
		tier2 : [
			{
				name    : 'Blizzard',
				tooltip :
					'Deals small damage and increases chance to critically hit with fros spells for 5 rounds'
			},
			{ name: 'Fireball', tooltip: 'Deals big damage' }
		],
		tier3 : [
			{
				name    : 'Frost Armor',
				tooltip : 'Reduces all damage taken by 15% for 3 rounds'
			},
			{
				name    : 'Fire wall',
				tooltip :
					'Increases a chance opponent will miss you by 5% and deals small fire damage to him for 4 rounds'
			}
		]
	}
};
