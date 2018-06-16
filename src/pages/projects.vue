<template>
  <div id="divPageWrapper">
    <h2>Projects</h2>
    <hr>
    <div id="divCardWrapper">
      <section>
        <img>
        <h4>CEA</h4>
      </section>
      <section>
        <img>
        <h4>MeritViewer</h4>
      </section>
      <section>
        <img>
        <h4>Stagecoach Meat Co.</h4>
        <div class="card-overlay">
          <h4>React &bull; ASP.NET Core &bull; Microsoft SQL Server &bull; Azure</h4>
          <span>My first Vue.js endeavor. Originally a bootcamp project using jQuery</span>
        </div>
      </section>
      <section>
        <img>
        <h4>TwoFifteen</h4>
        <div class="card-overlay">
          <h4>React &bull; ASP.NET Core &bull; Microsoft SQL Server &bull; Azure</h4>
          <span>My first Vue.js endeavor. Originally a bootcamp project using jQuery</span>
        </div>
      </section>
      <section>
        <img src="../assets/screenshots/pixelart.png">
        <h4>Pixel-Art</h4>
        <div class="card-overlay">
          <h4>Vue &bull; core HTML and JS APIs</h4>
          <span>My first Vue.js endeavor. Originally a bootcamp project using jQuery</span>
        </div>
      </section>
      <section>
        <img>
        <h4>Franchise Favorites</h4>
      </section>
      <section>
        <img src="../assets/screenshots/extrasolar.png">
        <h4>ExtraSolar</h4>
        <div class="card-overlay">
          <h4>React &bull; HTML5 Canvas</h4>
          <span>The love-child of my astronomy background and web development.</span>
        </div>
      </section>
      <section>
        <img src="../assets/screenshots/noxfit.png">
        <h4>NOX</h4>
        <div class="card-overlay">
          <h4>React &bull; Rails &bull; Postgresql</h4>
          <span>A portal created for a fitness consultant in Colorado Springs, CO</span>
        </div>
      </section>
    </div>
    <div>
      <hr>
      <h2>Some of my smaller efforts are over on <a href="">CodePen</a>. Mostly for quick testing, experiments and prototypes</h2>
    </div>
  </div>
</template>

<script>
  import { eventBus } from "../main.js";

  export default {
    name: 'PageProjects',
    props: {
      theme: Object
    },
    data () {
      return {
        value: 0
      }
    },
    created() {
      eventBus.$emit('changingTheme', this.theme)
    }
  }
</script>

<style scoped>
  #divPageWrapper {
    flex: 1 0 auto;
    padding: 32px 5%;
    background: #707040;
    background: linear-gradient(to bottom right, #303000, #A0A070, #303000);
  }
  
  hr {
    margin: 2em 0
  }

  #divCardWrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    justify-content:center;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    background: transparent
  }

  section {
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 288px;
    background: #909060;
    border-radius: 8px;
    box-shadow: 4px 4px 32px #000000;
    position: relative;
    overflow: hidden
  }

  img {
    width: 240px;
    height: 180px;
    margin: 0 auto;
    border: 2px solid #0F0F0F;
    background: 0F0F0F;
    transition: opacity 0.5s
  }

  section:hover img {
    opacity: 0.25
  }

  .card-overlay {
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    transition: opacity 0.5s;
    position: absolute;
    background: #FFFFAA;
    color: #0F0F0F;
  }

  .card-overlay span {
    text-align: center
  }
  
  section:hover .card-overlay {
    opacity: 0.5
  }

  h4 {

  }
</style>