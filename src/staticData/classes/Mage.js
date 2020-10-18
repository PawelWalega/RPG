export const mage = {
	name    : 'Mage',
	talents : {
		tier1 : [
			{
				name          : 'Frost Bolt',
				tooltip       : 'Cast a bolt of frost at your oponent for a moderate damage',
				baseDamage    : {
					minDMG : 8,
					maxDMG : 14
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
					minDMG : 7,
					maxDMG : 17
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
				name          : 'Blizzard',
				tooltip       :
					'Deals small damage periodically and increases chance to critically hit with frost spells for 5 rounds',
				baseDamage    : {
					minDMG : 4,
					maxDMG : 6
				},
				cooldown      : 5,
				modifier      : {
					name  : 'magicPower',
					value : 0.04
				},
				sources       : [ 'Frost' ],
				role          : 'special',
				specialEffect : function() {}
			},
			{
				name          : 'Fireball',
				tooltip       : 'Deals big chunk of fire damage',
				baseDamage    : {
					minDMG : 9,
					maxDMG : 17
				},
				modifier      : {
					name  : 'magicPower',
					value : 0.15
				},
				cooldown      : 3,
				sources       : [ 'Fire' ],
				role          : 'normal',
				specialEffect : null
			}
		],
		tier3 : [
			{
				name     : 'Frost Armor',
				tooltip  : 'Reduces all damage taken by 15% for 3 rounds',
				role     : 'special',
				cooldown : 3
			},
			{
				name     : 'Fire wall',
				tooltip  :
					'Increases a chance opponent will miss you by 5% and deals small fire damage to him for 4 rounds',
				role     : 'special',
				cooldown : 3
			}
		]
	}
};
