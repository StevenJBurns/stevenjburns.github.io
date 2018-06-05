<template>
  <footer>
    <nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/steven-j-burns/" :style="{color: this.hoverColor}" @mouseover="mouseOver()" @mouseout="mouseOut()">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/StevenJBurns" :style="{color: hoverColor}" @mouseover="mouseOver()" @mouseout="mouseOut()">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
          </a>
        </li>        <li>
          <a href="https://github.com/StevenJBurns" :style="{color: hoverColor}" @mouseover="mouseOver()" @mouseout="mouseOut()">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
        </li>
        <li>
          <a href="mailto:stevenjburns@msn.com?subject=You're%20Hired" :style="{color: hoverColor}" @mouseover="mouseOver()" @mouseout="mouseOut()">
            <font-awesome-icon icon="envelope" size="2x" />
          </a>
        </li>
      </ul>
    </nav>
    <h4>&copy;2018 &bull; Steven J Burns</h4>
  </footer>
</template>

<script>
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  import { fasEnvelope } from "@fortawesome/fontawesome-free-solid";
  import { fabLinkedin, fabTwitter, fabGithub } from "@fortawesome/fontawesome-free-brands";

  export default {
    name: 'Footer',
    components: {
      FontAwesomeIcon
    },
    props: {
      theme: Object
    },
    data() {
      return {
        hoverColor: this.theme.light
      }
    },
    methods: {
      mouseOver() {
        this.hoverColor = this.theme.light;
      },
      mouseOut() {
        this.hoverColor = "#DFDFDF";
      }
    },
    computed:{
      // style() {
      //   return this.isMouseOverLink ? `color: ${this.theme.light}` : 'color: #DFDFDF'
      // }
    },
    created() {
      console.log(`footer props: ${this.theme}`);
    }
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
    margin: 8px;
    padding: 2px;
    border-radius: 4px;
    display: inline-block
  }

  a:link, a:visited {
    color: #DFDFDF;
    text-decoration: none;
    transition: color 0.25s ease
  }

  /* a:hover, a:active {
    color: #DFDFDF;
    color: #708090;
  } */
</style>