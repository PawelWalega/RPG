<template>
  <div class="d-flex flex-column">
    <div class="text-center mt-2 p-2">
      {{ battlingCharacters.player.name }}
    </div>
    <div class="d-flex justify-content-around my-3 p-2">
      <div>Dodge: {{ battlingCharacters.player.dodgeChance }}%</div>
      <div>Defense: {{ battlingCharacters.player.defenseRating }}</div>
      <div data-toggle="tooltip" data-placement="bottom" :title="power.type">
        Power: {{ power.power }}
      </div>
    </div>
    <div class="d-flex flex-column">
      <div
        class="progress my-2"
        data-toggle="tooltip"
        data-placement="bottom"
        :title="battlingCharacters.player.hp"
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
    </div>
    <div class="d-flex justify-content-around mt-2">
      <div class="btn btn-lg btn-info" @click="skillUsed(skill1)">
        {{ skill1.name }}
      </div>
      <div class="btn btn-lg btn-info" @click="skillUsed(skill2)">
        {{ skill2.name }}
      </div>
      <div class="btn btn-lg btn-info" @click="skillUsed(skill3)">
        {{ skill3.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { extractDamageFromLog } from "../../../../../utils/commonFunctions";

export default {
  computed: {
    ...mapState(["battlingCharacters", "gameLog", "gameState"]),
    healthPointsPercent() {
      return Math.floor(
        (this.battlingCharacters.player.hp /
          this.battlingCharacters.player.maxHP) *
          100
      );
    },
    skill1() {
      return this.battlingCharacters.player.talents.tier1;
    },
    skill2() {
      return this.battlingCharacters.player.talents.tier2;
    },
    skill3() {
      return this.battlingCharacters.player.talents.tier3;
    },
    power() {
      return this.battlingCharacters.player.attackPower >=
        this.battlingCharacters.player.magicPower
        ? {
            power: this.battlingCharacters.player.attackPower,
            type: "Physical",
          }
        : { power: this.battlingCharacters.player.magicPower, type: "Magic" };
    },
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
  },
  beforeMount() {
    if (this.gameState.gameIsRunning) this.adjustHealthBar();
  },
  methods: {
    ...mapActions(["playerAttack"]),
    skillUsed(skill) {
      this.playerAttack(skill);
    },
    adjustHealthBar() {
      const dmgTaken = this.gameLog.reduce(
        (acc, log) => extractDamageFromLog(log.monster) + acc,
        0
      );
      this.battlingCharacters.player.hp -= dmgTaken;
    },
  },
};
</script>
<style scoped>
.progress {
  height: 20px;
}
</style>