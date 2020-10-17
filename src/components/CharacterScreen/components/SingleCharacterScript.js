import { store } from '../../../store/Store';
import { calculators } from '../../../classDefinitions/calculatorFunctions';
import { allClasses } from '@/staticData/allClasses';
import { mapState } from 'vuex';

export default {
	props    : [ 'character' ],

	data() {
		return {
			allClasses,
			tooltips   : {
				tier1 : '',
				tier2 : '',
				tier3 : ''
			}
		};
	},
	methods  : {
		deleteChar() {
			store.commit('deleteCharacter', this.index);
		},
		getTooltips() {
			for (let tier in this.character.talents) {
				const charClass = this.allClasses.find(
					(cl) => cl.name === this.character.class
				);
				const foundTalent = charClass.talents[tier].find(
					(tal) => tal.name === this.character.talents[tier]
				);
				const tooltip = foundTalent.tooltip;
				this.tooltips[tier] = tooltip;
			}
		},
		toBattle() {
			store.dispatch('selectCharacter', this.character.name);
			store.commit('changeScreen', 'battle');
		}
	},
	computed : {
		...mapState([ 'selectedChar' ]),
		mainStat() {
			return this.character.str > this.character.agi
				? this.character.str
				: this.character.agi;
		},
		index() {
			return store.state.characters.indexOf(this.character);
		},
		attackOrMagicString() {
			return this.magicPower > this.attackPower ? 'Magic' : 'Attack';
		},
		attackOrMagic() {
			return this.magicPower < this.attackPower
				? this.attackPower
				: this.magicPower;
		},
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
		},
		battleTip() {
			return this.selectedChar
				? 'There is a battle already in progress'
				: `Battle with ${this.character.name}`;
		}
	},
	created() {
		this.getTooltips();
	}
};
