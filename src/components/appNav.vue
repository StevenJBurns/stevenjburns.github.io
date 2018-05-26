<template>
  <nav>
    <ul>
      <li><a href="/">&lt;Home /&gt;</a></li>
      <li><a href="/skills">&lt;Skills /&gt;</a></li>
      <li><a href="/projects">&lt;Projects /&gt;</a></li>
      <li><a href="/sandbox">&lt;Sandbox /&gt;</a></li>
      <li><a href="/contact">&lt;Contact /&gt;</a></li>
      <li><a href="/about">&lt;About /&gt;</a></li>
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