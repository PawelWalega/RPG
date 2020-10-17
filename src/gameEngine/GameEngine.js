// import * as PlayerFunctions from '@/gameEngine/playerMethods';
import {
	calculateAttackText,
	calculateOutputDMG,
	calculateCharacterDamageTaken
} from '@/gameEngine/generalGameFunctions';

export const playOneRound = function(skill, playerCharacter, monster, gameState) {
	// Checks telling if the skill is usable and returning appropriate message
	if (gameState.skillsOnCooldown.player.has(skill.name)) {
		throw new Error(`${skill.name} is still on cooldown.`);
	}
	if (!gameState.gameIsRunning) {
		throw new Error(
			`Game is over. Click new battle to try your chances again with ${playerCharacter.name} or go to character panel to pick another one`
		);
	}
	// **** PLAYER DAMAGE AND ROUND INFO ****
	const playerDamage = calculateOutputDMG(skill, playerCharacter);

	const monsterDamageTakenInfo = calculateCharacterDamageTaken(
		playerDamage,
		skill.sources,
		monster
	);
	const playerAttackText = calculateAttackText(
		monsterDamageTakenInfo,
		monster.name,
		skill,
		playerCharacter.name
	);

	// **** MONSTER DAMAGE AND ROUND INFO ****
	const isTier2MonsterSkillOnCD = gameState.skillsOnCooldown.monster.has(
		monster.talents.tier2.name
	);
	const monsterSkillUsed = isTier2MonsterSkillOnCD ? monster.talents.tier2 : monster.talents.tier1;
	const monsterDamage = calculateOutputDMG(monsterSkillUsed, monster);
	const playerDamageTakenInfo = calculateCharacterDamageTaken(
		monsterDamage,
		monsterSkillUsed.sources,
		playerCharacter
	);
	const monsterAttackText = calculateAttackText(
		playerDamageTakenInfo,
		playerCharacter.name,
		monsterSkillUsed,
		monster.name
	);

	// make changes to game state - buffs debufs (FUTURE FEATURE)
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
