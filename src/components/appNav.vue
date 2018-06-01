<template>
  <nav>
    <ul>
      <li><router-link to="/">&lt;Home /&gt;</router-link></li>
      <li><router-link to="/skills">&lt;Skills /&gt;</router-link></li>
      <li><router-link to="/projects">&lt;Projects /&gt;</router-link></li>
      <li><router-link to="/contact">&lt;Contact /&gt;</router-link></li>
      <li><router-link to="/about">&lt;About /&gt;</router-link></li>
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
    color: #BFBFBF;
    list-style: none
  }

  li {
    margin: 2px;
    width: 96px;
    height: 32px;
    border-radius: 4px;
    display: inline-block
  }

  a:link, a:visited {
    color: #9F9F9F;
    text-align: center;
    text-decoration: none;
    transition: color 0.1s
  }

  a:hover, a:active {
    color: #DFDFDF
  }
</style>