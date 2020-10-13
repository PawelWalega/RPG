<template>
  <div class="w-50 mb-4">
    <div
      class="border border-secondary rounded p-5 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="m-2">{{ character.name }}</div>
      <div class="m-2">{{ character.race }}, {{ character.class }}</div>

      <button
        class="btn btn-lg btn-outline-success"
        @click="selectCharacter(character.name)"
      >
        select
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["character"],
  methods: {
    ...mapActions(["selectCharacter"]),
  },
};
</script>