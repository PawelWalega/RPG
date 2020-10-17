<template>
  <div class="d-flex flex-column round">
    <div class="progress log">
      <div
        class="progress-bar log__inner bg-secondary px-4 py-2"
        role="progressbar"
        style="width: 100%"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ round.player }}
      </div>
    </div>
    <div class="progress log">
      <div
        class="progress-bar log__inner bg-dark"
        role="progressbar"
        style="width: 100%"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ round.monster }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["round"],
};
</script>
<style scoped>
.round {
  margin: 0 auto;
  min-width: 90%;
}
.log {
  margin-top: 2px;
  min-height: 3rem;
}
.log__inner {
  font-size: 20px;
}
</style>