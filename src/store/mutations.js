import { initGameState } from '@/store/Store';

export const mutations = {
	changeScreen(state, payload) {
		state.page = payload;
	},
	createNewCharacter(state, payload) {
		if (state.characters.length === 4) return;
		state.characters.push(payload);
	},
	deleteCharacter(state, payload) {
		state.characters.splice(payload, 1);
	},
	clearSelected(state) {
		if (!state.gameState.gameIsRunning) {
			state.selectedChar = '';
		}
	},
	setActiveCharacter(state, payload) {
		state.selectedChar = state.characters.find((char) => char.name === payload);
	},
	setGameRunning(state, payload) {
		state.gameState.gameIsRunning = payload;
	},
	clearGameLog(state) {
		state.gameLog = [];
	},
	updateRoundInfo(state, payload) {
		const { playerAttackText: player, monsterAttackText: monster } = payload;
		state.gameLog.unshift({ player, monster });
	},
	updateCharactersHP(state, payload) {
		state.battlingCharacters.player.hp -= payload.playerDamageTakenInfo.damage;
		if (state.battlingCharacters.player.hp < 0) {
			state.battlingCharacters.player.hp = 0;
		}
		state.battlingCharacters.monster.hp -= payload.monsterDamageTakenInfo.damage;
		if (state.battlingCharacters.monster.hp < 0) {
			state.battlingCharacters.monster.hp = 0;
		}
	},
	setRematchButtonVisibility(state, payload) {
		state.gameState.justFinished = payload;
	},
	resetActiveCharacter(state) {
		state.selectedChar = '';
	},
	addBattleChar(state, payload) {
		if (payload.class === 'Monster') {
			Object.assign(state.battlingCharacters.monster, payload);
		} else {
			Object.assign(state.battlingCharacters.player, payload);
		}
	},
	resetGameState(state) {
		state.gameState = initGameState();
	},
	resetBattlingChars(state) {
		state.battlingCharacters = {
			player  : null,
			monster : null
		};
	}
};
