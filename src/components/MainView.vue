<template>
  <div class="col-md-10 px-4">
    <character-creation v-if="characters.length===0"></character-creation>
    <characters-screen v-else :characters="characters"></characters-screen>
  </div>
</template>
<script>
import charactersScreen from "./CharacterScreen/Characters.vue";
import characterCreation from "./CharacterScreen/CharacterCreation.vue";

export default {
  data() {
    return {
      characters: [
        { name: "Ataldea" },
        { name: "Bratford" },
        { name: "Alexa" },
      ],
    };
  },
  components: {
    charactersScreen,
    characterCreation,
  },
};
</script>