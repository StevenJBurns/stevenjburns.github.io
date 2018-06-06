<template>
  <nav>
    <ul @mouseover="mouseOver" @mouseout="mouseOut">
      <li class="menu-item"><router-link tag="li" to="/">HOME</router-link></li>
      <li class="menu-item"><router-link tag="li" to="/skills">SKILLS</router-link></li>
      <li class="menu-item"><router-link tag="li" to="/projects">PROJECTS</router-link></li>
      <li class="menu-item"><router-link tag="li" to="/contact">CONTACT</router-link></li>
      <li class="menu-item"><router-link tag="li" to="/about">ABOUT</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    props: {
      theme: Object
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
    border-radius: 4px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
    font-size: 0.95em;
    cursor: pointer;
    transition: all 0.5 ease
  }

  a:link,
  a:visited {
    color: #0F0F0F;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: all 0.5s ease;
  }

  /* .router-link-active, */
  .router-link-exact-active {
    color: #0F0F0F;
    background: #BFBFBF;
    transition: all 0.5s ease
  }
</style>