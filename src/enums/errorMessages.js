export const ERRORS = {
	CHARACTER_CREATION : {
		NAME       : {
			MINIMUM_CHARACTERS : 'Name has to have minimum of 2 characters.',
			MAXIMUM_CHARACTERS : 'Name can have maximum of 14 characters.',
			NO_NAME            : 'Name is required',
			NO_NUMBERS         : 'Character name cannot contain any numbers'
		},
		ATTRIBUTES : {
			POINTS_LEFT    : 'You still have attribute points left.',
			NO_POINTS_LEFT : 'You have no points left.',
			MINIMUM        : 'This attribute cannot be lower'
		},
		GENERAL    : {
			NO_CLASS  : 'Please select a class.',
			NO_RACE   : 'Please select a race.',
			NO_TALENT : 'Please select all talents.'
		}
	}
};
Object.freeze(ERRORS);
