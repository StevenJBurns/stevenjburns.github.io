<template>
  <div>
    <h1>STEVEN J BURNS</h1>
    <img height=120 width=120 src="../assets/bullseye.DDDDDD.png">
    <h2>Full Stack Developer</h2>
    <h3>Longmont&nbsp;&bull;&nbsp;Colorado</h3>
  </div>
</template>

<script>
  export default {
    name: 'PageHome',
    props: {}
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #708090
  }

  img {
    margin: 12px auto;
    display: inline-block
  }
</style>