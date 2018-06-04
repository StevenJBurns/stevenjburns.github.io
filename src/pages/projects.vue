<template>
  <div>
    <h2>Projects</h2>
    <hr>
    <div id="divCardWrapper">
      <section>
        <img height="180" width="240">
        <h4>CEA</h4>
      </section>
      <section>
        <img height="180" width="240">
        <h4>MeritViewer</h4>
      </section>
      <section>
        <img height="180" width="240">
        <h4>Stagecoach Meat Co.</h4>
      </section>
      <section>
        <img height="180" width="240">
        <h4>TwoFifteen</h4>
      </section>
      <section>
        <img height="180" width="240">
        <h4>Pixel-Art</h4>
      </section>
      <section>
        <img height="180" width="240">
        <h4>Franchise Favorites</h4>
      </section>
      <section>
        <img height="180" width="240" src="../assets/screenshots/extrasolar.png">
        <h4>ExtraSolar</h4>
      </section>
      <section>
        <img height="180" width="240" src="../assets/screenshots/noxfit.png">
        <h4>NOX</h4>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageProjects',
    props: {},
    data () {
      return {
        value: 0
      }
    }
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    padding: 32px 5%;
    background: #707040
  }
  
  #divCardWrapper {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  section {
    background: #909060;
    border-radius: 8px;
    box-shadow: 4px 4px 16px #000000;
    overflow: hidden
    /* border: 2px solid #0F0F0F */
  }

  h4 {

  }
</style>