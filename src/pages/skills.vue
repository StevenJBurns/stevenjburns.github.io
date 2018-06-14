<template>
  <div>
    <div id="svgWrapper">
      <svg id="svgSkillsChart" height="480" width="480" viewbox="0 0 2048 2048" @click="svgClicked"></svg>
    </div>
  </div>
</template>

<script>
  import { eventBus } from "../main.js";

  import * as d3 from "d3";
  import { TweenLite } from "gsap";
  import AppData from "../data/skillsHierarchy.json";

  export default {
    name: 'PageSkills',
    data() {
      return {
        skillZoomLevel: 0,
        skillDepthColors: ["#445566", "#556677", "#667788", "#778899", "#8899AA", "#99AABB", "#AABBCC", "#BBCCDD"]
      }
    },
    props: {
      theme: Object
    },
    components: {

    },
    created() {
      eventBus.$emit('changingTheme', this.theme)
    },
    mounted() {
      const svg = d3.select("#svgSkillsChart");
      let g = svg.append("g").attr("transform", "translate(2,2)");

      let diameter;
      let format = d3.format(",d");

      let pack = d3.pack().padding(8).size([480, 480]);
      let root = d3.hierarchy(AppData).sum(d => d.size);

      let node = g.selectAll(".node")
        .data(pack(root).descendants())
        .enter()
        .append("g")
        .attr("class", d => d.children ? "node" : "leaf node")
        .attr("transform", d => `translate(${d.x}, ${d.y})`)
        .on("click", this.svgClicked);

      node.append("title").text(d => d.data.name);

      node.append("circle")
        .attr("r", d => d.r)
        .style("fill", d => this.skillDepthColors[d.depth]);

      node.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "6")
        .style("fill", "#DFDFDF")
        .text(d => d.data.name)
    },
    methods: {
      svgClicked: function(event) {
        console.log(event);

        d3.select(event.target).transition().duration(500).style("fill", "navy").style("stroke", "red")
      },
      zoom: function(d) {

      },
      addActiveClass: function(target) {
        target.parentNode.classList.add("active-node");
        console.log("new active", target.parentNode);
      },
      removeActiveClass: function(active) {
        active.classList.remove("active-node");
        console.log("old active", active);
      }
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

  #svgWrapper {
    margin: 24px;
  }
</style>

