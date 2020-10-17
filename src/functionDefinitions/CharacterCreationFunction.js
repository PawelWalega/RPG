import { ERRORS } from '../enums/errorMessages';
import { INPUTS } from '../enums/inputs';
import { Character } from '../classDefinitions/characterClass';
import { store } from '../store/Store';
import { showWarning } from '@/utils/messeges';

const trowError = function(error, element, errorElement) {
	showWarning(error, errorElement);
	if (element) {
		document.getElementById(element).style.borderColor = 'red';
	}
};

export const createNewCharacter = function(character, pointsLeft, errorElement) {
	const identicalName = store.state.characters.filter(
		(char) => char.name.toLowerCase() === character.name.toLowerCase()
	);
	if (!character.name) {
		trowError(ERRORS.CHARACTER_CREATION.NAME.NO_NAME, INPUTS.NAME, errorElement);
		return false;
	} else if (character.name.length < 2) {
		trowError(ERRORS.CHARACTER_CREATION.NAME.MINIMUM_CHARACTERS, INPUTS.NAME, errorElement);
		return false;
	} else if (/\d/.test(character.name)) {
		trowError(ERRORS.CHARACTER_CREATION.NAME.NO_NUMBERS, INPUTS.NAME, errorElement);
		return false;
	} else if (identicalName.length) {
		trowError(ERRORS.CHARACTER_CREATION.NAME.NAME_ALREADY_EXISTS, INPUTS.NAME, errorElement);
		return false;
	} else if (character.name.length > 14) {
		trowError(ERRORS.CHARACTER_CREATION.NAME.MAXIMUM_CHARACTERS, INPUTS.NAME, errorElement);
		return false;
	} else if (!character.race) {
		trowError(ERRORS.CHARACTER_CREATION.GENERAL.NO_RACE, INPUTS.RACE, errorElement);
		return false;
	} else if (!character.class) {
		trowError(ERRORS.CHARACTER_CREATION.GENERAL.NO_CLASS, INPUTS.CLASS, errorElement);
		return false;
	} else if (pointsLeft) {
		trowError(ERRORS.CHARACTER_CREATION.ATTRIBUTES.POINTS_LEFT, INPUTS.POINTS_LEFT, errorElement);
		return false;
	} else if (store.state.characters.length >= 4) {
		trowError(ERRORS.CHARACTER_CREATION.GENERAL.MAX_NUMBER_OF_CHARACTERS, null, errorElement);
		return false;
	}
	const newCharacter = new Character(character);
	store.commit('createNewCharacter', newCharacter);
	return true;
};
