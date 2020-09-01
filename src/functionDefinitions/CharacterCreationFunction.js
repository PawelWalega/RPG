import { ERRORS } from '../enums/errorMessages';
import { INPUTS } from '../enums/inputs';
import { Character } from '../classDefinitions/characterClass';
import { errorAnimationDuration } from '../utils/constants';

const displayError = function(error, errorElement) {
	errorElement.innerText = error;
	errorElement.classList.remove('errorAnimation');
	errorElement.classList.remove('displayNone');
	errorElement.classList.add('errorAnimation');
	setTimeout(() => {
		errorElement.classList.add('displayNone');
	}, errorAnimationDuration);
};

const trowError = function(error, element, errorElement) {
	displayError(error, errorElement);
	document.getElementById(element).style.borderColor = 'red';
};

export const createNewCharacter = function(
	character,
	pointsLeft,
	errorElement
) {
	if (!character.name) {
		trowError(
			ERRORS.CHARACTER_CREATION.NAME.NO_NAME,
			INPUTS.NAME,
			errorElement
		);
		return;
	} else if (character.name.length < 2) {
		trowError(
			ERRORS.CHARACTER_CREATION.NAME.MINIMUM_CHARACTERS,
			INPUTS.NAME,
			errorElement
		);
		return;
	} else if (/\d/.test(character.name)) {
		trowError(
			ERRORS.CHARACTER_CREATION.NAME.NO_NUMBERS,
			INPUTS.NAME,
			errorElement
		);
		return;
	} else if (character.name.length > 14) {
		trowError(
			ERRORS.CHARACTER_CREATION.NAME.MAXIMUM_CHARACTERS,
			INPUTS.NAME,
			errorElement
		);
		return;
	} else if (!character.race) {
		trowError(
			ERRORS.CHARACTER_CREATION.GENERAL.NO_RACE,
			INPUTS.RACE,
			errorElement
		);
		return;
	} else if (!character.class) {
		trowError(
			ERRORS.CHARACTER_CREATION.GENERAL.NO_CLASS,
			INPUTS.CLASS,
			errorElement
		);
		return;
	} else if (pointsLeft) {
		trowError(
			ERRORS.CHARACTER_CREATION.ATTRIBUTES.POINTS_LEFT,
			INPUTS.POINTS_LEFT,
			errorElement
		);
		return;
	}

	const newCharacter = new Character(character);
	console.log(newCharacter);
};
