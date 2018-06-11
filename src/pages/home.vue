<template>
  <div id="divPageWrapper">
    <section>
    <h2>Full Stack Developer</h2>
    <h3>Learning All The Things</h3>
    <svg height="192" width="192" viewBox="0 0 256 256">
      <defs>
        <filter id="drop-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="4" dy="4" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <circle cx="128" cy="128" r="96" fill="#F0F0F0" filter="url(#drop-shadow)">
        <animate attributeType="XML" attributeName="r" from="0" to="96" dur="0.75s" fill="freeze" />
      </circle>
      <circle cx="128" cy="128" r="0" fill="none" stroke="#708090FF" stroke-width="24">
        <animate attributeType="XML" attributeName="r" begin="0.75s" from="0" to="50" dur="0.75s" fill="freeze" />
      </circle>
      <polygon opacity="0" points="128,128 16,84 62,62 84,16" stroke="#708090FF" stroke-width="8" stroke-linejoin="round" fill="#F0F0F0" fill-opacity="1">
        <animate attributeType="XML" attributeName="opacity" begin="1.5s" from="0" to="1" dur="0.5s" fill="freeze" />
        <animateTransform attributeName="transform" type="translate" from="-24 -24" to="0 0" begin="1.5s" dur="0.5s" fill="freeze" />
      </polygon>
    </svg>
    <h2>Longmont&nbsp;&bull;&nbsp;Colorado</h2>
    </section>
    <div id="divPageBackground">
      <div v-html="require('../assets/logos/html5.svg')" />
      <div v-html="require('../assets/logos/svg.svg')" />
      <div v-html="require('../assets/logos/css3.svg')" />
      <div v-html="require('../assets/logos/javascript.svg')" />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { eventBus } from "../main.js";

  // import svgHTML from "../assets/logos/html5.svg";
  // import svgSVG from "../assets/logos/svg.svg";
  // import svgCSS from "../assets/logos/css3.svg";
  // import svgJS from "../assets/logos/javascript.svg";

  export default {
    name: 'PageHome',
    props: {
      theme: Object
    },
    components: {

    },
    created() {
      eventBus.$emit('changingTheme', this.theme);
    }
  }
</script>

<style scoped>
  #divPageWrapper {
    flex: 1 0 auto;
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at center, #708090 0%, #001020 100%);
    text-shadow: 2px 2px 16px #2F2F2F;
    position: relative;
  }

  section {
    padding: 24px;
    width: 288px;
    height: 288px;
    background: #708090BB;
    box-shadow: 2px 2px 12px #000000;
    border-radius: 50%;
    z-index: 1;
  }

  #divPageBackground {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent
  }

  .logo {
    top: 0;
    left: 0;
    opacity: 1;
    display: inline;
    position: absolute;
    animation: move 1 ease-in 1s;
    transform-origin: -25% -25%
  }

  @keyframes move {
    25% { opacity: 0.5}
    50% { transform: scale(0.75) }
    100% { top: 50%; left: 50%; opacity: 0.9; transform: scale(0) }
  }
</style>