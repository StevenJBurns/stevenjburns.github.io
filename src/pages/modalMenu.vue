<template>
  <transition name="modal" :theme="theme">
    <div class="modal-backdrop">
      <nav class="nav-modal">
        <font-awesome-icon icon="['fas', 'times-circle']" size="2x" @click="requestResponsiveMenu" />
        <ul @click="requestResponsiveMenu">
          <li><router-link tag="li" to="/">Home</router-link></li>
          <li><router-link tag="li" to="/skills">Skills</router-link></li>
          <li><router-link tag="li" to="/projects">Projects</router-link></li>
          <li><router-link tag="li" to="/contact">Contact</router-link></li>
          <li><router-link tag="li" to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
  </transition>
</template>


<script>
  import { eventBus } from "../main.js";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { fasTimescircle } from "@fortawesome/free-solid-svg-icons";

  export default {
    name: 'responsiveMenu',
    components: {
      FontAwesomeIcon
    },
    data() {
      return {};
    },
    props: {
      theme: Object
    },
    beforeUpdate() {
      document.querySelector(".nav-modal").style = `background: ${this.theme.dark}`;
    },
    methods: {
      requestResponsiveMenu() {
        eventBus.$emit('requestResponsiveMenu');
      }
    }
  }
</script>


<style scoped>
  .modal-backdrop {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 2;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    transition: opacity 0.25s ease;
  }

  nav {
    display: flex;
    flex-direction: column;
    background: #445566;
    border: 4px solid #778899;
    border-radius: 8px;
    transition: all 0.25 ease;
    height: 240px;
    width: 240px;
    color: #DFDFDF
  }

  svg {
    margin: 8px;
  }
  
  ul {
    width: 240px;
    margin: 4px;
    font-size: 16px;
    list-style: none;
  }

  li {
    display: table;
    height: 32px;
    width: 100%;
    text-align: center;
    vertical-align: middle
  }

  /* Vue generated transition classes */
  .modal-enter, .modal-leave-to {
    opacity: 0
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.25s ease
  }
</style>