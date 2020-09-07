<template>
  <div class="d-flex flex-column mt-5 gamelog">
    <div class="d-flex flex-column round" v-for="(round,idx) in gameLog.rounds" :key="idx">
      <div class="progress log">
        <div
          class="progress-bar log__inner bg-secondary px-4 py-2"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Player attack Orc with {{ round.player.attack}} for
          {{round.player.damage}}
          {{round.player.special}}.
        </div>
      </div>
      <div class="progress log">
        <div
          class="progress-bar log__inner bg-dark"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >Orc attacks Player with {{ round.monster.attack}} for {{round.monster.damage}}{{round.monster.special}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["gameLog"]),
  },
};
</script>
<style scoped>
.gamelog {
  height: 400px;
  overflow-y: scroll;
}
.round {
  margin: 0 auto;
  min-width: 90%;
}
.log {
  margin-top: 2px;
  min-height: 3rem;
}
.log__inner {
  font-size: 20px;
}
</style>