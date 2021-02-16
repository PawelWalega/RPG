export function deepFreeze(obj) {
	if (typeof obj === 'object') {
		for (const child in obj) deepFreeze(obj[child]);
		return Object.freeze(obj);
	}
}
