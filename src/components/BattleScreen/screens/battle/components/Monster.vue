<template>
  <div class="d-flex flex-column">
    <div class="text-center mt-2 p-2">
      {{ battlingCharacters.monster.name }}
    </div>

    <div class="d-flex justify-content-around my-3 p-2">
      <div>Dodge: {{ battlingCharacters.monster.dodgeChance }}%</div>
      <div>Defense: {{ battlingCharacters.monster.defenseRating }}</div>
      <div data-toggle="tooltip" data-placement="bottom" :title="power.type">
        Power: {{ power.power }}
      </div>
    </div>
    <div class="d-flex flex-column">
      <div
        class="progress my-2"
        data-toggle="tooltip"
        data-placement="bottom"
        :title="battlingCharacters.monster.hp"
      >
        <div
          class="progress-bar"
          :class="progressBarStyle"
          role="progressbar"
          :style="{ width: healthPointsPercent + '%' }"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex justify-content-around mt-2">
        <div class="bg-secondary rounded py-2 px-5 d-flex text-light">
          Axe Strike
        </div>
        <div class="bg-secondary rounded py-2 px-5 d-flex text-light">
          Power Blow
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { extractDamageFromLog } from "../../../../../utils/commonFunctions";

export default {
  computed: {
    healthPointsPercent() {
      return Math.floor(
        (this.battlingCharacters.monster.hp /
          this.battlingCharacters.monster.maxHP) *
          100
      );
    },
    ...mapState(["battlingCharacters", "gameLog", "gameState"]),
    progressBarStyle() {
      let style = null;
      let percent = this.healthPointsPercent;
      switch (true) {
        case percent >= 65:
          style = "bg-success";
          break;
        case percent >= 35:
          style = "bg-warning";
          break;
        default:
          style = "bg-danger";
          break;
      }
      return style;
    },
    power() {
      return this.battlingCharacters.monster.attackPower >=
        this.battlingCharacters.monster.magicPower
        ? {
            power: this.battlingCharacters.monster.attackPower,
            type: "Physical",
          }
        : { power: this.battlingCharacters.monster.magicPower, type: "Magic" };
    },
  },
  beforeMount() {
    if (this.gameState.gameIsRunning) this.adjustHealthBar();
  },
  methods: {
    adjustHealthBar() {
      const dmgTaken = this.gameLog.reduce(
        (acc, log) => extractDamageFromLog(log.player) + acc,
        0
      );
      this.battlingCharacters.monster.hp -= dmgTaken;
    },
  },
};
</script>
<style scoped>
.progress {
  height: 20px;
}
</style>