<template>
  <div class="modal-backdrop">
    <nav>
      <ul>
        <li><font-awesome-icon icon="window-close" size="2x" /></li>
        <li><router-link tag="li" to="/skills">&lt;Skills /&gt;</router-link></li>
        <li><router-link tag="li" to="/projects">&lt;Projects /&gt;</router-link></li>
        <li><router-link tag="li" to="/contact">&lt;Contact /&gt;</router-link></li>
        <li><router-link tag="li" to="/about">&lt;About /&gt;</router-link></li>
      </ul>
    </nav>
  </div>
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
      closeModalCancel() {
        eventBus.$emit('modalClearGridRequested');
      },
      closeModalNoSave() {
        eventBus.$emit('clear-grid');
        eventBus.$emit('modalClearGridRequested');
      },
      closeModalAndSave() {

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
    /* padding: 24px; */
    background: #BFBFBF;
    border: 4px solid #DFDFDF;
    /* box-shadow: 2px 2px 20px 1px; */
    overflow-x: auto;
    display: flex;
    flex-direction: row;
  }

  ul {
    width: 240px;
    margin: 4px;
    padding: 2px 4px;
    font-size: 16px;
    list-style: none
  }
</style>