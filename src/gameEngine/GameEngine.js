// import * as PlayerFunctions from '@/gameEngine/playerMethods';
import {
	calculateAttackText,
	calculateOutputDMG,
	calculateCharacterDamageTaken
} from '@/gameEngine/generalGameFunctions';

export const playOneRound = function(skill, playerCharacter, monster) {
	// Checks telling if the skill is usable and returning appropriate message

	// calculate damge dealt by player and add any effects to game state
	const playerDamage = calculateOutputDMG(skill, playerCharacter);

	const MonsterDamageTakenInfo = calculateCharacterDamageTaken(
		playerDamage,
		skill.sources,
		monster
	);
	// skill.custommFunction(player, gamestate)
	// calculateGameStateChange(skillSideEffects, customFunctionResult,  gamestate);
	const playerAttackText = calculateAttackText(
		MonsterDamageTakenInfo,
		monster.name,
		skill,
		playerCharacter.name
	);
	console.log(playerAttackText);
	// calculate text for attack
	// calculate damage dealt by monester
	// calculate text for attack

	// const roundInfo = {};

	//mutate the state of characters accordingly
	// make changes to game state - buffs debufs
	// display everythingon screen
};
