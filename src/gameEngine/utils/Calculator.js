export class Calculator {
	static generateMinMax(min, max) {
		return Math.max(Math.floor(Math.random() * max) + 1, min);
	}
	static rollD100() {
		return Math.floor(Math.random() * 100 + 1);
	}
}
