export const warrior = {
	name    : 'Warrior',
	talents : {
		tier1 : [
			{
				name    : 'Sword Attack',
				tooltip : 'Swing at your oponent with increased damage'
			},
			{
				name    : 'Shield Bash',
				tooltip :
					'Hit oponent with your shield with an increased chance to hit'
			}
		],
		tier2 : [
			{ name: 'Preemptive position', tooltip: 'Makes Counter aviable' },
			{
				name    : 'Power Blow',
				tooltip :
					'Take a huge swing that deals significant damage if you hit but lowers your defens for next round'
			}
		],
		tier3 : [
			{
				name: 'Counter',
				tooltip: 'Counter is only aviable after using Preemptive position'
			},
			{ name: 'Whirlwind', tooltip: "Name says it all... ^^'" }
		]
	}
};
