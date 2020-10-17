<template>
  <div class="d-flex flex-column mt-5 gamelog">
    <single-turn
      v-for="(round, idx) in gameLog"
      :key="idx"
      :round="round"
    ></single-turn>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Turn from "./Turn.vue";

export default {
  components: {
    singleTurn: Turn,
  },
  data() {
    return {
      text: "text",
    };
  },
  computed: {
    ...mapState(["gameLog"]),
  },
};
</script>
<style scoped>
.gamelog {
  height: 300px;
  overflow-y: auto;
}
</style>