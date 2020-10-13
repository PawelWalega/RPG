import { playOneRound } from '@/gameEngine/GameEngine';

export const actions = {
	playerAttack(store, skill) {
		playOneRound(
			skill,
			store.state.battlingCharacters.player,
			store.state.battlingCharacters.monster
		);
	},
	selectCharacter({ commit, state }, payload) {
		if (state.gameIsRunning) {
			return;
		}
		commit('setGameState', true);
		commit('setActiveCharacter', payload);
	}
};
