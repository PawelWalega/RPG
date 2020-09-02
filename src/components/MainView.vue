<template>
  <div class="col-md-10 px-3 py-2 border border-secondary rounded-sm">
    <characters-screen v-if="page === 'characters'"></characters-screen>
    <battle-screen v-if="page === 'battle'"></battle-screen>
    <app-rules v-if="page === 'rules'"></app-rules>
  </div>
</template>
<script >
import charactersScreen from "./CharacterScreen/CharactersScreen.vue";
import battleScreen from "./BattleScreen/BattleScreen.vue";
import appRules from "./RulesScreen/Rules.vue";

export default {
  data() {
    return {};
  },
  computed: {
    page() {
      return this.$store.state.page;
    },
  },
  components: { charactersScreen, battleScreen, appRules },
};
</script>