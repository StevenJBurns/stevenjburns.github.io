<template>
  <header>
    <h2>
      <router-link to="/">STEVEN J BURNS</router-link>
      </h2>
    <Nav />
    <font-awesome-icon icon="bars" size="2x" @click="openResponsiveMenu()" />
  </header>
</template>

<script>
  import Nav from "./appNav.vue";
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  import { fasBars } from "@fortawesome/fontawesome-free-solid";
  import { eventBus } from "../main.js";

  export default {
    name: 'Header',
    components: {
      Nav,
      'font-awesome-icon': FontAwesomeIcon
    },
    methods: {
      openResponsiveMenu() {
        eventBus.$emit('requestResponsiveMenu');
      }
    }
  }
</script>

<style scoped>
  header {
    display: grid;
    grid-template-columns: 1fr auto auto;
    padding: 12px;
    color: #DFDFDF;
    background: transparent;
    text-align: left
  }

  header h2 {
    display: inline-block
  }

  h2 a:link,
  h2 a:visited {
    color: #DFDFDF;
    text-decoration: none
  }

  Nav {
    display: inline-block
  }

  svg {
    display: none
  }

  @media screen and (max-width: 600px) {
  svg { display: inline }
  
  nav {
    display: none
  }
}
</style>