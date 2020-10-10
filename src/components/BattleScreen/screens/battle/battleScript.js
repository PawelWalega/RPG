import GameLog from './components/GameLog.vue';
import Monster from './components/Monster.vue';
import PlayerCharacter from './components/PlayerCharacter.vue';
// import { Calculator } from '@/gameEngine/utils/Calculator';
import { BattleCharacter } from '@/classDefinitions/battlingCharacterSheet';
import { mapMutations } from 'vuex';
import { allMonsters } from '@/staticData/allMonsters.js';

export default {
	props       : [ 'character' ],
	components  : {
		GameLog,
		Monster,
		PlayerCharacter
	},
	methods     : {
		...mapMutations([ 'addBattleChar' ])
	},
	beforeMount() {
		const battleChar = new BattleCharacter(this.character);
		const orc = allMonsters[0];
		const monster = new BattleCharacter(orc);
		this.addBattleChar(battleChar);
		this.addBattleChar(monster);
	}
};
