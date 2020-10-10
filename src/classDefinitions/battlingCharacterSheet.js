// import { allRaces } from '@/staticData/allRaces';
import { allClasses } from '@/staticData/allClasses';
import { calculators } from '@/classDefinitions/calculatorFunctions';

export class BattleCharacter {
	constructor(character) {
		this.name = character.name;
		this.class = character.class;
		this.race=character.race;
		this.agi= character.agi;
		this.vit= character.vit;
		this.int= character.int;
		this.str= character.str;
		this.talents= {};
		this.hp = calculators.calculateHealthPoints(
			character.vit,
			character.str
		);
		this.maxHP=this.hp
		this.defenseRating = calculators.calculateDefenseRating(
			character.str,
			character.armor
		);
		this.mainStat=this.str >= this.agi
		? "str"
		: "agi";
		this.magicPower = calculators.calculateMagicPower(character.int);
		this.attackPower = calculators.calculateAttackPower(this[this.mainStat]);
		this.dodgeChance=calculators.calculateDodgeChance(
			character.agi,
			character.int
		)
		console.log(this.class)
		if(this.class !== "Monster"){

			Object.assign(this.talents, character.talents);
			const classDefinition =allClasses.find(el=> el.name===this.class).talents;
			for(const tal in this.talents){
				const talent = classDefinition[tal].find(el=>el.name===this.talents[tal]);
				this.talents[tal] =talent;
			}
		} else {
			console.log("monster lol")
		}
	}
}