<template>
  <div class="d-flex flex-column">
    <div class="text-center mt-2 p-2">BIG BAD ORC</div>

    <div class="d-flex justify-content-around my-3 p-2">
      <div>Dodge: 3%</div>
      <div>Defense: 32</div>
      <div>Power: 180</div>
    </div>
    <div class="d-flex flex-column">
      <div
        class="progress my-2"
        :data-toggle="tooltip"
        data-placement="bottom"
        :title="charHP + '%'"
      >
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex justify-content-around mt-2">
        <div class="bg-secondary rounded py-2 px-5 d-flex text-light">Axe Strike</div>
        <div class="bg-secondary rounded py-2 px-5 d-flex text-light">Power Blow</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    charHP() {
      return 25;
    },
  },
};
</script>
<style scoped>
.progress {
  height: 20px;
}
</style>