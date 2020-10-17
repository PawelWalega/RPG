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
		state.selectedChar = state.characters.find(
			(char) => char.name === payload
		);
	},
	setGameState(state, payload) {
		state.gameState.gameIsRunning = payload;
	},
	resetActiveCharacter(state) {
		state.selectedChar = null;
	},
	addBattleChar(state, payload) {
		if (payload.class === 'Monster') {
			Object.assign(state.battlingCharacters.monster, payload);
		} else {
			Object.assign(state.battlingCharacters.player, payload);
		}
	}
};
