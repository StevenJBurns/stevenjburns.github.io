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
    <h2 id="#appTitle">STEVEN J BURNS</h2>
    <hr>
    <Nav :theme="theme"/>
    <font-awesome-icon :icon="['far', 'bars']" size="2x" @click="openResponsiveMenu()" />
  </header>
</template>

<script>
  import Nav from "./appNav.vue";
  import { eventBus } from "../main.js";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { faBars } from "@fortawesome/free-solid-svg-icons";

  export default {
    name: 'Header',
    data() {
      return {
        // theme: {}
      }
    },
    props: {
      theme: Object
    },
    components: {
      Nav,
      FontAwesomeIcon
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
    grid-template-columns: auto max-content 1fr auto auto;
    padding: 8px 8px 8px 0;
    color: #DFDFDF;
    background: transparent;
    text-align: left
  }

  #appLogo {
    margin: 0 12px;
    display: inline-block
  }

  header h2 {
    margin: 0;
    font-size: 2em;
    align-self: center;
    display: inline-block
  }

  h2 a:link,
  h2 a:visited {
    color: #DFDFDF;
    text-decoration: none
  }

  hr {
    border: 0;
    height: 2px;
    margin: 0 24px;
    align-self: center;
    background: linear-gradient(to right, #00000000, #DFDFDF, #00000000);
  }

  nav {
    display: inline-block
  }

  svg {
    display: none
  }

  @media screen and (max-width: 1024px) {
    header h2 {
      margin: 0 auto;
      font-size: 1.5em
    }

    hr {
      display: hidden
    }
  }

  @media screen and (max-width: 800px) {
  header {
    grid-template-columns: auto 1fr auto auto auto;
  }

  svg {
    align-self: center;
    display: inline-block
  }

  nav {
    display: none
  }

  header h2 {
    margin: 0 auto;
    font-size: 1em
  }
}
</style>