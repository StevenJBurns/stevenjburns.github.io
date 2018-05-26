<template>
  <div>
    <Header />
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/appHeader.vue';
  import Nav from './components/appNav.vue';
  import Footer from './components/appFooter.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Nav,
      Footer,
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0
  }

  div {
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
