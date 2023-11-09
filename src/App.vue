<template>
  <div id="app">
    <Header :theme="theme" />
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <Footer :theme="theme" />
    <modal-menu :theme="theme" v-show="showResponsiveMenu" />
  </div>
</template>

<script>
  /* State Management without Vuex */
  import { eventBus } from "./main.ts";

  /* import app components */
  import Header from './components/appHeader.vue';
  import Nav from './components/appNav.vue';
  import Footer from './components/appFooter.vue';
  import ModalMenu from "./pages/modalMenu.vue";

  export default {
    name: 'App',
    data() {
      return {
        showResponsiveMenu: false,
        theme: {}
      }
    },
    props: {

    },
    components: {
      Header,
      Nav,
      Footer,
      "modal-menu": ModalMenu,
      // "vue-particles" : VueParticles
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
      changeTheme(newTheme) {
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
    overflow: hidden;
  }

  .fade-enter {
    opacity: 0;
    transform: scale(1.75, 1.75)
  }

  .fade-enter-active {
    transition-property: all;
    transition-duration: 0.25s;
  }

  .fade-leave {

  }
  
  .fade-leave-active {
    transition-property: all;
    transition-duration: 0s;
  }
</style>
