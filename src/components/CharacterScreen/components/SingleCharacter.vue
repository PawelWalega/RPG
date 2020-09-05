<template>
  <div class="col-6 p-3">
    <div class="row shadow-sm border border-secondary rounded">
      <div class="col-4 text-center">{{ character.name }}</div>
      <div class="col-4 text-center">{{ character.race }}</div>
      <div class="col-4 text-center">{{ character.class }}</div>
      <div class="row px-4 mb-3">
        <div class="col-12 my-2">Stats:</div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Str:</div>
          <div>{{ character.str }}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Agi:</div>
          <div>{{ character.agi }}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Int:</div>
          <div>{{ character.int }}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Vit:</div>
          <div>{{ character.vit }}</div>
        </div>
      </div>
      <div class="row px-4">
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Power:</div>
          <div class="brackets-parent">
            {{ attackOrMagic | toSemiInteger}}
            <span class="brackets">({{ attackOrMagicString }})</span>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Dodge:</div>
          <div>{{ dodgeChance| toSemiInteger}}%</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Defense:</div>
          <div>{{ defenseRating | toSemiInteger}}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Health:</div>
          <div>{{ healthPoints | toInteger}}</div>
        </div>
      </div>
      <div class="row px-4">
        <div class="col-4"></div>
      </div>

      <div class="btn" @click="deleteChar">Delete</div>
    </div>
  </div>
</template>
<script>
import { store } from "../../../store/Store";
import { calculators } from "../../../staticData/calculatorFunctions";
export default {
  props: ["character"],
  created() {
    console.log(this.character);
  },
  methods: {
    deleteChar() {
      store.commit("deleteCharacter", 0);
    },
  },
  computed: {
    attackOrMagicString() {
      return this.magicPower < this.attackPower ? "Attack" : "Magic";
    },
    attackOrMagic() {
      return this.magicPower < this.attackPower
        ? this.attackPower
        : this.magicPower;
    },
    dodgeChance() {
      return calculators.calculateDodgeChance(
        this.character.agi,
        this.character.int
      );
    },
    defenseRating() {
      return calculators.calculateDefenseRating(
        this.character.str,
        this.character.armor
      );
    },
    healthPoints() {
      return calculators.calculateHealthPoints(
        this.character.vit,
        this.character.str
      );
    },
    magicPower() {
      return calculators.calculateMagicPower(this.character.int);
    },
    attackPower() {
      return calculators.calculateAttackPower(this.mainStat);
    },
  },
};
</script>
<style scoped>
.brackets {
  font-size: 60%;
  margin-left: 3px;
}
.brackets-parent {
  display: flex;
  align-items: center;
}
</style>