<template>
  <div>
    <h3>I am always on the lookout to get involved in a new software development challenge. Drop me a line at any of the following:</h3>
    <div id="divCardWrapper">
      <section>
        <a href="https://www.linkedin.com/in/steven-j-burns/">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" />
        </a>
        <span>Most everyone's professional anchor. Add me to your network if we are like-minded.</span>
      </section>
      <section>
        <a href="https://twitter.com/StevenJBurns">
          <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
        </a>
        <span>Find me on the Twitters for witty banter and software development related nuggets.</span>
      </section>
      <section>
        <a href="https://github.com/StevenJBurns">
          <font-awesome-icon :icon="['fab', 'github']" size="4x" />
        </a>
        <span>Fork. Clone. Star. Follow. My source code and some front-end hosted projects.</span>
      </section>
      <section>
        <a href="mailto:stevenjburns@msn.com">
          <font-awesome-icon icon="envelope" size="4x" />
        </a>
        <span>Compose an electronic letter. Or just send a raven.</span>
      </section>
    </div>
    <div id='particles-js'></div>
  </div>
</template>

<script>
  import { eventBus } from "../main.js";
  //import particlesJS from "particles.js";
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  import { fasEnvelope } from "@fortawesome/fontawesome-free-solid";
  import { fabLinkedin, fabGithub, faTwitter } from "@fortawesome/fontawesome-free-brands";

  // import HTML5 from "../assets/logos/HTML5.svg";
  // import CSS3 from "../assets/logos/css3.svg";
  // import JS from "../assets/logos/javascript.svg";

  export default {
    name: 'PageContact',
    props: {
      theme: Object
    },
    components: {
      FontAwesomeIcon
    },
    created() {
      eventBus.$emit('changingTheme', this.theme)
    },
    mounted() {
      let particlesJS = require('particles.js');
      this.$nextTick(() => this.initParticlesJS());
    },
    methods: {
      initParticlesJS () {
        /* eslint-disable */
        particlesJS('particles-js', {
          'particles': {
            'number': {
              'value': 64,
              'density': {
                'enable': true,
                'value_area': 800
              }
            },
            'color': {
              'value': '#7F7F7F'
            },
            'shape': {
              'type': "image",
              'stroke': {
                'width': 0,
                'color': '#7F7F7F'
              },
              'polygon': {
                'nb_sides': 5
              },
              'image': {
                'src': 'images/html5.png',
                'width': 256,
                'height': 256
              }
            },
            'opacity': {
              'value': 0.75,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 64,
              'random': true,
              'anim': {
                'enable': true,
                'speed': 48,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 192,
              'color': '#FFFFFF',
              'opacity': 0.25,
              'width': 2
            },
            'move': {
              'enable': true,
              'speed': 2,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
              'onhover': {
                'enable': false,
                'mode': 'repulse'
              },
              'onclick': {
                'enable': true,
                'mode': 'push'
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 800,
                'line_linked': {
                  'opacity': 1
                }
              },
              'bubble': {
                'distance': 800,
                'size': 80,
                'duration': 2,
                'opacity': 0.8,
                'speed': 3
              },
              'repulse': {
                'distance': 400,
                'duration': 0.4
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': true
        })
      }
    }
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    padding: 32px 15%;
    background: #707090;
    position: relative;
  }

  #divCardWrapper {
    display: flex;
    flex-wrap: wrap;
    background: #00000000;
    z-index: 1;
    justify-content: space-evenly
  }

  a:link, a:visited {
    color: #F0F0F0;
    text-decoration: none;
    align-self: center;
    transition: color 0.25s ease
  }

  section {
    display: grid;
    margin: 16px auto;
    width: 256px;
    height: 160px;
    border-radius: 8px;
    grid-template-columns: auto 1fr;
    box-shadow: 4px 4px 16px #000000;
    background: #303050;
    text-align: left;
    transition: all 0.25s ease
  }

  section:hover {
    background: #404060;
    transform: scale(1.05)
  }

  section:hover a {
    color: yellow;
  }

  section svg {
    margin: 0 8px;
    align-self: center
  }

  section span {
    padding: 4px;
    align-self: center
  }

  #particles-js {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0
  }

  @media screen and (max-width: 720px) {
    div {
      padding: 32px 5%;
    }
  }
</style>
