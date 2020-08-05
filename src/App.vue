<template>
  <div id="app">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 py-5">
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