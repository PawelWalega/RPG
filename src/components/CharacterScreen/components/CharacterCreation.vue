<template>
  <div class="col">
    <div class="row mb-3">
      <!-- SELECTIGN NAME, CLASS AND RACE -->
      <!-- -------------------------- -->
      <div class="mb-3 col-4 d-flex flex-column">
        <label class="form-label">Character name:</label>
        <input type="text" :id="INPUTS.NAME" class="form-control" v-model="character.name" />
      </div>

      <div class="mb-3 col-4 d-flex flex-column">
        <label class="form-label">Race:</label>
        <select class="form-select form-select-sm" :id="INPUTS.RACE" @change="raceSelected($event)">
          <option>Select a race:</option>
          <option
            v-for="(race, val) in allRaces"
            :key="val"
            :value="race.identifier"
          >{{ race.name }}</option>
        </select>
      </div>

      <div class="mb-3 col-4 d-flex flex-column">
        <label class="form-label">Class:</label>
        <select
          class="form-select form-select-sm"
          :id="INPUTS.CLASS"
          @change="classSelected($event)"
        >
          <option>Select a class:</option>
          <option
            v-for="(charClass, idx) in allClasses"
            :key="idx"
            :value="charClass.identifier"
          >{{ charClass.name }}</option>
        </select>
      </div>
    </div>
    <!-- TALENTS -->
    <!-- -------------------------------------------- -->
    <div class="row mb-3">
      <div class="mb-3 col-4">
        <label class="form-label">Basic Attack:</label>
        <select v-if="!classNotSelected" class="form-select form-select-sm">
          <option>Select a class first!</option>
        </select>

        <select v-else class="form-select form-select-sm" @change="talentSelected($event)">
          <option
            v-for="(talent) in selectedClass.talents.tier1"
            :key="talent.name"
            data-tier="tier1"
            data-toggle="tooltip"
            data-placement="bottom"
            :title="talent.tooltip"
          >{{ talent.name }}</option>
        </select>
      </div>

      <div class="mb-3 col-4">
        <label class="form-label">Special Attack:</label>
        <select v-if="!classNotSelected" class="form-select form-select-sm">
          <option>Select a class first!</option>
        </select>

        <select v-else class="form-select form-select-sm" @change="talentSelected($event)">
          <option
            v-for="(talent) in selectedClass.talents.tier2"
            :key="talent.name"
            data-tier="tier2"
            data-toggle="tooltip"
            data-placement="bottom"
            :title="talent.tooltip"
          >{{ talent.name }}</option>
        </select>
      </div>

      <div class="mb-3 col-4">
        <label class="form-label">Defensive Ability:</label>
        <select v-if="!classNotSelected" class="form-select form-select-sm">
          <option>Select a class first!</option>
        </select>

        <select v-else class="form-select form-select-sm" @change="talentSelected($event)">
          <option
            v-for="(talent) in selectedClass.talents.tier3"
            :key="talent.name"
            data-tier="tier3"
            data-toggle="tooltip"
            data-placement="bottom"
            :title="talent.tooltip"
          >{{ talent.name }}</option>
        </select>
      </div>
    </div>
    <!-- Attribute Selection -->
    <!-- --------------------------------------- -->

    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="mt-3 col-3 d-flex flex-column align-items-center">
            <div class="mx-auto">Strength:</div>
            <div class="d-flex align-items-center">
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="str"
                data-action="add"
                @click.prevent="attributesBtnClicked($event)"
              >+</button>
              <span class="mx-2 attribute">{{ strength }}</span>
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="str"
                data-action="subtract"
                @click.prevent="attributesBtnClicked($event)"
              >-</button>
            </div>
          </div>

          <div class="mt-3 col-3 d-flex flex-column align-items-center">
            <div class="mx-auto">Agility:</div>
            <div class="d-flex align-items-center">
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="agi"
                data-action="add"
                @click.prevent="attributesBtnClicked($event)"
              >+</button>
              <span class="mx-2 attribute">{{ agility }}</span>
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="agi"
                data-action="subtract"
                @click.prevent="attributesBtnClicked($event)"
              >-</button>
            </div>
          </div>

          <div class="mt-3 col-3 d-flex flex-column align-items-center">
            <div class="mx-auto">Inteligence:</div>
            <div class="d-flex align-items-center">
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="int"
                data-action="add"
                @click.prevent="attributesBtnClicked($event)"
              >+</button>
              <span class="mx-2 attribute">{{ inteligence }}</span>
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="int"
                data-action="subtract"
                @click.prevent="attributesBtnClicked($event)"
              >-</button>
            </div>
          </div>

          <div class="mt-3 col-3 d-flex flex-column align-items-center">
            <div class="mx-auto">Strength:</div>
            <div class="d-flex align-items-center">
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="vit"
                data-action="add"
                @click.prevent="attributesBtnClicked($event)"
              >+</button>
              <span class="mx-2 attribute">{{ vitality }}</span>
              <button
                class="btn btn-sm btn-outline-dark"
                data-stat="vit"
                data-action="subtract"
                @click.prevent="attributesBtnClicked($event)"
              >-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Displaying curently selected stuff -->
    <!-- ---------------------------------------------------- -->
    <div class="col-12 mt-5 pt-2">
      <div class="row">
        <div class="col-4" :id="INPUTS.POINTS_LEFT">Points left: {{ pointsLeft }}</div>

        <div class="col-4">Dodge Chance: {{ dodgeChance }}%</div>
        <div class="col-4">Defense Rating: {{ defenseRating | toSemiInteger }}</div>
        <div class="col-4">Attack Power: {{ attackPower | toSemiInteger }}</div>
        <div class="col-4">Magic Power: {{ magicPower | toInteger }}</div>
        <div class="col-4">Health Points: {{ healthPoints | toSemiInteger }}</div>
      </div>
      <div class="col-3 ml-auto">
        <button
          type="submit"
          class="btn btn-outline-primary btn-lg ml-auto"
          @click.prevent="createNewCharacter"
          :disabled="isButtonDisabled"
        >Create Character</button>
        <div id="errorContainer" class="errorContainer errorAnimation displayNone"></div>
      </div>
    </div>
  </div>
</template>
<script src='./CharacterCreationScript.js'>
</script>
<style scoped>
.attribute {
  font-size: 32px;
}
.form-select,
.form-control {
  font-size: 16px;
}
</style>