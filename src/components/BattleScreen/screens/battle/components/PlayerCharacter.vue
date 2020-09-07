<template>
  <div class="d-flex flex-column mt-3 p-2">
    <div class="d-flex justify-content-around">
      <div>{{ battleChar.name}}</div>
      <div>High Elf</div>
      <div>Mage</div>
    </div>
    <div class="d-flex justify-content-around my-3 p-2">
      <div>Dodge: 9%</div>
      <div>Defense: 26</div>
      <div>Power: 150</div>
    </div>
    <div class="playerInfo"></div>
    <div class="d-flex flex-column">
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 50%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style="width: 75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="d-flex justify-content-around mt-2">
      <div class="btn btn-lg btn-secondary">Skill #1</div>
      <div class="btn btn-lg btn-secondary">Skill #2</div>
      <div class="btn btn-lg btn-secondary">Skill #3</div>
    </div>
  </div>
</template>
<script>
import { BattleCharacter } from "@/classDefinitions/battlingCharacterSheet";
export default {
  props: ["character"],
  data() {
    return {
      battleChar: {},
    };
  },
  beforeMount() {
    this.battleChar = new BattleCharacter(this.character);
  },
};
</script>