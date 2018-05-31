<template>
  <footer>
    <nav>
      <ul>
        <!-- <li><a href="/">Home</a></li> -->
        <li>
          <a href="https://www.linkedin.com/in/steven-j-burns/">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/StevenJBurns">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
        </li>
        <li>
          <a href="mailto:stevenjburns@msn.com?subject=You're%20Hired">
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
  import { fabLinkedin, fabGithub } from "@fortawesome/fontawesome-free-brands";

  export default {
    name: 'Footer',
    components: {
      FontAwesomeIcon
    },
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
    /* width: 80px; */
    margin: 12px;
    padding: 4px;
    border-radius: 4px;
    /* background: #7F7F7F; */
    display: inline-block
  }

  a:link, a:visited {
    color: #DFDFDF;
    text-decoration: none;
    transition: color 0.25s
  }

  a:hover, a:active {
    color: #708090;
  }
</style>