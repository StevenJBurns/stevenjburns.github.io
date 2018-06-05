<template>
  <div>
    <h3>I am always on the lookout to get involved in a new software development challenge. Drop me a line at any of the following:</h3>
    <div id="divCardWrapper">
      <section>
        <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" />
        <span>Everyone's professional anchor. Add me to your network if we are like-minded.</span>
      </section>
      <section>
        <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
        <span>Find me on Twitter for witty banter and software development related nuggets</span>
      </section>
      <section>
        <font-awesome-icon :icon="['fab', 'github']" size="4x" />
        <span>Fork. Clone. Star. Follow. Where my source code lives and a few front-end projects are hosted</span>
      </section>
      <section>
        <font-awesome-icon icon="envelope" size="4x" />
        <span>Compose an electronic letter... or just send a raven</span>
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
    padding: 32px 5%;
    background: #707090
  }

  #divCardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
  }

  section {
    margin: 16px auto;
    width: 240px;
    height: 120px;
    padding: 8px;
    display: grid;
    border-radius: 8px;
    grid-template-columns: auto 1fr;
    box-shadow: 4px 4px 16px #000000;
    background: #303050;
    text-align: left
  }

  section svg {
    align-self: center
  }

  section span {
    padding-left: 10px;
    align-self: center
  }
</style>
