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

  import AppHeader from './components/app/AppHeader.vue';
  import AppMain from './components/app/AppMain.vue';
  import AppFooter from './components/app/AppFooter.vue';
  import AppNavBar from './components/app/AppNavBar.vue';
  import ModalNavMenu from './components/pages/ModalNavMenu.vue';

  export default {
    name: 'App',
    data() {
      return {
        showResponsiveMenu: false,
        theme: {},
      }
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter,
      AppNavBar,
      "modal-menu": ModalNavMenu,
    },
    created() {
      eventBus.$on('requestResponsiveMenu', this.toggleResponsiveMenu);
      eventBus.$on('changingTheme', this.changeTheme);      
    },
    beforeDestroy() {
      eventBus.$off('requestResponsiveMenu');
    },
    methods: {
      toggleResponsiveMenu() {
        this.showResponsiveMenu = !this.showResponsiveMenu;
      },
      changeTheme(newTheme: {}) {
        this.theme = newTheme;
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2F2F2F;
  }
</style>
