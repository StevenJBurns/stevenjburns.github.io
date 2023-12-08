<template>
  <div id="app">
    <AppHeader :theme="theme" />
    <AppMain />
    <AppFooter :theme="theme" />
    <!-- <modal-menu :theme="theme" v-show="showResponsiveMenu" /> -->
  </div>
</template>

<script lang="ts">
  /* State Management without Vuex */
  import { eventBus } from "./main.ts";

  import AppHeader from "./components/app/appHeader.vue";
  import AppMain from "./components/app/appMain.vue";
  import AppFooter from "./components/app/appFooter.vue";
  // import AppNavBar from "./components/app/AppNavBar.vue";
  // import ModalNavMenu from "./components/pages/ModalNavMenu.vue";

  export default {
    name: "App",
    components: {
      AppHeader,
      AppMain,
      AppFooter,
      // AppNavBar,
      // "modal-menu": ModalNavMenu,
    },
    data() {
      return {
        showResponsiveMenu: false,
        theme: {},
      };
    },
    created() {
      eventBus.$on("requestResponsiveMenu", this.toggleResponsiveMenu);
      eventBus.$on("changingTheme", this.changeTheme);
    },
    beforeDestroy() {
      eventBus.$off("requestResponsiveMenu");
    },
    methods: {
      toggleResponsiveMenu() {
        this.showResponsiveMenu = !this.showResponsiveMenu;
      },
      changeTheme(newTheme: object) {
        this.theme = newTheme;
      },
    },
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2f2f2f;
  }
</style>
