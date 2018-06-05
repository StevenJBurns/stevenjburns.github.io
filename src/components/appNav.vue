<template>
  <nav>
    <ul>
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
      dark: String,
      light: String
    },
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
    font-size: 0.95em
  }

  a:link, a:visited {
    color: #9F9F9F;
    text-align: center;
    text-decoration: none;
    transition: color 0.1s;
    display: inline-block;
  }

  a:hover, a:active {
    color: #DFDFDF
  }

  .router-link-active, .router-link-exact-active {
    color: #3F3F3F;
    background: #BFBFBF
  }
</style>