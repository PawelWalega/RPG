<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-center mt-4">
      <div class="char-info p-2 border border-secondary rounded">
        <player-character></player-character>
      </div>
      <div class="col-1 separator"></div>
      <div class="char-info p-2 border border-secondary rounded">
        <monster></monster>
      </div>
    </div>

    <div class="col-12 mt-3 mb-2">
      <game-log></game-log>
    </div>
    <button
      class="btn btn-outline-success w-25 mr-auto mb-2 ml-2"
      v-show="gameState.justFinished"
      @click="rematch()"
    >
      Rematch
    </button>
    <button
      class="btn btn-outline-danger w-25 ml-auto mb-2 mr-2"
      @click="forfeit()"
    >
      Forfeit..
    </button>
  </div>
</template>
<script src="./battleScript.js"></script>
<style scoped>
.separator {
  width: 2%;
}
.char-info {
  width: 49%;
}
</style>