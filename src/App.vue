<template>
  <div id="app">
    <Header />
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/appHeader.vue';
  import Nav from './components/appNav.vue';
  import Main from './components/appMain.vue';
  import Footer from './components/appFooter.vue';

  export default {
    name: 'app',
    components: {
      Header,
      Nav,
      Main,
      Footer
    }
  }
</script>

<style>
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
    min-height: 100vh;
  }
</style>
