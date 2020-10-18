import { playOneRound, checkGameState } from '@/gameEngine/GameEngine';
import { showWarning, displayEndGameMessage } from '@/utils/messeges';

export const actions = {
	playerAttack({ commit, state }, skill) {
		let roundInfo = null;

		try {
			roundInfo = playOneRound(
				skill,
				state.battlingCharacters.player,
				state.battlingCharacters.monster,
				state.gameState
			);
		} catch (e) {
			showWarning(e.message, document.getElementById('errorContainer'));
		}

		if (!roundInfo) {
			return;
		}

		const {
			playerAttackText,
			monsterAttackText,
			monsterDamageTakenInfo,
			playerDamageTakenInfo
		} = roundInfo;

		commit('updateRoundInfo', { playerAttackText, monsterAttackText });
		commit('updateCharactersHP', { playerDamageTakenInfo, monsterDamageTakenInfo });

		const gameResult = checkGameState(state);
		if (gameResult.gameIsRunning) {
			return;
		} else {
			commit('setGameRunning', false);
			commit('setRematchButtonVisibility', true);
			displayEndGameMessage(gameResult.didPlayerWon);
		}
	},
	selectCharacter({ commit, state }, payload) {
		commit('setGameRunning', false);
		if (state.gameState.gameIsRunning) {
			return;
		}
		commit('setRematchButtonVisibility', false);
		commit('clearGameLog');
		commit('setGameRunning', true);
		console.log(payload);
		commit('setActiveCharacter', payload.name);
	}
};
