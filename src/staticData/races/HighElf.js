export const highElf = {
	name            : 'High Elf',
	identifier      : 'highElf',
	modifiers       : { int: 4, vit: 0, str: 0, agi: 0 },
	about           : 'Very inteligent and reserved race',
	racialAbilities : [
		{
			name        : 'High ',
			type        : 'passive',
			description : 'Dummy description 1',
			actionCost  : 2,
			cooldown    : 3,
			definer() {
				// Add active ability to character sheet
			}
		},
		{
			name        : 'Highly focused',
			type        : 'passive',
			description :
				'High Elves are extremely inteligent and concentrated race. (lowers the chance to be critically hit by 15%)',
			actionCost  : 0,
			cooldown    : null,
			definer() {
				// Add active ability to character sheet
			}
		}
	]
};
