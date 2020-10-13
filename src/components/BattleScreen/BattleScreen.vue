<template>
  <battle v-if="selectedChar" :character="selectedChar"></battle>
  <character-selection v-else></character-selection>
</template>
<script>
import { mapState } from "vuex";
import battle from "./screens/battle/battle.vue";
import characterSelection from "./screens/characterSelection/characterSelection.vue";
export default {
  components: {
    battle,
    characterSelection,
  },
  computed: {
    ...mapState(["selectedChar"]),
  },
};
</script>