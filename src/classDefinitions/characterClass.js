export class Character {
	constructor(characterObject) {
		this.name = characterObject.name;
		this.baseStats = {};
		this.baseStats.str = characterObject.str;
		this.baseStats.agi = characterObject.agi;
		this.baseStats.vit = characterObject.vit;
		this.baseStats.int = characterObject.int;
		this.baseStats.armor = characterObject.armor;
		this.class = characterObject.class;
		this.talents = {};
		this.talents.tier1 = characterObject.selectedTalents.tier1;
		this.talents.tier2 = characterObject.selectedTalents.tier2;
		this.talents.tier3 = characterObject.selectedTalents.tier3;
		this.baseStats.hp = characterObject.hp;
	}
	// getters and setter for attributes, stats and talents
}
