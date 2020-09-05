<template>
  <div class="position-relative row">
    <single-character v-for="(char, i) in characters" :key="i" :character="char"></single-character>
    <create-character-button v-if="characters.length < 4"></create-character-button>
  </div>
</template>
<script>
import createCharacterButton from "./CreateCharacterButton.vue";
import singleCharacter from "./SingleCharacter.vue";

export default {
  props: ["characters"],
  components: {
    createCharacterButton,
    singleCharacter,
  },
};
</script>
<style scoped>
.row {
  height: 100%;
}
</style>