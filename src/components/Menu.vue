<template>
  <div class="col-md-2 px-3">
    <div
      class="d-flex flex-column align-items-center justify-content-around main-menu border border-secondary rounded"
    >
      <div
        class="border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
        @click="changeScreen( 'characters' )"
      >
        <img :src="icons.knightIcon" class="icon mx-5" />
      </div>
      <div
        class="border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
        @click="changeScreen( 'battle' )"
      >
        <img :src="icons.fightIcon" class="icon mx-5" />
      </div>
      <div
        class="border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
        @click="changeScreen( 'rules' )"
      >
        <img :src="icons.bookIcon" class="icon mx-5" />
      </div>
      <div
        class="border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
      >
        <img :src="icons.doorIcon" class="icon mx-5" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      icons: {
        knightIcon: require("./../assets/knight.svg"),
        bookIcon: require("./../assets/book.svg"),
        fightIcon: require("./../assets/fight.svg"),
        doorIcon: require("./../assets/door.svg"),
      },
    };
  },
  methods: {
    ...mapMutations(["changeScreen"]),
  },
};
</script>
<style scoped lang="scss">
.icon {
  width: 4.5rem;
  height: 4.5rem;
  fill: #000;
}
.hover-link {
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translateY(2px) scale(1.03);
    cursor: pointer;
  }
}
.main-menu {
  min-height: 550px;
}
</style>