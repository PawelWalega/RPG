<template>
  <div class="col shadow-sm p-3 border border-secondary rounded">{{character.name}}</div>
</template>
<script>
export default {
  props: ["character"],
};
</script>
<style scoped>
.single-character {
  height: 50%;
}
</style>