<template>
  <header>
    <svg id="appLogo" height="64" width="64" viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="96" fill="#DFDFDF"></circle>
      <circle
        cx="128"
        cy="128"
        r="48"
        fill="none"
        stroke="#2F2F2F"
        stroke-width="24"
      ></circle>
      <polygon
        points="128,128 16,84 62,62 84,16"
        stroke="#2F2F2F"
        stroke-width="8"
        stroke-linejoin="round"
        fill="#F0F0F0"
        fill-opacity="1"
      ></polygon>
    </svg>
    <div id="appTitles">
      <h2 id="appTitle">STEVEN J BURNS</h2>
      <h3 id="appSubtitle">Software Developer</h3>
    </div>
    <hr />
    <AppNavBar :theme="theme" />
    <!-- <font-awesome-icon :icon="['fas', 'bars']" size="2x" @click="openResponsiveMenu()" /> -->
  </header>
</template>

<script>
  import AppNavBar from "./AppNavBar.vue";
  import { eventBus } from "@/main.ts";

  export default {
    name: "AppHeader",
    components: {
      AppNavBar,
    },
    props: {
      theme: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        // theme: {}
      };
    },
    methods: {
      openResponsiveMenu() {
        eventBus.$emit("requestResponsiveMenu");
      },
    },
  };
</script>

<style scoped>
  header {
    display: grid;
    grid-template-columns: auto max-content 1fr auto auto;
    padding: 8px 8px 8px 0;
    color: #dfdfdf;
    background: transparent;
    text-align: left;
  }

  #appLogo {
    margin: 0 12px;
    display: inline-block;
  }

  #appTitles {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-content: stretch */
  }

  #appTitles h2 {
    margin: auto;
    font-size: 1.75em;
    text-align: center;
    flex: 50%;
  }

  #appTitles h3 {
    margin: auto;
    font-size: 1.25em;
    text-align: center;
    flex: 50%;
  }

  h2 a:link,
  h2 a:visited {
    color: #dfdfdf;
    text-decoration: none;
  }

  hr {
    border: 0;
    height: 2px;
    margin: 0 24px;
    align-self: center;
    background: linear-gradient(to right, #00000000, #dfdfdf, #00000000);
  }

  nav {
    display: inline-block;
  }

  svg {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    #appTitles h2 {
      margin: 0 auto;
      font-size: 1.5em;
    }

    #appTitles h3 {
      margin: 0 auto;
      font-size: 1.25em;
    }

    hr {
      display: hidden;
    }
  }

  @media screen and (max-width: 800px) {
    header {
      grid-template-columns: auto 1fr auto auto auto;
    }

    svg {
      align-self: center;
      display: inline-block;
    }

    nav {
      display: none;
    }

    #appTitles h2 {
      padding: 0.5em;
      font-size: 0.9em;
    }

    #appTitles h3 {
      font-size: 0.75em;
    }
  }
</style>
