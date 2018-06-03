<template>
  <div>
    <h3>Drop me a line at any of the following:</h3>
    <section>
      <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" />
      <span>The professional me</span>
    </section>
    <section>
      <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
      <span>I try to be funny here</span>
    </section>
    <section>
      <font-awesome-icon :icon="['fab', 'github']" size="4x" />
      <span>Where I store my shit</span>
    </section>
    <section>
      <font-awesome-icon icon="envelope" size="4x" />
      <span>Compose an electronic letter to stevenjburns@msn.com</span>
    </section>
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
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #707090
  }

  section {
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 12px auto;
    padding: 8px;
    border-radius: 8px;
    width: 240px;
    box-shadow: 4px 4px 16px #000000;
    background: #303050
  }
</style>