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
    props: {}
  }
</script>

<style scoped>
  nav {
    padding: 8px 0;
    background: transparent
  }

  ul {
    display: table;
    list-style: none;
    color: #BFBFBF;
  }

  li {
    display: table-cell;
    vertical-align: middle;
    margin: 2px;
    width: 92px;
    height: 32px;
    border-radius: 4px;
    /* display: inline-block; */
    text-align: center;
    font-size: 0.9em
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