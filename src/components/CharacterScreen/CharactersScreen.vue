 <template>
  <character-creation v-if="characters.length===0  || creatingNewCharacter"></character-creation>
  <characters-screen v-else :characters="characters"></characters-screen>
</template>

<script>
import charactersScreen from "./components/Characters.vue";
import characterCreation from "./components/CharacterCreation.vue";
import { EventBus } from "../EventBus";

export default {
  data() {
    return {
      characters: [
        { name: "Ataldea" },
        { name: "Bratford" },
        { name: "Alexa" },
      ],
      creatingNewCharacter: false,
    };
  },
  components: {
    charactersScreen,
    characterCreation,
  },
  methods: {
    createNewCharacter() {
      this.creatingNewCharacter = true;
    },
  },
  mounted() {
    EventBus.$on("new-character-button-clicked", this.createNewCharacter);
  },
};
</script>