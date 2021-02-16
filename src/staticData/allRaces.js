import { RACES } from '../enums/races';
import { human } from './races/Human';
import { highElf } from './races/HighElf';

export const allRaces = {
	[RACES.HUMAN]: human,
	[RACES.HIGH_ELF]: highElf
};
