<template>
  <div id="app">
    <div class="container mt-5 px-4">
      <div class="row gx-5 min-h">
        <app-menu></app-menu>
        <main-view></main-view>
      </div>
    </div>
  </div>
</template>

<script>
// ADD TOOLTIPS WHEN CREATING CHARACTER
import Menu from "./components/Menu.vue";
import MainView from "./components/MainView.vue";
import { store } from "@/store/Store";

export default {
  name: "App",
  components: {
    appMenu: Menu,
    mainView: MainView,
  },
  beforeCreate() {
    store.commit("clearSelected");
  },
};
</script>
<style>
@font-face {
  font-family: "Ringbearer";
  src: url("./assets/ringbearer.ttf") format("truetype");
}
body {
  font-family: "Ringbearer", Fallback, sans-serif;
  font-size: 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.min-h {
  height: 650px;
}
.errorContainer {
  position: fixed;
  padding: 4rem 8rem;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 60%;
  text-align: center;
  border: 2px solid red;
  background-color: white;
  opacity: 1;
  display: block;
  font-size: 22px;
  font-weight: 600;
  border-radius: 5px;
}
.errorAnimation {
  animation: errorFade 4s linear 0s 1 normal forwards;
}
.displayNone {
  display: none;
}
@keyframes errorFade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.7;
  }
  75% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>