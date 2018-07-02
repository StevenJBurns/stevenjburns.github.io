<template>
  <div id="divPageWrapper">
    <h1>Learning All The Things</h1>
    <hr>
    <h3>There are a dizzying array of technolgies used in building websites and apps. As a developer I fight to keep my skills sharp and strengthen my understanding of how all the pieces fit together. My ear is always to the ground anticipating the next big thing in software.  There is no silver bullet technology stack to solve every problem. Understanding the problem and grabbing the right tools for the job.</h3>
    <h3>Not everyone speaks the language of the web technologies. That doesn't mean a customer has no vision of what they want a digital product to look like at the end of the process. Below I have created two lists. The first is a general overview of the skills I bring to the table without muddying the conversation about specific languages, frameworks, libraries, etc. Below the first list is an interactive visual chart  is what I call a hardcore approach to  </h3>
    <ul>
      <li>Re-design. Go from 1998 to 2018 with modern HTML5 and JavaScript.</li>
      <li>Modernize existing sites &amp; apps. Let a server do the heavy lifting.</li>
      <li>Dynamic but subtle effects. Even a splash of animation or 3D goes a long way.</li>
      <li>Responsive design. Your app should look good on any device at any resolution.</li>
      <li>Data-driven websites &amp; apps &bull; Dynamic, interactive, animated charts.</li>
      <li>Secure connections. Secure passwords, Secure Data. Period.</li>
      <li>Cutting edge, reactive apps with high performance in mind.</li>
    </ul>
    <hr>
    <div id="divChartWrapper">
      <h3>If you're in a long-term hiring mood for someone with specific skills, the interactive charts below contain a broad (and hierarchical) overview of the skill sets.</h3>
      <svg id="svgSkillsChart" viewbox="0 0 256 256"></svg>
    </div>
    <hr>
    <h3>Successful software developers <strong><em>never</em></strong> stop learning. The industry moves rapidly. Last year's darling technology can be a legacy technology next year. A legacy technology may be born again to evolve with the times. Below is a list of tech stacks, methods and languages I hope to pursue in my free time to further my toolset </h3>
    <ul>
      <li>Progressive Web Apps (PWA)</li>
      <li>Native Android Apps</li>
      <li>Python &amp; Data Science</li>
      <li>More Ruby</li>
      <li>Angular</li>
      <li>Amazon Web Services</li>
      <li>Web Assembly</li>
      <li>GraphQL</li>
      <li>Redis</li>
    </ul>
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
                { "name": "HTML",
                  "children": [
                    { "name": "Forms", "size": 1 },
                    { "name": "Audio", "size": 1 },
                    { "name": "Video", "size": 1 },
                  ] },
                { "name": "SVG",
                  "children": [
                    { "name": "W3C Standard", "size": 2 },
                    { "name": "D3", "size": 2 }
                  ] },
                { "name": "CSS",
                  "children": [
                    { "name": "Transitions", "size": 1 },
                    { "name": "Animations", "size": 1 },
                    { "name": "CSS Flexbox", "size": 1 },
                    { "name": "CSS Grid", "size": 1 },
                    { "name": "SCSS", "size": 1 },
                    { "name": "SASS", "size": 1 }
                  ] },
                { "name": "JavaScript",
                  "children": [
                    { "name": "DOM", "size": 1 },
                    { "name": "LocalStorage", "size": 1 },
                    { "name": "ES5, ES6, ES7", "size": 1 },
                    { "name": "jQuery", "size": 1 },
                    { "name": "SPA",
                      "children": [
                      { "name": "React", "size": 1 },
                      { "name": "Vue", "size": 1 }
                      ] },
                  ] },
              ]
            },
            {
              "name": "Back End",
              "children": [
                { "name": "Node JS", "size": 3 },
                { "name": "Ruby on Rails", "size": 3 },
                { "name": "ASP.NET Core", "size": 3 }
              ]
            },
            {
              "name": "Data",
              "children": [
                { "name": "JSON", "size": 2 },
                { "name": "XML", "size": 2 },
                { "name": "SQLite", "size": 2 },
                { "name": "MySql", "size": 2 },
                { "name": "PostgreSQL", "size": 2 },
                { "name": "MSSQL", "size": 2 },
                { "name": "MongoDB", "size": 2 }
              ]
            },
            {
              "name": "Tools & Environment",
              "children": [
                { "name": "Version Control",
                  "children": [
                    { "name": "Git", "size": 1 },
                    { "name": "GitHub", "size": 2 }
                  ]
                },
              { "name": "Editors",
                "children": [
                  { "name": "Atom", "size": 2 },
                  { "name": "Visual Studio Code", "size": 2 },
                  { "name": "Visual Studio 2017", "size": 2 },
                ]
              },
                { "name": "Hosting", "children": [
                  { "name": "Microsoft Azure", "size": 2 },
                  { "name": "Heroku", "size": 2 },
                  ]
                },
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
            .style("fill", d => this.getColor(d));

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
        let angle = (d.x0 + d.x1) / Math.PI * 90;
        console.log(angle);
        return angle < 180 ? angle - 90 : angle + 90;
      },
      getColor: function(d) {
        let colors = [
          { yellow: ["#FDD835", "#FBC02D", "#F9AC25"] },
          { amber: ["#FFB300", "#FFA000", "#FF8F00", "#FF6F00"] },
          { orange: ["#FB8C00", "#F57C00", "#EF6C00"] },
          { red: ["#F44336", "#E53935", "#D32F2F"] }
        ];
        //console.log(d);
        
        if (!d.depth) return "red";
        
        let p = d.parent;
        //console.log(p);
        
        return colors[1].amber[d.depth - 1]
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
    flex-direction: column;
    background: #809070
  }

  hr {
    margin: 0.25em 0.5em;
    border-color: #DFDFDF
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

  @media screen and (max-width: 720px) {
    #divPageWrapper {
      flex: 1 0 auto;
      flex-direction: column;
    }
  }
</style>

