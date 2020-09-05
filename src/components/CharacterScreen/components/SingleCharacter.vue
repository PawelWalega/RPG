<template>
  <div class="col-6 shadow-sm border border-secondary rounded p-3">{{character.name}}</div>
</template>
<script>
export default {
  props: ["character"],
};
</script>