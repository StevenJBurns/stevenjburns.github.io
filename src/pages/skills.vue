<template>
  <div id="divPageWrapper">
    <div id="divSkillsList">
      <ul>
        <li />
      </ul>
    </div>
    <div id="divChartWrapper">
      <svg id="svgSkillsChart"></svg>
    </div>
  </div>
</template>

<script>
  import { eventBus } from "../main.js";
  import * as d3 from "d3";
  import {scaleLinear, scaleOrdinal } from "d3-scale";

  export default {
    name: 'PageSkills',
    data() {
      return {
        root: null,
        circle: null,
        currentView: null,
        currentNode: null,
        currentFocus: null,
        skillColors: ["#8B0000", "#556677", "#667788", "#778899", "#8899AA", "#99AABB", "#AABBCC", "#BBCCDD"],
        skillsData: {
          "name": "Skills",
          "children": [
            {
              "name": "Front End",
              "children": [
                { "name": "HTML", "size": 1 },
                { "name": "SVG", "size": 1 },
                { "name": "CSS", "size": 1 },
                { "name": "JavaScript", "size": 1 },
                { "name": "jQuery", "size": 1 },
                { "name": "React", "size": 1 },
                { "name": "Vue", "size": 1 }
              ]
            },
            {
              "name": "Back End",
              "children": [
                { "name": "Node JS", "size": 1 },
                { "name": "Ruby on Rails", "size": 1 },
                { "name": "ASP.NET", "size": 1 },
                { "name": "Java", "size": 1 },
                { "name": "Python", "size": 1 }
              ]
            },
            {
              "name": "Data",
              "children": [
                { "name": "JSON", "size": 1 },
                { "name": "XML", "size": 1 },
                { "name": "SQLite", "size": 1 },
                { "name": "MySql", "size": 1 },
                { "name": "PostgreSQL", "size": 1 },
                { "name": "MSSQL", "size": 1 },
                { "name": "MongoDB", "size": 1 }
              ]
            },
            {
              "name": "Tools & Environment",
              "children": [
                { "name": "Git", "size": 1 },
                { "name": "GitHub", "size": 1 },
                { "name": "NPM", "size": 1 },
                { "name": "CRUD", "size": 1 },
                { "name": "RESTful", "size": 1 }
              ]
            }
          ]
        }
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
      /* lets create a D3 sunburstt chart */
      let width = 512;
      let height = 512;
      let radius = Math.min(height, width) / 2;
      let color = scaleOrdinal(this.skillColors);
      
      // set up the already declared SVG element in the template with height, width, a translate to the center and attach an svg g tag inside
      let g = d3.select("#svgSkillsChart")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);
      
      //
      let partition = d3.partition().size([2 * Math.PI, radius]);

      let root = d3.hierarchy(this.skillsData).sum(d => d.size);

      partition(root);

      let arc = d3.arc()
                  .startAngle(d => d.x0)
                  .endAngle(d => d.x1)
                  .innerRadius(d => d.y0)
                  .outerRadius(d => d.y1);
      
      g.selectAll('path')
       .data(root.descendants())
       .enter()
       .append('path')
       .attr("display", d => d.depth ? null : "none")
       .attr("d", arc)
       .style('stroke', '#DFDFDF')
       .style("fill", d => color((d.children ? d : d.parent).data.name));
      
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  #divPageWrapper {
    flex: 1 0 auto;
    padding: 8px;
    padding-right: 0;
    display: flex;
    flex-direction: row;
    background: #809070
  }

  #divSkillsList {
    min-width: 288px;
    border: 2px solid #777;
    border-radius: 0 16px 16px 0;
    background: #B0C0A0;
  }

  #divChartWrapper {
    width: 100%;
    position: relative;
    text-align: center;
    overflow: hidden
  }

  #svgSkillsChart {
    top: 0;
    left: 0;
    max-height: 512px;
    }
  
  .svglabel {

  }

  @media screen and (max-width: 720px) {
    #divPageWrapper {
      flex: 1 0 auto;
      flex-direction: column;
    }
  }
</style>

