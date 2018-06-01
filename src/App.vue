<template>
  <div id="app">
    <Header />
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
    <modal-menu v-show="showResponsiveMenu" />
  </div>
</template>

<script>
  /* State Management without Vuex */
  import { eventBus } from "./main.js";
  import Header from './components/appHeader.vue';
  import Nav from './components/appNav.vue';
  import Footer from './components/appFooter.vue';
  import ModalMenu from "./pages/modalMenu.vue"

  export default {
    name: 'App',
    data() {
      return {
        showResponsiveMenu: false
      }
    },
    components: {
      Header,
      Nav,
      Footer,
      "modal-menu": ModalMenu
    },
    created() {
      eventBus.$on('requestResponsiveMenu', this.toggleResponsiveMenu);
    },
    beforeDestroy() {
      eventBus.$off('requestResponsiveMenu');
    },
    methods: {
      toggleResponsiveMenu() {
        this.showResponsiveMenu = !this.showResponsiveMenu;
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
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2F2F2F;

    display: flex;
    flex-direction: column;
    min-height: 100vh
  }

  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    color: #DFDFDF;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: all;
    transition-duration: 0.2s;
  }

  .fade-enter-active {
    transition-delay: 0.1s;
  }

  .fade-enter, .fade-leave-active {
    transform: scale(0.75, 0.75);
    opacity: 0
  }
</style>
