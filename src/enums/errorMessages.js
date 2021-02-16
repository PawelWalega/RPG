import { deepFreeze } from '../utils/commonFunctions';

const ERRORS = deepFreeze({
	CHARACTER_CREATION : {
		NAME       : {
			MINIMUM_CHARACTERS  : 'Name has to have minimum of 2 characters.',
			MAXIMUM_CHARACTERS  : 'Name can have maximum of 14 characters.',
			NO_NAME             : 'Name is required',
			NO_NUMBERS          : 'Character name cannot contain any numbers',
			NAME_ALREADY_EXISTS :
				'You already have a character with that name.Please select a different one'
		},
		ATTRIBUTES : {
			POINTS_LEFT    : 'You still have attribute points left.',
			NO_POINTS_LEFT : 'You have no points left.',
			MINIMUM        : 'This attribute cannot be lower'
		},
		GENERAL    : {
			NO_CLASS                 : 'Please select a class.',
			NO_RACE                  : 'Please select a race.',
			MAX_NUMBER_OF_CHARACTERS :
				'You already have 4 characters! Please delete one before creating a new one.'
		}
	}
});
export { ERRORS };
