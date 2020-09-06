<template>
  <button
    class="btn btn-outline-primary btn-sm position-absolute add-character mb-2 mr-1"
    @click="newCharacterBtnClicked()"
  >New Character</button>
</template>
<script>
import { EventBus } from "../../../utils/EventBus";
export default {
  data() {
    return {
      text: "I got clicked",
    };
  },
  methods: {
    newCharacterBtnClicked() {
      EventBus.$emit("new-character-button-clicked", this.text);
    },
  },
};
</script>
<style scoped>
.add-character {
  bottom: 1px;
  right: 1px;
  width: 150px;
}
</style>