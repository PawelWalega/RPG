import { allRaces } from '../../../staticData/allRaces';
import { allClasses } from '../../../staticData/allClasses';
import { calculators } from '../../../staticData/calculatorFunctions';
import { createNewCharacter } from '../../../functionDefinitions/CharacterCreationFunction';
import { INPUTS } from '../../../enums/inputs';
import { EventBus } from '../../../utils/EventBus';

export default {
	data() {
		return {
			INPUTS,
			allRaces,
			allClasses,
			character            : {
				name            : '',
				int             : 7,
				str             : 8,
				agi             : 7,
				vit             : 8,
				class           : '',
				race            : '',
				armor           : 10,
				hp              : 10,
				selectedTalents : { tier1: '', tier2: '', tier3: '' }
			},
			raceModifiers        : {
				int : 0,
				str : 0,
				agi : 0,
				vit : 0
			},
			pointsLeft           : 10,
			selectedClass        : null,
			submitButtonDisabled : true,
			pointsLeftModified   : false
		};
	},

	methods  : {
		createNewCharacter() {
			console.log(this.character);
			this.clearBorders();
			if (
				createNewCharacter(
					this.character,
					this.pointsLeft,
					document.getElementById('errorContainer')
				)
			) {
				EventBus.$emit('character-created');
			}
		},

		clearBorders() {
			const allInputElements = [];
			for (let input in this.INPUTS) {
				allInputElements.push(this.INPUTS[input]);
			}
			allInputElements.forEach((el) => {
				document.getElementById(el).style.borderColor =
					el === INPUTS.POINTS_LEFT ? 'transparent' : '#ced4da';
			});
		},

		classSelected(event) {
			if (event.target.value === 'Select a class:') {
				this.character.class = null;
				this.selectedClass = null;
			} else {
				this.character.class = event.target.value;
				this.selectedClass = this.allClasses.filter(
					(c) => c.name === this.character.class
				)[0];
				const talents = this.selectedClass.talents;
				for (const tal in talents) {
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
				if (
					this.character[event.target.dataset.stat] ===
					5 + this.raceModifiers[event.target.dataset.stat]
				) {
					alert(
						`You can't lower this stat below ${this.character[
							event.target.dataset.stat
						]}!`
					);
					return;
				} else {
					this.character[event.target.dataset.stat] -= 1;
					this.pointsLeft += 1;
				}
			}
		},

		raceSelected(event) {
			let race = event.target.value.toLowerCase();
			if (race !== 'human') {
				if (this.pointsLeftModified) {
					this.pointsLeft -= 4;
					this.pointsLeftModified = false;
				}
			} else {
				if (!this.pointsLeftModified) {
					this.pointsLeftModified = true;
					this.pointsLeft += 4;
				}
			}
			if (race === 'select a race:') {
				race = '';
			}
			this.character.race = race;
		},
		allCharactersScreen() {
			EventBus.$emit('back-button-clicked');
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
		selectedRace() {
			return this.character.race;
		},
		classNotSelected() {
			return this.selectedClass ? true : false;
		},
		mainStat() {
			return this.character.str >= this.character.agi
				? this.character.str
				: this.character.agi;
		},
		// Stats:
		dodgeChance() {
			return calculators.calculateDodgeChance(
				this.character.agi,
				this.character.int
			);
		},
		defenseRating() {
			return calculators.calculateDefenseRating(
				this.character.str,
				this.character.armor
			);
		},
		healthPoints() {
			return calculators.calculateHealthPoints(
				this.character.vit,
				this.character.str
			);
		},
		magicPower() {
			return calculators.calculateMagicPower(this.character.int);
		},
		attackPower() {
			return calculators.calculateAttackPower(this.mainStat);
		}
	},

	watch    : {
		selectedRace(value) {
			const race = this.allRaces[value];
			if (race) {
				for (let mod in this.raceModifiers) {
					this.character[mod] -= this.raceModifiers[mod];
				}
				const newModifiers = race.modifiers;
				for (let mod in newModifiers) {
					this.character[mod] += newModifiers[mod];
					this.raceModifiers[mod] = newModifiers[mod];
				}
			}
		}
	}
};
