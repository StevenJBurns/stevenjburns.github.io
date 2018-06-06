<template>
  <nav>
    <ul @mouseover="mouseOver" @mouseout="mouseOut" @click="linkClick">
      <li><router-link tag="li" to="/skills">&lt;Skills /&gt;</router-link></li>
      <li><router-link tag="li" to="/projects">&lt;Projects /&gt;</router-link></li>
      <li><router-link tag="li" to="/contact">&lt;Contact /&gt;</router-link></li>
      <li><router-link tag="li" to="/about">&lt;About /&gt;</router-link></li>
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
        if (event.target.classList.contains("router-link-active")) {
          event.target.style = `color: #0F0F0F; background: ${this.theme.light}`;
        } else {
          event.target.style = `color: ${this.theme.light}; background: transparent`;
        }
      },
      mouseOut(event) {
        if (event.target.classList.contains("router-link-active")) {
          event.target.style = `color: #0F0F0F; background: ${this.theme.light}`;
        } else {
          event.target.style = `color: #F0F0F0;`;
        }
      },
      linkClick(event) {

        let appTitle = document.querySelector("#appTitle");
        console.log(appTitle);
        
        //appTitle.style = "background: transparent;";

        let listItems = document.querySelectorAll("li");
        listItems.forEach((i) => i.style = "background: transparent;");

        let activeLink = document.querySelector(".router-link-exact-active");
        activeLink.style = `color: #0F0F0F; background: ${this.theme.light};`;

        event.target.style = `background: ${this.theme.light}`;
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
    display: table;
    list-style: none;
    color: #BFBFBF;
  }

  li {
    padding: 2px;
    border-radius: 4px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
    font-size: 0.95em;
    cursor: pointer;
    transition: all 0.25 ease
  }

  a:link, a:visited {
    color: #0F0F0F;
    text-align: center;
    text-decoration: none;
    transition: color 0.25s ease;
    display: inline-block;
  }

  /* .router-link-active, .router-link-exact-active {
    color: #3F3F3F;
    background: #BFBFBF
  } */
</style>