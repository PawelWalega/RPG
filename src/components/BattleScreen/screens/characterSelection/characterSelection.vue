<template>
  <div>
    <div class="text-center my-4 title">Select a character to battle with:</div>
    <div class="row">
      <single-char-to-select v-for="(char, i) in characters" :key="i" :character="char"></single-char-to-select>
    </div>
  </div>
</template>
<script>
import singleCharToSelect from "./singleCharToSelect.vue";
import { mapState } from "vuex";
export default {
  computed: mapState(["characters"]),
  components: {
    singleCharToSelect,
  },
};
</script>
<style scoped>
.title {
  font-size: 150%;
}
</style>