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
	data() {
		return {
			monster : null
		};
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
			this.setGameRunning(false);
			this.setBattlingCharacters(this.character, this.monster);
			this.selectCharacter(this.character);
		},
		setBattlingCharacters(character, monster) {
			const player = new BattleCharacter(character);
			const enemy = new BattleCharacter(monster);
			this.addBattleChar(player);
			this.addBattleChar(enemy);
		}
	},
	beforeMount() {
		this.monster = allMonsters[0];
		this.setBattlingCharacters(this.character, this.monster);
	}
};
