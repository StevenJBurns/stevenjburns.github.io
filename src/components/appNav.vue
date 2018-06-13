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
      document.querySelector(".router-link-exact-active").style =
        `width: 100%;
        display: table-cell;
        vertical-align: middle;
        background: ${this.theme.light};
        border-radius: 4px;`;

      document.querySelectorAll("a:not(.router-link-exact-active)")
        .forEach((e) => { e.style =
          `width: 100%;
          display: table-cell;
          vertical-align: middle;
          background: transparent;
          border-radius: 4px;`
        });
    },
    methods: {
      mouseOver(event) {
        if (event.target.classList.contains("router-link-exact-active")) return;

        event.target.style =
          `width: 100%;
          color: ${this.theme.light};
          display: table-cell;
          vertical-align: middle;
          background: ${this.theme.dark}`;
      },
      mouseOut(event) {
        if (event.target.classList.contains("router-link-exact-active")) return;

        event.target.style =
          `width: 100%;
          color: #F0F0F0;
          display: table-cell;
          vertical-align: middle;
          background: transparent`;
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
    height: 32px;
    width: 96px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    overflow: hidden;
    background: #2F2F2F;
    transition: all 0.5 ease;
    display: table;
  }

  .menu-item {
    background: transparent;    
  }

  a:link,
  a:visited {
    width: 100%;
    height: 100%;
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