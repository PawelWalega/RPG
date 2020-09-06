<template>
  <div class="row">
    <div>Battling with {{ character.name }}</div>
    <player-character :character="char"></player-character>
    <monster></monster>
    <game-log></game-log>
  </div>
</template>
<script>
import GameLog from "./components/GameLog.vue";
import Monster from "./components/Monster.vue";
import PlayerCharacter from "./components/PlayerCharacter.vue";
import { BattleCharacter } from "@/classDefinitions/battlingCharacterSheet";
export default {
  props: ["character"],
  components: {
    GameLog,
    Monster,
    PlayerCharacter,
  },
  data() {
    return {
      char: {},
    };
  },
  created() {
    this.char = new BattleCharacter(this.character);
  },
};
</script>