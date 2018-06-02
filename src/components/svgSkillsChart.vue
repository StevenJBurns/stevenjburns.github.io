<template>
  <svg mlns="http://www.w3.org/2000/svg" version="1.1" height="512" width="512" viewport="0 0 512 512">
    <svg class="sub-svg" x="25%" y="50%" style="overflow: visible;">
      <g class="sub-svg">
        <circle id="front-end" cx="0" cy="0" r="64" stroke="#EE3300" stroke-width="8" fill="#3F3F3F" />
        <text dy="6" text-anchor="middle" >Front End</text>
      </g>
    </svg>
    <svg class="sub-svg" x="50%" y="50%" style="overflow: visible;">
      <g>
        <circle id="env-tools" cx="0" cy="0" r="64" stroke="#5F5F5F" stroke-width="8" fill="#3F3F3F" />
        <text dy="6" text-anchor="middle">Environments and Tools</text>
      </g>
    </svg>
    <svg class="sub-svg" x="75%" y="50%" style="overflow: visible;">
      <g>
        <circle id="back-end" cx="0" cy="0" r="64" stroke="#000088" stroke-width="8" fill="#3F3F3F" />
        <text dy="6" text-anchor="middle">Back End</text>
      </g>
    </svg>
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

  .sub-svg {
    background: #333300;
    transform-origin: center;
    border: 4px solid #0F0F0F
  }

  text {
    fill: #DFDFDF
  }
</style>