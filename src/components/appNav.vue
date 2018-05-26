<template>
  <nav>
    <ul>
      <li>Home</li>
      <li>Skills</li>
      <li>Project</li>
      <li>Sandbox</li>
      <li>Contact</li>
      <li>About</li>
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
    color: #DFDFDF;
    background: #7F7F7F;
    display: inline-block;
    border-radius: 4px;
    text-align: center
  }
</style>