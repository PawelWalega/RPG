<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-center mt-4">
      <div class="char-info p-2 border border-secondary rounded">
        <player-character :character="character"></player-character>
      </div>
      <div class="col-1 separator"></div>
      <div class="char-info p-2 border border-secondary rounded">
        <monster></monster>
      </div>
    </div>

    <div class="col-12 mt-3">
      <game-log></game-log>
    </div>
  </div>
</template>
<script>
import GameLog from "./components/GameLog.vue";
import Monster from "./components/Monster.vue";
import PlayerCharacter from "./components/PlayerCharacter.vue";

export default {
  props: ["character"],
  components: {
    GameLog,
    Monster,
    PlayerCharacter,
  },
};
</script>
<style scoped>
.separator {
  width: 2%;
}
.char-info {
  width: 49%;
}
</style>