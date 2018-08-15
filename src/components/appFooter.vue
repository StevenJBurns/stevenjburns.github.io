<template>
  <footer>
    <nav>
      <ul>
        <li @mouseover.capture="mouseOver" @mouseout.capture="mouseOut">
          <a href="https://www.linkedin.com/in/steven-j-burns/">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
          </a>
        </li>
        <li @mouseover.capture="mouseOver" @mouseout.capture="mouseOut">
          <a href="https://twitter.com/StevenJBurns">
            <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
          </a>
        </li>
        <li @mouseover.capture="mouseOver" @mouseout.capture="mouseOut">
          <a href="https://github.com/StevenJBurns">
            <font-awesome-icon :icon="['fab', 'github']" size="3x" />
          </a>
        </li>
        <li @mouseover.capture="mouseOver" @mouseout.capture="mouseOut">
          <a href="https://codepen.io/StevenJBurns/#">
            <font-awesome-icon :icon="['fab', 'codepen']" size="3x" />
          </a>
        </li>
        <li @mouseover.capture="mouseOver" @mouseout.capture="mouseOut">
          <a href="mailto:stevenjburns@msn.com?subject=You're%20Hired">
            <font-awesome-icon :icon="['fas', 'envelope']" size="3x" />
          </a>
        </li>
      </ul>
    </nav>
    <h4>&copy;2018 &bull; Steven J Burns</h4>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      theme: Object
    },
    data() {
      return {
        isMouseOver: false,
        hoverColor: this.theme.light
      }
    },
    methods: {
      mouseOver(event) {        
        event.target.style = `color: ${this.theme.light}; transition: color 0.25s ease;`;
      },
      mouseOut(event) {
        event.target.style = "color: #DFDFDF; transition: color 0.25s ease;";
      }
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
  }

  @media screen and (max-width: 480px) {
    li {
      font-size: 0.75em;
    }
  }
</style>