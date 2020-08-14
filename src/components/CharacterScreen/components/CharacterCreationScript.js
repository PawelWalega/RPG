export default {
	data() {
		return {
			classes              : [
				{
					name    : 'Mage',
					talents : {
						tier1 : [
							{
								name    : 'Frost Bolt',
								tooltip : 'Cast a bolt of frost at your oponent'
							},
							{
								name    : 'Fire Bolt',
								tooltip : 'Cast a bolt of fire at your oponent'
							}
						],
						tier2 : [
							{ name: 'MAGE Tier 2 Tal1', tooltip: 'Talent Tooltip' },
							{ name: 'MAGE Tier 2 Tal2', tooltip: 'Talent Tooltip' }
						],
						tier3 : [
							{ name: 'MAGE Tier 3 Tal1', tooltip: 'Talent Tooltip' },
							{ name: 'MAGE Tier 3 Tal2', tooltip: 'Talent Tooltip' }
						]
					}
				},
				{
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
							{ name: 'WARRIOR Tier 2 Tal1', tooltip: 'Talent Tooltip' },
							{ name: 'WARRIOR Tier 2 Tal2', tooltip: 'Talent Tooltip' }
						],
						tier3 : [
							{ name: 'WARRIOR Tier 3 Tal1', tooltip: 'Talent Tooltip' },
							{ name: 'WARRIOR Tier 3 Tal2', tooltip: 'Talent Tooltip' }
						]
					}
				}
				// 'Ranger',
				// 'Knight'
			],
			character            : {
				name            : '',
				int             : 7,
				str             : 8,
				agi             : 7,
				vit             : 8,
				class           : null,
				race            : null,
				selectedTalents : { tier1: '', tier2: '', tier3: '' }
			},
			classModifiers       : {
				int : 0,
				str : 0,
				agi : 0,
				vit : 0
			},
			pointsLeft           : 10,
			races                : [
				{ race: 'Human', modifiers: { int: 0, vit: 0, str: 0, agi: 0 } },
				{ race: 'Dwarf', modifiers: { int: 0, vit: 2, str: 2, agi: 0 } },
				{ race: 'Elf', modifiers: { int: 0, vit: 0, str: 0, agi: 4 } },
				{ race: 'High-Elf', modifiers: { int: 4, vit: 0, str: 0, agi: 0 } }
			],
			selectedClass        : null,
			submitButtonDisabled : true,
			pointsLeftModified   : false
		};
	},

	methods  : {
		createNewCharacter() {
			console.log(this.character);
		},

		classSelected(event) {
			if (event.target.value === 'Select a class:') {
				this.character.class = null;
				this.selectedClass = null;
			} else {
				this.character.class = event.target.value;
				this.selectedClass = this.classes.filter(
					(c) => c.name === this.character.class
				)[0];
				const talents = this.selectedClass.talents;
				for (let tal in talents) {
					this.character.selectedTalents[tal] = talents[tal][0]['name'];
				}
			}
		},

		talentSelected(event) {
			const talentName = event.target.value;
			const options = event.target.children;
			let tier;
			for (let child of options) {
				if (child.label === talentName) tier = child.dataset.tier;
			}
			this.character.selectedTalents[tier] = talentName;
		},

		attributesBtnClicked(event) {
			if (event.target.dataset.action === 'add') {
				if (!this.pointsLeft) {
					alert('No points left!');
					return;
				}
				this.character[event.target.dataset.stat] += 1;
				this.pointsLeft -= 1;
			} else if (event.target.dataset.action === 'subtract') {
				if (this.character[event.target.dataset.stat] === 5) {
					alert("You can't lower stat below 5!");
					return;
				} else {
					this.character[event.target.dataset.stat] -= 1;
					this.pointsLeft += 1;
				}
			}
		},

		raceSelected         : function(event) {
			if (event.target.value === 'Select a race:') {
				this.character.race = null;
			} else {
				if (event.target.value === 'Human') {
					if (!this.pointsLeftModified) {
						this.pointsLeftModified = true;
						this.pointsLeft += 4;
					}
				} else {
					if (this.pointsLeftModified) {
						this.pointsLeft -= 4;
						this.pointsLeftModified = false;
					}
				}
				this.character.race = event.target.value;
			}
		}
	},

	computed : {
		isButtonDisabled() {
			return !this.submitButtonDisabled;
		},
		strength() {
			return this.character.str;
		},
		agility() {
			return this.character.agi;
		},
		inteligence() {
			return this.character.int;
		},
		vitality() {
			return this.character.vit;
		},
		currentClass() {
			return this.character.class;
		},
		selectedRace() {
			return this.character.race;
		},
		classNotSelected() {
			return this.selectedClass ? true : false;
		}
	},

	watch    : {
		selectedRace : function() {
			const race = this.races.filter((r) => r.race === this.character.race);
			if (race) {
				for (let mod in this.classModifiers) {
					this.character[mod] -= this.classModifiers[mod];
				}
				const newModifiers = race[0].modifiers;
				for (let mod in newModifiers) {
					this.character[mod] += newModifiers[mod];
					this.classModifiers[mod] = newModifiers[mod];
				}
			}
		}
	}
};
