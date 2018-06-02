<template>
  <div>
    <h3>Skills</h3>
    <skills-chart />
  </div>
</template>

<script>
  import SkilsChart from "../components/svgSkillsChart.vue";

  export default {
    name: 'PageSkills',
    props: {},
    components: {
      "skills-chart": SkilsChart
    }
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #809070
  }

  svg {
    /* height: 100%; */
    width: 100%;
    display: block
  }
</style>

