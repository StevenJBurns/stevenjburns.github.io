<template>
  <svg height="256" width="256" viewport="0 0 256 256">
    <circle id="front-end" cx="64" cy="64" r="28" stroke="#EE3300" stroke-width="8" fill="#FF4400" />
    <circle id="env-tools" cx="128" cy="128" r="28" stroke="#7F7F7F" stroke-width="8" fill="#BFBFBF" />
    <circle id="back-end" cx="192" cy="192" r="28" stroke="#000088" stroke-width="8" fill="#3333AA" />  
  </svg>
</template>

<script>
  export default {
    name: "SVG-Skills-Chart"
  }
</script>

<style scoped>
  #front-end {
    transition: all 0.5s ease
  }
  #front-end:hover {
    fill: #EE3300
  }
</style>