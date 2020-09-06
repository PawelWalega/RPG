<template>
  <div class="col-6 p-3">
    <div class="row shadow-sm border border-secondary rounded single-character pt-2">
      <div class="col-4 text-center">{{ character.name }}</div>
      <div class="col-4 text-center">{{ character.race }}</div>
      <div class="col-4 text-center">{{ character.class }}</div>
      <div class="row px-4 mb-3">
        <div class="col-12 my-2">Stats:</div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Str:</div>
          <div>{{ character.str }}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Agi:</div>
          <div>{{ character.agi }}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Int:</div>
          <div>{{ character.int }}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Vit:</div>
          <div>{{ character.vit }}</div>
        </div>
      </div>
      <div class="row px-4">
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Power:</div>
          <div class="brackets-parent">
            {{ attackOrMagic | toSemiInteger}}
            <span class="brackets">({{ attackOrMagicString }})</span>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Dodge:</div>
          <div>{{ dodgeChance| toSemiInteger}}%</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Defense:</div>
          <div>{{ defenseRating | toSemiInteger}}</div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div>Health:</div>
          <div>{{ healthPoints | toInteger}}</div>
        </div>
      </div>
      <div class="row px-4 talents">
        <div class="col-4 my-3 p-1">
          <div
            class="border border-secondary rounded p-1 d-flex justify-content-center align-items-center"
          >
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              :title="tooltips.tier1"
            >{{ character.talents.tier1 }}</div>
          </div>
        </div>
        <div class="col-4 my-3 p-1">
          <div
            class="border border-secondary rounded p-1 d-flex justify-content-center align-items-center"
          >
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              :title="tooltips.tier2"
            >{{ character.talents.tier2 }}</div>
          </div>
        </div>
        <div class="col-4 my-3 p-1">
          <div
            class="border border-secondary rounded p-1 d-flex justify-content-center align-items-center"
          >
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              :title="tooltips.tier3"
            >{{ character.talents.tier3 }}</div>
          </div>
        </div>
      </div>
      <div class="btn btn-outline-success w-25 mr-auto mb-2 ml-2" @click="toBattle">To Battle!</div>
      <div class="btn btn-outline-danger w-25 ml-auto mb-2 mr-2" @click="deleteChar">Delete</div>
    </div>
  </div>
</template>
<script src="./SingleCharacterScript">
</script>
<style scoped>
.brackets {
  font-size: 60%;
  margin-left: 3px;
}
.brackets-parent {
  display: flex;
  align-items: center;
}
.single-character {
  font-size: 90%;
}
.talents {
  font-size: 80%;
}
</style>