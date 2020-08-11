<template>
  <div class="col-md-2 p-0">
    <div class="row row-cols-1 gy-3 gx-0 px-1">
      <div
        class="col border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
      >
        <img :src="icons.knightIcon" class="icon" />
      </div>
      <div
        class="col border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
      >
        <img :src="icons.fightIcon" class="icon" />
      </div>
      <div
        class="col border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
      >
        <img :src="icons.bookIcon" class="icon" />
      </div>
      <div
        class="col border border-dark py-4 justify-content-center align-items-center d-flex flex-column rounded shadow-sm hover-link"
      >
        <img :src="icons.doorIcon" class="icon" />
      </div>
    </div>
  </div>
</template>
<script>
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
};
</script>
<style scoped lang="scss">
.icon {
  width: 3rem;
  height: 3rem;
  fill: #000;
}
.hover-link {
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translateY(2px) scale(1.03);
    cursor: pointer;
  }
}
</style>