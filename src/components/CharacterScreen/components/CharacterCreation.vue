<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <!-- SELECTIGN NAME, CLASS AND RACE -->
        <!-- -------------------------- -->
        <div class="mb-3 col-4">
          <label class="form-label">Character name:</label>
          <input type="text" :id="INPUTS.NAME" class="form-control-sm" v-model="character.name" />
        </div>

        <div class="mb-3 col-4">
          <select
            class="form-select form-select-sm"
            :id="INPUTS.RACE"
            @change="raceSelected($event)"
          >
            <option>Select a race:</option>
            <option
              v-for="(race, val) in allRaces"
              :key="val"
              :value="race.identifier"
            >{{ race.name }}</option>
          </select>
        </div>

        <div class="mb-3 col-4">
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
        <!-- TALENTS -->
        <!-- -------------------------------------------- -->
        <div class="mb-3 col-4">
          <label class="form-label">Basic Attack (hover for details):</label>
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
          <label class="form-label">Special Attack (hover for details):</label>
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
          <label class="form-label">Defensive Ability (hover for details):</label>
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

        <!-- Attribute Selection -->
        <!-- --------------------------------------- -->
        <div class="mb-3 col-3 text-center">
          <div class="mb-3 mx-auto">Strength:</div>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="str"
            data-action="add"
            @click.prevent="attributesBtnClicked($event)"
          >+</button>
          <span class="mx-2">{{ strength }}</span>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="str"
            data-action="subtract"
            @click.prevent="attributesBtnClicked($event)"
          >-</button>
        </div>

        <div class="mb-3 col-3 text-center">
          <div class="mb-3 mx-auto">Agility:</div>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="agi"
            data-action="add"
            @click.prevent="attributesBtnClicked($event)"
          >+</button>
          <span class="mx-2">{{ agility }}</span>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="agi"
            data-action="subtract"
            @click.prevent="attributesBtnClicked($event)"
          >-</button>
        </div>

        <div class="mb-3 col-3 text-center">
          <div class="mb-3 mx-auto">Inteligence:</div>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="int"
            data-action="add"
            @click.prevent="attributesBtnClicked($event)"
          >+</button>
          <span class="mx-2">{{ inteligence }}</span>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="int"
            data-action="subtract"
            @click.prevent="attributesBtnClicked($event)"
          >-</button>
        </div>

        <div class="mb-3 col-3 text-center">
          <div class="mb-3 mx-auto">Vitality:</div>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="vit"
            data-action="add"
            @click.prevent="attributesBtnClicked($event)"
          >+</button>
          <span class="mx-2">{{ vitality }}</span>
          <button
            class="btn btn-sm btn-outline-dark"
            data-stat="vit"
            data-action="subtract"
            @click.prevent="attributesBtnClicked($event)"
          >-</button>
        </div>

        <!-- Displaying curently selected stuff -->
        <!-- ---------------------------------------------------- -->
        <div class="col-12 mt-5 pt-2">
          Info:
          <div class="row">
            <div
              class="col-3"
              :id="INPUTS.POINTS_LEFT"
              style="border: 1px solid gray; border-radius: .25rem"
            >Points left: {{ pointsLeft }}</div>
            <div class="col-3">{{ raceName || "No race selected" }}</div>
            <div class="col-3">{{ currentClass || "No class selected" }}</div>
            <div class="col-3"></div>
            <div class="col-12">Stats:</div>
            <div class="col-2">Dodge Chance: {{ dodgeChance }}%</div>
            <div class="col-2">Defense Rating: {{ defenseRating | toSemiInteger }}</div>
            <div class="col-2">Attack Power: {{ attackPower | toSemiInteger }}</div>
            <div class="col-2">Magic Power: {{ magicPower | toInteger }}</div>
            <div class="col-2">Health Points: {{ healthPoints | toSemiInteger }}</div>
            <div class="col-3 ml-auto">
              <button
                type="submit"
                class="btn btn-outline-primary btn-sm ml-auto"
                @click.prevent="createNewCharacter"
                :disabled="isButtonDisabled"
              >Create</button>
              <div id="errorContainer" class="errorContainer errorAnimation displayNone"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./CharacterCreationScript.js'>
</script>