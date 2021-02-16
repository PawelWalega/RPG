import { RACES } from '../../enums/races';

export const human = {
	name            : 'Human',
	identifier      : RACES.HUMAN,
	modifiers       : { int: 0, vit: 0, str: 0, agi: 0 },
	about           : 'Humans are very versitile',
	racialAbilities : [
		{
			name        : 'Dirty tricks',
			type        : 'active',
			description : 'Use whatever you have around to blind or desorient your oponent',
			actionCost  : 1,
			cooldown    : 5,
			definer() {
				// Add active ability to character sheet
			}
		},
		{
			name        : 'Melee Fighter',
			type        : 'passive',
			description : 'Have 5% higher chances to parry attack',
			actionCost  : 0,
			cooldown    : null,
			definer() {
				// Add active ability to character sheet
			}
		}
	]
};
