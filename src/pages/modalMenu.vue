<template>
  <transition name="modal">
    <div class="modal-backdrop">
      <nav>
        <ul>
          <li><font-awesome-icon icon="window-close" size="2x" @click="requestResponsiveMenu" /></li>
          <li><router-link tag="li" to="/skills">&lt;Skills /&gt;</router-link></li>
          <li><router-link tag="li" to="/projects">&lt;Projects /&gt;</router-link></li>
          <li><router-link tag="li" to="/contact">&lt;Contact /&gt;</router-link></li>
          <li><router-link tag="li" to="/about">&lt;About /&gt;</router-link></li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script>
  import {eventBus} from "../main.js";
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  import { fasWindowclose } from "@fortawesome/fontawesome-free-solid";

  export default {
    name: 'responsiveMenu',
    components: {
      FontAwesomeIcon
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
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    transition: opacity .3s ease;
  }

  nav {
    height: 240px;
    width: 240x;
    background: #BFBFBF;
    border: 4px solid #DFDFDF;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    transition: all 0.25 ease
  }

  ul {
    width: 240px;
    margin: 4px;
    padding: 2px 4px;
    font-size: 16px;
    list-style: none
  }

  modal-enter {
    opacity: 0
  }

  modal-leave-active {
    opacity: 0
  }

  modal-enter nav {
    transform: scale(1.1)
  }
</style>