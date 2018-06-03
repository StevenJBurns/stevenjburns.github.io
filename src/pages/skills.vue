<template>
  <div>
    <h3>Skills</h3>
    <div id="divSkillsChart"></div>
    <!-- <skills-chart /> -->
  </div>
</template>

<script>
  //import SkilsChart from "../components/svgSkillsChart.vue";

  export default {
    name: 'PageSkills',
    props: {},
    components: {

    }
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    background: #809070
  }

  #divSkillsChart {
    flex: 1 0 auto;
    background: maroon
  }
</style>

