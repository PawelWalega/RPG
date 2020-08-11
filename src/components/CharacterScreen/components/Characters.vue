<template>
  <div class="position-relative all-characters">
    <single-character v-for="(char, i) in characters" :key="i" :character="char"></single-character>
    <create-character-button v-if="characters.length < 4"></create-character-button>
  </div>
</template>
<script>
import createCharacterButton from "./CreateCharacterButton.vue";
import singleCharacter from "./SingleCharacter.vue";

export default {
  props: ["characters"],
  data() {
    return {
      text: "All Characters",
    };
  },
  components: {
    createCharacterButton,
    singleCharacter,
  },
};
</script>
<style scoped>
.all-characters {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>