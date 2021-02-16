import { deepFreeze } from '../utils/commonFunctions';

const INPUTS = deepFreeze({
	NAME        : 'nameField',
	POINTS_LEFT : 'pointsField',
	RACE        : 'raceField',
	CLASS       : 'classField'
});
export { INPUTS };
