<template>
  <div>
    <!-- <h3>Skills</h3> -->
    <svg id="svgPackChart" height="512" width="512"></svg>
  </div>
</template>

<script>
  import * as d3 from "d3";
  import AppData from "../data/skillsHierarchy.json";


  
  export default {
    name: 'PageSkills',
    data() {
      return {
        colors: ["#445566", "#778899", "#AABBCC"]
      }
    },
    props: {},
    components: {

    },
    mounted() {
      const svg = d3.select("#svgPackChart");
      let g = svg.append("g").attr("transform", "translate(2,2)");
      let format = d3.format(",d");
      // let diameter;

      let pack = d3.pack().size([480, 480]).padding(8);
      let root = d3.hierarchy(AppData).sum(d => d.size);

      let node = g.selectAll(".node")
        .data(pack(root).descendants())
        .enter()
        .append("g")
        .attr("class", d => d.children ? "node" : "leaf node")
        .attr("transform", d => `translate(${d.x}, ${d.y})`);

      node.append("title").text(d => d.data.name /* + "\n" + format(d.value) */ );

      node.append("circle")
        .attr("r", d => d.r)
        .style("fill", d => this.colors[d.depth]);

      node.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "6")
        .style("fill", "#DFDFDF")


      // node.filter(d => !d.children)
      //   .append("text")
      //   .attr("dy", "0.3em")
      //   .text(d => d.data.name.substring(0, d.r / 3));
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
</style>

