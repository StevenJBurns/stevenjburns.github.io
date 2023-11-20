<template>
  <nav :theme="theme">
    <ul>
      <li @mouseover.capture="handleMouseOver" @mouseout.capture="handleMouseOut">
        <router-link class="menu-item" to="/">HOME</router-link>
      </li>
      <li @mouseover.capture="handleMouseOver" @mouseout.capture="handleMouseOut">
        <router-link class="menu-item" to="/skills">SKILLS</router-link>
      </li>
      <li @mouseover.capture="handleMouseOver" @mouseout.capture="handleMouseOut">
        <router-link class="menu-item" to="/projects">PROJECTS</router-link>
        </li>
      <li @mouseover.capture="handleMouseOver" @mouseout.capture="handleMouseOut">
        <router-link class="menu-item" to="/contact">CONTACT</router-link>
        </li>
      <li @mouseover.capture="handleMouseOver" @mouseout.capture="handleMouseOut">
        <router-link class="menu-item" to="/about">ABOUT</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'AppNavBar',
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
        color: #0f0f0f;
        display: table-cell;
        vertical-align: middle;
        background: ${this.theme.light}`;

      document.querySelectorAll("a:not(.router-link-exact-active)")
        .forEach((e) => { e.style =
          `width: 100%;
          display: table-cell;
          vertical-align: middle;
          background: transparent`
        });
    },
    methods: {
      handleMouseOver(event) {
        if (event.target.classList.contains("router-link-exact-active")) return;

        event.target.style =
          `width: 100%;
          height: 100%;
          display: table-cell;
          vertical-align: middle;
          background: ${this.theme.dark}`;
      },
      handleMouseOut(event) {
        if (event.target.classList.contains("router-link-exact-active")) return;

        event.target.style =
          `width: 100%;
          height: 100%;
          color: #F0F0F0;
          display: table-cell;
          vertical-align: middle;
          background: transparent`;
      },
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
    flex-direction: row;
    list-style: none;
    color: #BFBFBF;
  }

  li {
    margin: 2px;
    height: 32px;
    width: 96px;
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
    display: table-cell;
    transition: all 0.5s ease;
  }

  /* .router-link-active, */
  .router-link-exact-active {
    color: #0F0F0F;
    background: transparent;
    transition: all 0.5s ease
  }
</style>