<template>
  <div id="divPageWrapper">
    <div id="divSkillsList">
      <ul :v-model="skillsData">
        <li />
      </ul>
    </div>
    <div id="divChartWrapper">
      <svg id="svgSkillsChart" viewbox="0 0 256 256"></svg>
    </div>
  </div>
</template>

<script>
  import { eventBus } from "../main.js";
  import * as d3 from "d3";

  export default {
    name: 'PageSkills',
    data() {
      return {
        width: 480,
        height: 480,
        skillColors: ["#003300", "#005500", "#006600", "#005500", "#006600", "#99AABB", "#AABBCC", "#BBCCDD"],
        skillsData: {
          "name": "Skills",
          "children": [
            {
              "name": "Front End",
              "children": [
                { "name": "HTML", "size": 1 },
                { "name": "SVG", "size": 1 },
                { "name": "CSS",
                  "children": [
                    { "name": "Transition & Animation", "size": 1 },
                    { "name": "Grid & Flexbox", "size": 1 },
                    { "name": "SASS & SCSS", "size": 1 }
                  ] },
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
                { "name": "Ruby on Rails", "size": 2 },
                { "name": "ASP.NET Core", "size": 1 },
                { "name": "Java", "size": 2 },
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
                { "name": "GitHub", "size": 2 },
                { "name": "Atom", "size": 2 },
                { "name": "Visual Studio Code", "size": 2 },
                { "name": "Visual Studio 2017", "size": 2 },
                { "name": "Microsoft Azure", "size": 2 },
                { "name": "Heroku", "size": 2 },
                { "name": "NPM", "size": 1 },
                { "name": "Yarn", "size": 1 },
                { "name": "NuGet", "size": 1 },
                { "name": "CRUD", "size": 2 },
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
      // grab the skills svg element and set h, w, and translate it to the center
      let g = d3.select('#svgSkillsChart')
                .attr('width', this.width)
                .attr('height', this.height)
                .append('g')
                .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
      
      // create a D3 heirarchical partition chart
      let partition = d3.partition().size([2 * Math.PI, this.radius]);

      // set the root as the top level object from the skillsData
      // the D3 sum() will attach a value attribute to each node
      let root = d3.hierarchy(this.skillsData).sum(d => d.size);

      // feed the data structure (root) to the partition style chart
      partition(root);

      // create visual arcs for each object in the data, relative to the size of root
      let arc = d3.arc()
                  .startAngle(d => d.x0)
                  .endAngle(d => d.x1)
                  .innerRadius(d => d.y0)
                  .outerRadius(d => d.y1);
      
      // create g element for each arc in the data hierarchy
      let slice = g.selectAll('g.node')
                    .data(root.descendants(), d => d.data.name);
      
      let newSlice = slice.enter()
                          .append('g')
                          .attr("class", "node")
                          .merge(slice);
      
      slice.exit().remove();

      slice.selectAll('path').remove();

      newSlice.append('path').attr("display", d => d.depth ? null : "none")
            .attr("d", arc)
            .style('stroke', '#809070')
            .style("fill", d => this.getColor(d.depth));

      // Populate the <text> elements with our data-driven titles.
      slice.selectAll('text').remove();

      newSlice.append("text")
              .attr("transform", d => `translate(${arc.centroid(d)}) rotate(${this.computeTextRotation(d)})`)
              .attr("dx", "-20")
              .attr("dy", "0.5em")
              .text(d => d.parent ? d.data.name : "");
    },
    computed: {
      radius: function() { return Math.min(this.height, this.width) / 2 }
    },
    methods: {
      computeTextRotation: function(d) {
        return 0;
      },
      getColor: function(depth) {
        let colors = [
          { yellow: ["#FDD835", "#FBC02D", "#F9AC25"] },
          { amber: ["#FFB300", "#FFA000", "#FF8F00"] },
          { orange: ["#FB8C00", "#F57C00", "#EF6C00"] },
          { red: ["#F44336", "#E53935", "#D32F2F"] }
        ];
        console.log(depth);
        
        return !depth ? "red" : colors[1].amber[depth - 1]
;      }
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

