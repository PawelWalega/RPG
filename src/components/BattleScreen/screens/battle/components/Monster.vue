<template>
  <div class="d-flex flex-column">
    <div>BIG BAD ORC</div>
    <div>HP: 200</div>
    <div>Attack: Axe swing</div>
    <div>Attack: Power Blow</div>
    <div>Dodge chance: 8%</div>
    <div class="d-flex flex-column">
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 50%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style="width: 75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>