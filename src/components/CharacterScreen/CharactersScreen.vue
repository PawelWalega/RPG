 <template>
  <character-creation v-if="characters.length===0  || creatingNewCharacter"></character-creation>
  <characters-screen v-else :characters="characters"></characters-screen>
</template>

<script>
import charactersScreen from "./components/Characters.vue";
import characterCreation from "./components/CharacterCreation.vue";
import { EventBus } from "../../utils/EventBus";
export default {
  data() {
    return {
      creatingNewCharacter: false,
    };
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
  components: {
    charactersScreen,
    characterCreation,
  },
  methods: {
    createNewCharacter() {
      this.creatingNewCharacter = true;
    },
    showCharacters() {
      this.creatingNewCharacter = false;
    },
  },
  mounted() {
    EventBus.$on("new-character-button-clicked", this.createNewCharacter);
    EventBus.$on("character-created", this.showCharacters);
    EventBus.$on("back-button-clicked", this.showCharacters);
  },
};
</script>