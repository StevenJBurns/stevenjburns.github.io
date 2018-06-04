<template>
  <div>
    <h3>I am always on the lookout to get involved in a new software development challenge. Drop me a line at any of the following:</h3>
    <div id="divCardWrapper">
      <section>
        <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" />
        <span>Everyone's professional anchor</span>
      </section>
      <section>
        <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
        <span>Find me on Twitter for witty banter and software programming related nuggets</span>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #707090
  }

  #divCardWrapper {
    display: grid;
    grid-column-gap: 32px;
    /* grid-template-columns: 1fr 1fr; */
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    align-self: stretch;
    /* margin: 12px auto; */
    padding: 8px;
    border-radius: 8px;
    box-shadow: 4px 4px 16px #000000;
    background: #303050;
    text-align: left
  }

  section svg {
    align-self: center
  }

  section span {
    padding: 10px
  }
</style>