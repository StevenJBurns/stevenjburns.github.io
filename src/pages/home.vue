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
      <!-- <transition name="logo" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave" @after-leave="afterLeave" appear> -->
        <svg xmlns="http://www.w3.org/2000/svg" id="svgHTML5" class="logo" key="html" height="64" width="64" viewBox="0 0 512 512">
          <title>HTML5 Logo</title>
          <polygon fill="#E44D26" points="107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512"/>
          <polygon fill="#F16529" points="256,480.523 376.03,447.246 404.27,130.894 256,130.894"/>
          <polygon fill="#EBEBEB" points="256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 255.843,176.305 142.132,176.305 143.219,188.488 154.38,313.627 256,313.627"/>
          <polygon fill="#EBEBEB" points="256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399"/>
          <path d="M108.382,0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z"/>
          <path d="M205.994,22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z"/>
          <path d="M259.511,0h24.063l14.802,24.26L313.163,0h24.072v69.044h-22.982V34.822l-15.877,24.549h-0.397l-15.888-24.549v34.222h-22.58V0z"/>
          <path d="M348.72,0h23.084v46.222h32.453v22.822H348.72V0z"/>
          <polygon fill="#FFFFFF" points="255.843,268.217 255.843,313.627 311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 349.162,268.217"/>
          <polygon fill="#FFFFFF" points="255.843,176.305 255.843,204.509 255.843,221.605 255.843,221.716 365.385,221.716 365.385,221.716 365.531,221.716 366.442,211.509 368.511,188.488 369.597,176.305"/>
        </svg>
      <!-- </transition>
      <transition name="logo" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave" @after-leave="afterLeave" appear> -->
        <svg xmlns="http://www.w3.org/2000/svg" id="svgCSS3" class="logo" key="logo" width="64" height="64" viewBox="0 0 538.584 538.583">
          <path d="M0 0h538.584v538.583H0V0z" fill="none" />
          <path d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z" fill="#2062af"/>
          <path d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z" fill="#3c9cd7" />
          <path d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" />
          <path d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z" fill="#fff" />
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-825.508" y1="1338.301" x2="-825.508" y2="1419.102" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)">
            <stop offset=".387" stop-color="#d1d3d4" stop-opacity="0" />
            <stop offset="1" stop-color="#d1d3d4" />
          </linearGradient>
          <path d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z" fill="url(#a)" />
          <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-724.552" y1="1378.602" x2="-724.552" y2="1462.591" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)">
            <stop offset=".387" stop-color="#d1d3d4" stop-opacity="0" />
            <stop offset="1" stop-color="#d1d3d4" />
          </linearGradient>
          <path d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z" fill="url(#b)" />
          <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-874.103" y1="1302.263" x2="-680.039" y2="1302.263" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)">
            <stop offset="0" stop-color="#e8e7e5" />
            <stop offset="1" stop-color="#fff" />
          </linearGradient>
          <path d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z" fill="url(#c)" />
          <path d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z" opacity=".05" />
          <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-883.032" y1="1442.031" x2="-672.341" y2="1442.031" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)">
            <stop offset="0" stop-color="#e8e7e5" />
            <stop offset="1" stop-color="#fff"/>
          </linearGradient>
          <path d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z" fill="url(#d)" />
          <path d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z" opacity=".05" />
        </svg>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { TweenLite } from "gsap";
  import { eventBus } from "../main.js";

  export default {
    name: 'PageHome',
    props: {
      theme: Object
    },
    data() {
      return {
        // logos: [],
        // root: null
      }
    },
    components: {
    },
    created() {
      eventBus.$emit('changingTheme', this.theme);
    },
    mounted() {
      let logos = document.querySelectorAll("#divPageBackground svg");
      
      logos.forEach((logo, i) => {
        this.animateLogo(logos[i]);
      });
    },
    beforeDestroy() {

    },
    methods: {
      getRandomPercent() {
        let x = Math.floor(Math.random() * 100);
        return (x <= 25 || x >= 75) ? x : this.getRandomPercent();
      },
      getRandomDuration() {
        return Math.floor(Math.random() * 3) + 0;
      },
      animateLogo: function(target) {
        target.style["top"] = `${this.getRandomPercent()}%`;
        target.style["left"] = `${this.getRandomPercent()}%`;
        target.style["opacity"] = 0;

        let delay = this.getRandomDuration();
        let duration = this.getRandomDuration();

        console.log(target.id, duration);

        TweenLite.to(target, duration, { top: '50%',
                                        left: '50%',
                                        opacity: 0.75,
                                        delay: delay,
                                        onComplete: this.animateLogo,
                                        onCompleteParams: [target] })
      }
    }
  }
</script>

<style scoped>
  :root {

  }

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
    opacity: 0;
    display: inline;
    position: absolute;
    transform-origin: -25% -25%;
  }
</style>