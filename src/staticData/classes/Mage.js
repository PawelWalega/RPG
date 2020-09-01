export const mage = {
	name       : 'Mage',
	identifier : 'mage',
	talents    : {
		tier1 : [
			{
				name    : 'Frost Bolt',
				tooltip :
					'Cast a bolt of frost at your oponent for a moderate damage'
			},
			{
				name    : 'Fire Bolt',
				tooltip :
					'Cast a bolt of fire at your oponent for a moderate damage'
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
