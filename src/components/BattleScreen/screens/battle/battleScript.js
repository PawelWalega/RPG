import GameLog from './components/GameLog.vue';
import Monster from './components/Monster.vue';
import PlayerCharacter from './components/PlayerCharacter.vue';
import { BattleCharacter } from '@/classDefinitions/battlingCharacterSheet';
import { mapMutations, mapState, mapActions } from 'vuex';
import { allMonsters } from '@/staticData/allMonsters.js';

export default {
	props       : [ 'character' ],
	components  : {
		GameLog,
		Monster,
		PlayerCharacter
	},
	computed    : {
		...mapState([ 'gameState' ])
	},
	methods     : {
		...mapMutations([ 'addBattleChar', 'setGameRunning', 'resetActiveCharacter' ]),
		...mapActions([ 'selectCharacter' ]),
		forfeit() {
			this.setGameRunning(false);
			this.resetActiveCharacter();
		},
		rematch() {
			this.selectCharacter(this.character);
		}
	},
	beforeMount() {
		const battleChar = new BattleCharacter(this.character);
		const orc = allMonsters[0];
		const monster = new BattleCharacter(orc);
		this.addBattleChar(battleChar);
		this.addBattleChar(monster);
	}
};
