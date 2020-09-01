<template>
  <div id="app">
    <div class="container">
      <div class="row py-5">
        <app-menu></app-menu>
        <main-view></main-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import MainView from "./components/MainView.vue";

export default {
  name: "App",
  components: {
    appMenu: Menu,
    mainView: MainView,
  },
};
</script>
<style>
.errorContainer {
  position: fixed;
  padding: 4rem 8rem;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 50%;
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