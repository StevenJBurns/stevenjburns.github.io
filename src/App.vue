<template>
  <div id="app">
    <Header />
    <Nav />
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/appHeader.vue';
  import Nav from './components/appNav.vue';
  import Footer from './components/appFooter.vue';
  //import routerview from 'vue-router';

  export default {
    name: 'App',
    components: {
      Header,
      Nav,
      Footer
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    /* min-height: 100% */
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .fade-enter-active {
    transition-delay: 0.5s;
  }

  .fade-enter, .fade-leave-active {
    visibility: visible; 
    opacity: 0
  }
</style>
