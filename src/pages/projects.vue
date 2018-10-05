<template>
  <div id="divPageWrapper">
    <h2>My goal in every project is to create the following four attributes</h2>
    <div id="divProjectGoals">
      <section>
        <h2>Performance</h2>
        <font-awesome-icon :icon="['fas', 'fighter-jet']" size="3x" />
        <p>Fast inital load times. Sustained speed during use and transitions.</p>
      </section>
      <section>
        <h2>Responsive</h2>
        <font-awesome-icon :icon="['fas', 'expand-arrows-alt']" size="3x" />
        <p>Websites and apps should look good on any device in any screen resolution.</p>
      </section>
      <section>
        <h2>Dynamic</h2>
        <font-awesome-icon :icon="['fas', 'bolt']" size="3x" />
        <p>Even tiny animations lend a natural look and feel to users.</p>
      </section>
      <section>
        <h2>Secure</h2>
        <font-awesome-icon :icon="['fas', 'lock']" size="3x" />
        <p>Minimal cookies. Very strong password and data protection. Period.</p>
      </section>
    </div>
    <h2>A collection of my recent projects.</h2>
    <p>Click on or hover over a project to see information as well as links to the source code and live websites</p>
    <div id="divCardWrapper">
      <section>
        <img src="../assets/screenshots/extrasolar.png" alt="Project: ExtraSolar">
        <h4>ExtraSolar</h4>
        <div class="card-overlay">
          <span>The love-child of my astronomy background and web development. Real time Exoplanet data pulled from the NASA API and charted on HTML5 canvas.</span>
          <hr class="hrCard">
          <h4>React &bull; Redux &bull; HTML5 Canvas</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="https://github.com/StevenJBurns/extrasolar">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="https://stevenjburns.github.io/extrasolar">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; ASP.NET Core &bull; Microsoft SQL Server &bull; Azure</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="../assets/screenshots/pixelart.png" alt="Project: PixelArt">
        <h4>Pixel-Art</h4>
        <div class="card-overlay">
          <span>My first Vue.js endeavor. Originally a bootcamp project using jQuery. Draw on the canvas. Change colors. Repeat.</span>
          <hr class="hrCard">
          <h4>Vue &bull; core HTML and JS APIs</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src="../assets/screenshots/stagecoach.png" alt="Project: Stagecoach">
        <h4>Stagecoach Meat Co.</h4>
        <div class="card-overlay">
          <span>The Stagecoach Meat Co. in eastern Colorado wanted a very simple infographic-style web page for their customers. So I made this for them.</span>
          <hr class="hrCard">
          <h4>React &bull; SVG &bull;</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="https://github.com/StevenJBurns/stagecoach">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="https://stevenjburns.github.io/stagecoach/">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; JSON</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; SVG &bull; D3js</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; Node &bull; MongoDB</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; OAuth &bull; MongoDB</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; Node &bull; MongoDB</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
          <h4>React &bull; Redux &bull; Node &bull; MongoDB &bull; ARKit</h4>
          <hr class="hrCard">
          <div class="overlay-footer">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'globe']" size="3x" />
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
    <hr class="hrPage">
    <div id="divObservableInfo">
      <svg role="img" viewBox="0 0 24 24" aria-label="Observable" class="black" style="height: 80px; width: 80px; fill: #DFDFDF">
        <path d="M12 21c-1.108 0-2.068-.261-2.88-.783a5.137 5.137 0 0 1-1.867-2.126 11.821 11.821 0 0 1-.952-2.847A16.523 16.523 0 0 1 6 12c0-.862.052-1.686.157-2.474.104-.787.297-1.587.578-2.399.281-.812.643-1.516 1.084-2.113a4.987 4.987 0 0 1 1.735-1.455C10.27 3.186 11.084 3 12 3c1.108 0 2.068.261 2.88.783a5.137 5.137 0 0 1 1.867 2.126c.434.895.751 1.844.952 2.847.2 1.002.301 2.084.301 3.244 0 .862-.052 1.686-.157 2.474a11.76 11.76 0 0 1-.59 2.399c-.29.812-.65 1.516-1.084 2.113-.434.597-1.008 1.082-1.723 1.455-.715.373-1.53.559-2.446.559zm2.118-6.882A2.888 2.888 0 0 0 15 12c0-.824-.287-1.53-.86-2.118C13.566 9.294 12.853 9 12 9c-.853 0-1.566.294-2.14.882A2.925 2.925 0 0 0 9 12c0 .824.287 1.53.86 2.118.574.588 1.287.882 2.14.882.853 0 1.559-.294 2.118-.882zM12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"></path>
      </svg>
      <p><a href="https://beta.observablehq.com/@stevenjburns">Observable</a> is a new service I am trying in addition to CodePen. It's like Jupyter Notebooks for Javascript!</p>
    </div>
  </div>
</template>

<script scoped>
  import { eventBus } from "../main.js";
  // import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  // import { fasGlobe, fasFighterjet, fasExpandarrowsalt, fasBolt, fasLock } from "@fortawesome/free-solid-svg-icons";
  // import { fabGithub, fabCodepen } from "@fortawesome/free-brands-svg-icons";


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
    background: linear-gradient(to bottom right, #303000, #B8860B, #303000);
  }
  
  .hrPage {
    margin: 2em 0
  }

  .hrCard {
    margin: 0.25em 0.5em;
    border-color: #DFDFDF
  }

  #divProjectGoals {
    margin: 32px auto;
    max-width: 640px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center
  }

  #divProjectGoals section {
    margin: 8px;
    width: 160px;
    height: 160px;
    padding: 32px;
    border-radius: 50%;
    text-shadow: 2px 2px 16px #2F2F2F;
    box-shadow: 2px 2px 32px #2F2F2F;
    background: #DAA520;
    transition: all 0.5s
  }

  #divProjectGoals section:hover {
    color: #0F0F0F;
    background: #FFD700
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

  #divCardWrapper section {
    margin: 16px;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 288px;
    background: #B8860B;
    border-radius: 8px;
    box-shadow: 4px 4px 32px #000000;
    position: relative;
    overflow: hidden
  }

  #divCardWrapper section h3 {
    margin: 24px auto
  }

  img {
    width: 240px;
    height: 180px;
    margin: 0 auto;
    border: 2px solid #0F0F0F;
    background: 0F0F0F;
    transition: opacity 0.5s
  }

  #divCardWrapper section:hover img,
  #divCardWrapper section:hover > h4 {
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
    background: #FFD700;
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
    display: flex;
    justify-content: space-around;
    padding: 8px
  }

  .overlay-footer svg {
    color: #0F0F0F
  }

  .overlay-footer a,
  .overlay-footer a:link,
  .overlay-footer a:visited {
    display: inline-block;
    color: #0F0F0F;
  }
  
  section:hover .card-overlay {
    opacity: 1
  }

  #divCodepenInfo, #divObservableInfo {
    display: flex;
    flex-direction: row;
    align-items: center
  }

  #divCodepenInfo p,
  #divObservableInfo p {
    font-size: 1.5em;
    font-weight: bold;
    text-align: left
  }

  #divCodepenInfo svg,
  #divObservableInfo svg {
    margin: 0 24px
  }

  #divCodepenInfo a:link,
  #divObservableInfo a:link,
  #divCodepenInfo a:visited,
  #divObservableInfo a:visited {
    color: #C0C090;
    display: inline !important
  }

  @media screen and (max-width: 640px) {
    #divCodepenInfo,
    #divObservableInfo {
      flex-direction: column
    }

    #divCodepenInfo p,
    #divObservableInfo p {
      font-size: 1.25em;
      text-align: justify
    }
  }
</style>