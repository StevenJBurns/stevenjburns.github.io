<template>
  <div id="divPageWrapper">
    <h3>
      I am always on the lookout to get involved in a new software development
      challenge. Drop me a line at any of the following:
    </h3>
    <div id="divCardWrapper">
      <section>
        <a href="https://www.linkedin.com/in/steven-j-burns/">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" />
        </a>
        <span
          >Most everyone's professional anchor. Add me to your network if we are
          like-minded.</span
        >
      </section>
      <section>
        <a href="https://twitter.com/StevenJBurns">
          <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
        </a>
        <span
          >Find me on the Twitters for witty banter and software development
          related nuggets.</span
        >
      </section>
      <section>
        <a href="https://github.com/StevenJBurns">
          <font-awesome-icon :icon="['fab', 'github']" size="4x" />
        </a>
        <span
          >Fork. Clone. Star. Follow. My source code and some front-end hosted
          projects.</span
        >
      </section>
      <section>
        <a href="https://codepen.io/StevenJBurns/">
          <font-awesome-icon :icon="['fab', 'codepen']" size="4x" />
        </a>
        <span
          >Not big enough to be &quot;real&quot; projects yet. My place to
          experiment, prototype and just screw around with code.</span
        >
      </section>
      <section>
        <a href="mailto:stevenjburns@msn.com">
          <font-awesome-icon :icon="['fas', 'envelope']" size="4x" />
        </a>
        <span>Compose an electronic letter. Or just send a raven.</span>
      </section>
    </div>
    <vue-particles
      color="#778899"
      shape-type="circle"
      :particles-number="144"
      :particle-opacity="0.75"
      :lines-distance="96"
      :particle-size="8"
      :move-speed="2"
      :click-effect="false"
    />
  </div>
</template>

<script lang="ts">
  import { eventBus } from "../../main.ts";

  export default {
    name: "Contact",
    props: {
      theme: {
        type: Object,
        default: () => {},
      },
    },
    created() {
      eventBus.$emit("changingTheme", this.theme);
    },
    mounted() {},
    methods: {},
  };
</script>

<style scoped>
  #divPageWrapper {
    flex: 1 0 auto;
    padding: 32px 0;
    background: #707090;
    position: relative;
  }

  h3 {
    margin: 0 32px;
    margin-bottom: 16px;
    color: #303050;
    max-width: 720px;
    font-size: 1.5em;
    display: inline-block;
  }

  #divCardWrapper {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 1080px;
    background: #00000000;
    justify-content: center;
  }

  a:link,
  a:visited {
    color: #f0f0f0;
    text-decoration: none;
    align-self: center;
    transition: color 0.25s ease;
  }

  section {
    z-index: 1;
    padding: 16px;
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 12px;
    width: 288px;
    height: 160px;
    border-radius: 8px;
    grid-template-columns: auto 1fr;
    box-shadow: 4px 4px 16px #000000;
    transition: all 0.25s ease;
    background: #303050;
    text-align: left;
  }

  section:hover {
    background: #404060;
    transform: scale(1.05);
  }

  section:hover a {
    color: yellow;
  }

  section svg {
    margin: 0 8px;
    align-self: center;
  }

  section span {
    padding: 4px;
    align-self: center;
  }

  #particles-js {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media screen and (max-width: 720px) {
    div {
      padding: 32px 5%;
    }
  }
</style>
