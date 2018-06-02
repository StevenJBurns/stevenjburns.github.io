<template>
  <svg mlns="http://www.w3.org/2000/svg" height="256" width="256" viewport="0 0 512 512">
    <g>
      <circle id="front-end" cx="64" cy="64" r="28" stroke="#EE3300" stroke-width="8" fill="#FF4400" />
      <text stroke="#DFDFDF" stroke-width="2px">Front End</text>
    </g>
    <g>
      <circle id="env-tools" cx="128" cy="128" r="28" stroke="#7F7F7F" stroke-width="8" fill="#BFBFBF" />
      <text stroke="#DFDFDF" stroke-width="2px">Environments and Tools</text>
    </g>
    <g>
      <circle id="back-end" cx="192" cy="192" r="28" stroke="#000088" stroke-width="8" fill="#3333AA" />
      <text stroke="#DFDFDF" stroke-width="2px">Back End</text>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "SVG-Skills-Chart"
  }
</script>

<style scoped>
  #front-end, #env-tools, #back-end {
    transition: all 0.5s ease
  }

  #front-end:hover {
    fill: #EE3300
  }

  #env-tools:hover {
    fill: #7F7F7F
  }

  #back-end:hover {
    fill: #000088
  }
</style>