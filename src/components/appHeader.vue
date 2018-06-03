<template>
  <header>
    <svg id="appLogo" height="64" width="64" viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="96" fill="#DFDFDF">
      </circle>
      <circle cx="128" cy="128" r="48" fill="none" stroke="#2F2F2F" stroke-width="24">
      </circle>
      <polygon points="128,128 16,84 62,62 84,16" stroke="#2F2F2F" stroke-width="8" stroke-linejoin="round" fill="#F0F0F0" fill-opacity="1">
      </polygon>
    </svg>
    <h3>
      <router-link to="/">STEVEN J BURNS</router-link>
    </h3>
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
    grid-template-columns: auto 1fr auto auto;
    padding: 12px;
    color: #DFDFDF;
    background: transparent;
    text-align: left
  }

  #appLogo {
    display: inline-block
  }

  header h3 {
    align-self: center
}

  h3 a:link,
  h3 a:visited {
    color: #DFDFDF;
    text-decoration: none
  }

  Nav {
    display: inline-block
  }

  svg {
    display: none
  }

  @media screen and (max-width: 720px) {
  svg { display: inline }
  
  nav {
    display: none
  }
}
</style>