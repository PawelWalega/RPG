import {
	attackCharacter,
	roundCleanUp,
	setCooldown,
	gameConditionsCheck
} from '@/gameEngine/generalGameFunctions';

export const playOneRound = function(skill, playerCharacter, monster, gameState) {
	// Checks telling if the skill is usable and returning appropriate message
	try {
		gameConditionsCheck(skill, gameState, playerCharacter);
	} catch (e) {
		throw new Error(e);
	}
	// **** PLAYER DAMAGE AND ROUND INFO ****
	const {
		defendingCharacterDamageTakenInfo : monsterDamageTakenInfo,
		attackText                        : playerAttackText
	} = attackCharacter(playerCharacter, skill, monster);
	setCooldown(skill, gameState, 'player');

	// **** MONSTER DAMAGE AND ROUND INFO ****
	const isTier2MonsterSkillOnCD = gameState.skillsOnCooldown.monster.has(
		monster.talents.tier2.name
	);
	const monsterSkillUsed = isTier2MonsterSkillOnCD ? monster.talents.tier2 : monster.talents.tier1;
	const {
		defendingCharacterDamageTakenInfo : playerDamageTakenInfo,
		attackText                        : monsterAttackText
	} = attackCharacter(monster, monsterSkillUsed, playerCharacter);
	setCooldown(monsterSkillUsed, gameState, 'monster');

	// ****** ROUND CLEANUP ******
	// Lower cooldowns and effects timers and removed finished ones
	roundCleanUp(
		gameState.skillsOnCooldown.player,
		gameState.skillsOnCooldown.monster,
		gameState.specialEffects
	);

	return { monsterDamageTakenInfo, playerAttackText, playerDamageTakenInfo, monsterAttackText };
};

export const checkGameState = function(state) {
	const playerHP = state.battlingCharacters.player.hp;
	const monsterHP = state.battlingCharacters.monster.hp;
	const gameResult = {
		gameIsRunning : true
	};
	if (playerHP === 0 || monsterHP === 0) {
		gameResult.gameIsRunning = false;
		playerHP === 0 ? (gameResult.didPlayerWon = false) : (gameResult.didPlayerWon = true);
	}
	return gameResult;
};
