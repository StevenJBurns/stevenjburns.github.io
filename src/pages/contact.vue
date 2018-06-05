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
  </div>
</template>

<script>
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
  import { fasEnvelope } from "@fortawesome/fontawesome-free-solid";
  import { fabLinkedin, fabGithub, faTwitter } from "@fortawesome/fontawesome-free-brands";

  export default {
    name: 'PageContact',
    props: {},
    components: {
      FontAwesomeIcon
    },
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    padding: 32px 15%;
    background: #707090
  }

  #divCardWrapper {
    display: flex;
    flex-wrap: wrap;
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

  @media screen and (max-width: 720px) {
    div {
      padding: 32px 5%;
    }
  }
</style>
