import { Calculator } from '@/gameEngine/utils/Calculator';

export const calculateOutputDMG = function({ baseDamage, modifier }, playerCharacter) {
	let damage = 0;
	const playersModifierValue = playerCharacter[modifier.name];
	damage += Calculator.generateMinMax(baseDamage.minDMG, baseDamage.maxDMG);
	damage += playersModifierValue * modifier.value;

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

const calculateDamageTakenFromPhysicalSource = function(damage, attackedCharacter) {
	console.log(damage);
	console.log(attackedCharacter);
};

export const calculateCharacterDamageTaken = function(damage, sources, attackedCharacter) {
	if (sources.includes('Frost', 'Fire', 'Magic')) {
		return calculateDamageTakenFromMagicSource(damage, attackedCharacter);
	} else {
		return calculateDamageTakenFromPhysicalSource(damage, attackedCharacter);
	}
};

export const calculateAttackText = function(
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
