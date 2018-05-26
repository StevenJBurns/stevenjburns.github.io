<template>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Skills</a></li>
      <li><a href="/">Project</a></li>
      <li><a href="/">Sandbox</a></li>
      <li><a href="/">Contact</a></li>
      <li><a href="/">About</a></li>
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
    width: 72px;
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