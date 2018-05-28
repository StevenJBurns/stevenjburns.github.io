<template>
  <footer>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Email</a></li>
      </ul>
    </nav>
    <h4>&copy;2018 &bull; Steven J Burns</h4>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {}
  }
</script>

<style scoped>
  footer {
    padding: 12px;
    color: #DFDFDF;
    background: transparent
  }

  ul {
    list-style: none
  }

  li {
    width: 80px;
    margin: 8px 4px;
    padding: 4px;
    border-radius: 4px;
    background: #7F7F7F;
    display: inline-block
  }

  a:link, a:visited {
    color: #DFDFDF;
    text-decoration: none
  }

  a:hover, a:active {
    color: #DFDF00;
  }
</style>