<template>
  <nav :theme="theme">
    <ul @mouseover="mouseOver" @mouseout="mouseOut">
      <li><router-link class="menu-item" to="/">HOME</router-link></li>
      <li><router-link class="menu-item" to="/skills">SKILLS</router-link></li>
      <li><router-link class="menu-item" to="/projects">PROJECTS</router-link></li>
      <li><router-link class="menu-item" to="/contact">CONTACT</router-link></li>
      <li><router-link class="menu-item" to="/about">ABOUT</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        currentTheme: this.theme
      }
    },
    props: {
      theme: Object
    },
    beforeUpdate() {
      document.querySelectorAll(".menu-item").style = "background: transparent";
      document.querySelector(".router-link-exact-active").style = `background: ${this.theme.light}`;
    },
    updated() {
      document.querySelectorAll(".menu-item").style = "background: transparent";
      document.querySelector(".router-link-exact-active").style = `background: ${this.theme.light}`;
    },
    methods: {
      mouseOver(event) {
        // if (event.target.classList.contains("router-link-active")) {
        //   event.target.style = `color: #0F0F0F; background: ${this.theme.light}`;
        // } else {
        //   event.target.style = `color: ${this.theme.light}; background: transparent`;
        // }
      },
      mouseOut(event) {
        // if (event.target.classList.contains("router-link-active")) {
        //   event.target.style = `color: #0F0F0F; background: ${this.theme.light}`;
        // } else {
        //   event.target.style = `color: #F0F0F0;`;
        // }
      },
    },
    computed: {
      styleActiveLink() {
        
      }
    },
    watch: {
      '$route'() {
        //document.querySelector(".router-link-exact-active").style = `background: ${this.theme.light}` 
      }
    }
  }
</script>

<style scoped>
  nav {
    padding: 0;
    background: transparent;
    align-self: center;
  }

  ul {
    display: flex;
    list-style: none;
    color: #BFBFBF;
  }

  li {
    margin: 2px;
    padding: 2px;
    width: 80px;
    border-radius: 4px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
    font-size: 0.95em;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5 ease
  }

  .menu-item {
    display: table-cell;
    background: transparent;    
  }

  a:link,
  a:visited {
    width: 100%;
    color: #F0F0F0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: all 0.5s ease;
  }

  /* .router-link-active, */
  .router-link-exact-active {
    color: #0F0F0F;
    background: transparent;
    transition: all 0.5s ease
  }
</style>