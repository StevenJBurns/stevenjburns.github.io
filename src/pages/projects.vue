<template>
  <div id="divPageWrapper">
    <h2>A collection of projects</h2>
    <p>Click or over to see information and links for a given project</p>
    <div id="divCardWrapper">
      <section>
        <img src="../assets/screenshots/extrasolar.png">
        <h4>ExtraSolar</h4>
        <div class="card-overlay">
          <span>The love-child of my astronomy background and web development. Real time Exoplanet data from the NASA API charted</span>
          <hr class="hrCard">
          <h4>React &bull; HTML5 Canvas</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img>
        <h4>TwoFifteen</h4>
        <div class="card-overlay">
          <span>All sports lend themselves to data analysis and visualization. I couldn't find a clean, free baseball API. So I made my own.</span>
          <hr class="hrCard">
          <h4>React &bull; ASP.NET Core &bull; Microsoft SQL Server &bull; Azure</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="../assets/screenshots/pixelart.png">
        <h4>Pixel-Art</h4>
        <div class="card-overlay">
          <span>My first Vue.js endeavor. Originally a bootcamp project using jQuery</span>
          <hr class="hrCard">
          <h4>Vue &bull; core HTML and JS APIs</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img>
        <h4>CEA</h4>
        <div class="card-overlay">
          <span>One of my very first programming projects rewritten in Angular </span>
          <hr class="hrCard">
          <h4>Angular &bull; ASP.NET Core &bull; MySql</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img>
        <h4>MeritViewer</h4>
        <div class="card-overlay">
          <span>An info tool for an old video game I used to play. An experiment that turned into a program.</span>
          <hr class="hrCard">
          <h4>React JS &bull; JSON</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img>
        <h4>Stagecoach Meat Co.</h4>
        <div class="card-overlay">
          <span>The Stagecoach Meat Co. in eastern Colorado wanted a very simple infographic-style web page for their customers. So I made this for them.</span>
          <hr class="hrCard">
          <h4>React &bull; SVG &bull;</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img>
        <h4>Franchise Favorites</h4>
        <div class="card-overlay">
          <span>A gee whiz</span>
          <hr class="hrCard">
          <h4>React JS &bull; OAuth &bull; MongoDB</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="../assets/screenshots/noxfit.png">
        <h3>NOX</h3>
        <div class="card-overlay">
          <span>A customer portal and discrete admin access created for a fitness consultant in Colorado Springs, CO</span>
          <hr class="hrCard">
          <h4>React &bull; Rails &bull; Postgresql &bull; OAuth</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="http://noxfit.com/">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="">
        <h3>Web-Dev-Roadmap</h3>
        <div class="card-overlay">
          <span>Infographic depicting some standard routes to learn web development heavily influenced by my subjective experience </span>
          <hr class="hrCard">
          <h4>React &bull; SVG &bull; D3js</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="">
        <h3>Web-Dev-Quiz</h3>
        <div class="card-overlay">
          <span>Test your knowledge and wits on topics considered to be important in web develpment</span>
          <hr class="hrCard">
          <h4>React &bull; Node JS &bull; MongoDB</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="">
        <h3>LogBook</h3>
        <div class="card-overlay">
          <span>Pilots are required to keep a log of flying hours and aviation events. Why not transform that static trove of data into a modern interactive visualization?</span>
          <hr class="hrCard">
          <h4>React &bull; Node JS &bull; MongoDB</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="">
        <h3>Airfield<sup>+</sup></h3>
        <div class="card-overlay">
          <span>A first stab at augmented reality. Use a mobile device to visualize aviation flight paths, approaches and patterns!</span>
          <hr class="hrCard">
          <h4>React &bull; Node JS &bull; MongoDB &bull; ARKit</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon icon="globe" size="3x" />
            </a>
          </div>
        </div>
      </section>

    </div>
    <hr class="hrPage">
    <div id="divCodepenInfo">
      <font-awesome-icon :icon="['fab', 'codepen']" size="5x" />
      <p>Some of my smaller efforts are hosted on <a href="https://codepen.io/StevenJBurns">CodePen</a> for quick testing, experiments and prototypes</p>
    </div>
  </div>
</template>

<script scoped>
  import { eventBus } from "../main.js";
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  import { fasGlobe } from "@fortawesome/fontawesome-free-solid";
  import { fabGithub, fabCodepen } from "@fortawesome/fontawesome-free-brands";


  export default {
    name: 'PageProjects',
    components: {
      FontAwesomeIcon
    },
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
  
  .hrPage {
    margin: 2em 0
  }

  .hrCard {
    margin: 0.25em 0.5em;
    border-color: #0F0F0F
  }

  #divCardWrapper {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    background: transparent;
    max-width: 960px;
  }

  section {
    margin: 16px;
    padding: 16px 0;
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

  section h3 {
    margin: 12px auto
  }

  img {
    width: 240px;
    height: 180px;
    margin: 0 auto;
    border: 2px solid #0F0F0F;
    background: 0F0F0F;
    transition: opacity 0.5s
  }

  section:hover img,
  section:hover > h4 {
    opacity: 0
  }

  .card-overlay {
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    transition: opacity 0.5s;
    position: absolute;
    background: #B0B080;
    color: #0F0F0F;
    display: flex;
    flex-direction: column
  }

  .card-overlay span {
    padding: 0.5em;
    padding-bottom: 0;
    font-weight: bold;
    text-align: justify;
    flex: 1 0 auto
  }

  .card-overlay h4 {
    padding: 0 8px;
    text-align: center
  }

  .overlay-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 8px
  }

  .overlay-footer svg {

  }

  .overlay-footer a:link,
  .overlay-footer a:visited {
    margin: 0 12px;
    color: #0F0F0F;
    display: inline
  }
  
  section:hover .card-overlay {
    opacity: 1
  }

  #divCodepenInfo {
    display: flex;
    flex-direction: row;
    align-items: center
  }

  #divCodepenInfo p {
    font-size: 1.5em;
    font-weight: bold;
    text-align: left
  }

  #divCodepenInfo svg {
    margin: 0 24px
  }

  #divCodepenInfo a:link,
  #divCodepenInfo a:visited {
    color: #C0C090;
    display: inline !important
  }

  @media screen and (max-width: 640px) {
    #divCodepenInfo {
      flex-direction: column
    }

  #divCodepenInfo p {
    font-size: 1.25em;
    text-align: justify
    }
  }
</style>