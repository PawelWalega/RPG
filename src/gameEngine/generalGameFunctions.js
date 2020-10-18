import { Calculator } from '@/gameEngine/utils/Calculator';

const calculateOutputDMG = function({ baseDamage, modifier, critChance }, character) {
	let damage = 0;
	let critModifier = 1;
	const roll = Calculator.rollD100();
	if (critChance >= roll) {
		critModifier = 1.5;
	}
	const playersModifierValue = character[modifier.name];
	damage += Calculator.generateMinMax(baseDamage.minDMG, baseDamage.maxDMG);
	damage += playersModifierValue * modifier.value * critModifier;

	return Math.round(damage);
};

const calculateDamageTakenFromMagicSource = function(damage, { int, dodgeChance }) {
	const finalDamageTaken = { damage: 0, condition: '' };
	const roll = Calculator.rollD100();
	if (dodgeChance >= roll) {
		finalDamageTaken.condition = 'dodged';
	} else {
		finalDamageTaken.damage = Math.round(damage - int * 0.5);
	}
	return finalDamageTaken;
};

const calculateDamageTakenFromPhysicalSource = function(damage, { defenseRating, dodgeChance }) {
	const finalDamageTaken = { damage: 0, condition: '' };
	const roll = Calculator.rollD100();
	if (dodgeChance >= roll) {
		finalDamageTaken.condition = 'dodged';
	} else {
		finalDamageTaken.damage = Math.round(damage - defenseRating * 0.5);
	}
	return finalDamageTaken;
};

const calculateCharacterDamageTaken = function(damage, sources, attackedCharacter) {
	const magicSources = [ 'Frost', 'Fire', 'Magic' ];
	let isMagicSource = false;
	sources.forEach((el) => {
		if (magicSources.includes(el)) isMagicSource = true;
	});
	if (isMagicSource) {
		return calculateDamageTakenFromMagicSource(damage, attackedCharacter);
	} else {
		return calculateDamageTakenFromPhysicalSource(damage, attackedCharacter);
	}
};

const calculateAttackText = function(
	{ damage, condition },
	monsterName,
	{ name, extraEffect = null },
	playerCharacterName
) {
	if (!condition) {
		if (extraEffect) {
			return `${playerCharacterName} attacks ${monsterName} with ${name} and deals ${damage} ${extraEffect}`;
		} else {
			return `${playerCharacterName} attacks ${monsterName} with ${name} and deals ${damage}`;
		}
	} else {
		return `${playerCharacterName} attacks ${monsterName} with ${name} but it was ${condition}`;
	}
};

export const roundCleanUp = function(playerCooldownMap, monsterCooldownMap, specialEffectsMap) {
	playerCooldownMap.forEach((value, key, map) => {
		const newValue = value - 1;
		if (newValue === 0) {
			map.delete(key);
		} else {
			map.set(key, newValue);
		}
	});
	monsterCooldownMap.forEach((value, key, map) => {
		const newValue = value - 1;
		if (newValue === 0) {
			map.delete(key);
		} else {
			map.set(key, newValue);
		}
	});
	specialEffectsMap.forEach((value, key, map) => {
		const roundCounter = value.roundsLeft - 1;
		if (roundCounter === 0) {
			map.delete(key);
		} else {
			value.roundsLeft = roundCounter;
		}
	});
};

export const attackCharacter = function(attackingCharacter, skillUsed, defendingCharacter) {
	const rawDamageDealt = calculateOutputDMG(skillUsed, attackingCharacter);

	const defendingCharacterDamageTakenInfo = calculateCharacterDamageTaken(
		rawDamageDealt,
		skillUsed.sources,
		defendingCharacter
	);
	const attackText = calculateAttackText(
		defendingCharacterDamageTakenInfo,
		defendingCharacter.name,
		skillUsed,
		attackingCharacter.name
	);
	return { defendingCharacterDamageTakenInfo, attackText };
};

export const setCooldown = function(skill, gameState, owner) {
	if (skill.cooldown > 0) {
		gameState.skillsOnCooldown[owner].set(skill.name, skill.cooldown + 1);
	}
};

export const gameConditionsCheck = function(skill, gameState, playerCharacter) {
	if (gameState.skillsOnCooldown.player.has(skill.name)) {
		throw new Error(`${skill.name} is still on cooldown.`);
	}
	if (!gameState.gameIsRunning) {
		throw new Error(
			`Game is over. Click new battle to try your chances again with ${playerCharacter.name} or go to character panel to pick another one`
		);
	}
};
