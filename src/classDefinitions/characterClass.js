export class Character {
	constructor(characterObject) {
		this.name = characterObject.name;
		this.str = characterObject.str;
		this.agi = characterObject.agi;
		this.vit = characterObject.vit;
		this.int = characterObject.int;
		this.armor = characterObject.armor;
		this.class = characterObject.class;
		this.talents = {};
		this.talents.tier1 = characterObject.selectedTalents.tier1;
		this.talents.tier2 = characterObject.selectedTalents.tier2;
		this.talents.tier3 = characterObject.selectedTalents.tier3;
	}
}
