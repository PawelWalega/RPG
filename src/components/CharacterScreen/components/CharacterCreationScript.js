import { allRaces } from '../../../staticData/allRaces';
import { allClasses } from '../../../staticData/allClasses';
import { emptyCharacterSheet as character } from '../../../utils/emptyCharacterSheet';
import {
	calculateDodgeChance,
	calculateDefenseRating,
	calculateHealthPoints,
	calculateAttackPower
} from '../../../staticData/CharacterSheet';
import { createNewCharacter } from '../../../functionDefinitions/CharacterCreationFunction';
import { INPUTS } from '../../../enums/inputs';

export default {
	data() {
		return {
			INPUTS,
			allRaces,
			allClasses,
			character,
			classModifiers       : {
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
			this.clearBorders();
			createNewCharacter(
				this.character,
				this.pointsLeft,
				document.getElementById('errorContainer')
			);
		},

		clearBorders() {
			const allInputElements = [];
			for (let input in this.INPUTS) {
				allInputElements.push(this.INPUTS[input]);
			}
			allInputElements.forEach((el) => {
				document.getElementById(el).style.borderColor = '#ced4da';
			});
		},

		classSelected(event) {
			if (event.target.value === 'Select a class:') {
				this.character.class = null;
				this.selectedClass = null;
			} else {
				this.character.class = event.target.value;
				this.selectedClass = this.allClasses.filter(
					(c) => c.identifier === this.character.class
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
				if (
					this.character[event.target.dataset.stat] ===
					5 + this.classModifiers[event.target.dataset.stat]
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

		raceSelected         : function(event) {
			const race = event.target.value;
			if (race === 'Select a race:') {
				this.character.race = null;
			} else {
				if (race === 'human') {
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
				this.character.race = this.allRaces[race];
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
			return this.selectedClass ? this.selectedClass.name : false;
		},
		raceName() {
			return this.character.race ? this.character.race.name : false;
		},
		selectedRace() {
			return this.character.race ? this.character.race.identifier : false;
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
			return calculateDodgeChance(this.character.agi, this.character.int);
		},
		defenseRating() {
			return calculateDefenseRating(
				this.character.str,
				this.character.armor
			);
		},
		healthPoints() {
			return calculateHealthPoints(this.character.vit, this.character.str);
		},
		magicPower() {
			return this.character.int * 10;
		},
		attackPower() {
			return calculateAttackPower(this.mainStat);
		}
	},

	watch    : {
		selectedRace : function(value) {
			const race = this.allRaces[value];
			if (race) {
				for (let mod in this.classModifiers) {
					this.character[mod] -= this.classModifiers[mod];
				}
				const newModifiers = race.modifiers;
				for (let mod in newModifiers) {
					this.character[mod] += newModifiers[mod];
					this.classModifiers[mod] = newModifiers[mod];
				}
			}
		}
	}
};
