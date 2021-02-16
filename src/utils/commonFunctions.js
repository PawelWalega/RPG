export function deepFreeze(obj) {
	if (typeof obj === 'object') {
		for (const child in obj) deepFreeze(obj[child]);
		return Object.freeze(obj);
	}
}

export function extractDamageFromLog(log) {
	const logg = log
		.split(' ')
		.filter((el) => {
			return !isNaN(+el);
		})
		.map((el) => +el);
	return logg[0];
}
