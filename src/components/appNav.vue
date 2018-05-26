<template>
  <nav>
    <ul>
      <li><router-link to="/">&lt;Home /&gt;</router-link></li>
      <li><router-link to="skills">&lt;Skills /&gt;</router-link></li>
      <li><router-link to="projects">&lt;Projects /&gt;</router-link></li>
      <li><router-link to="sandbox">&lt;Sandbox /&gt;</router-link></li>
      <li><router-link to="contact">&lt;Contact /&gt;</router-link></li>
      <li><router-link to="about">&lt;About /&gt;</router-link></li>
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
    background: #9F9F9F;
  }

  ul {
    list-style: none
  }

  li {
    margin: 2px;
    width: 96px;
    background: #BFBFBF;
    display: inline-block;
    border-radius: 4px;
  }

  a:link, a:visited {
    color: #2F2F2F;
    text-align: center;
    text-decoration: none;
    cursor: default
  }

  a:hover, a:active {
    background: #BFBFBF
  }
</style>