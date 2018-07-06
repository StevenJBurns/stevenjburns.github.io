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
      <ChartSunburst :data="currentDataset" :config="sunburstConfig"></ChartSunburst>
      <div id="divChartFilters">
        <button type="button" @click="changeChartData('front')">Front End</button>
        <button type="button" @click="changeChartData('back')">Server Side</button>
        <button type="button" @click="changeChartData('data')">Data</button>
        <button type="button" @click="changeChartData('tools')">Environment &amp; Tools</button>
      </div>
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
  import { ChartSunburst} from "vue-d2b";

  export default {
    name: 'PageSkills',
    data() {
      return {
        width: 480,
        height: 480,
        sunburstConfig: function (chart) {
          chart.label(d => d.name)
          chart.sunburst().size(d => d.size);
        },
        currentDataset: null,
        skillColors: ["#003300", "#005500", "#006600", "#005500", "#006600", "#99AABB", "#AABBCC", "#BBCCDD"],
        skillsAllData: {
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
                      ]
                    },
                  ] 
                },
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
        },
        skillsFront: {
          name: "Front End",
          children: [
            { name: "HTML",
              children: [
                { name: "Forms", size: 1 },
                { name: "Audio", size: 1 },
                { name: "Video", size: 1 },
              ] },
            { name: "SVG",
              children: [
                { name: "W3C Standard", size: 2 },
                { name: "D3", size: 2 }
              ] },
            { name: "CSS",
              children: [
                { name: "Transitions", size: 1 },
                { name: "Animations", size: 1 },
                { name: "CSS Flexbox", size: 1 },
                { name: "CSS Grid", size: 1 },
                { name: "SCSS", size: 1 },
                { name: "SASS", size: 1 }
              ] },
            { name: "JavaScript",
              children: [
                { name: "DOM", size: 1 },
                { name: "LocalStorage", size: 1 },
                { name: "ES5, ES6, ES7", size: 1 },
                { name: "jQuery", size: 1 },
                { name: "SPA",
                  children: [
                  { name: "React", size: 1 },
                  { name: "Vue", size: 1 }
                  ]
                },
              ] 
            },
          ]
        },
        skillsBack: {
          "name": "Back End",
          "children": [
            { "name": "Node JS", "size": 3 },
            { "name": "Ruby on Rails", "size": 3 },
            { "name": "ASP.NET Core", "size": 3 }
          ]
        },
        skillsData: {
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
        skillsTools: {
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
      }
    },
    props: {
      theme: Object
    },
    components: {
      "ChartSunburst": ChartSunburst
    },
    created() {
      eventBus.$emit('changingTheme', this.theme)
    },
    mounted() {
      this.currentDataset = this.skillsFront 
    },
    computed: {

    },
    watch: {

    },
    methods: {
      changeChartData: function(dataName) {
        switch(dataName) {
          case "front":
            console.log("front");
            this.currentDataset = this.skillsFront;
            break;
          case "back":
            console.log("back");
            this.currentDataset = this.skillsBack;
            break;
          case "data":
            console.log("data");
            this.currentDataset = this.skillsData;
            break;
          case "tools":
            console.log("tools");
            this.currentDataset = this.skillsTools;
            break;
          default:
            break;
        }
      }
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

  .vue-d2b-container {
    height: 512px;
    width: 512px
    }

  .d2b-chart {
    height: 512px;
    width: 512px
  }

  #divChartFilters {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;    
  }

  #divChartFilters button {
    width: 80px;
    height: 48px;
    text-align: center
  }

  @media screen and (max-width: 720px) {
    #divPageWrapper {
      flex: 1 0 auto;
      flex-direction: column;
    }
  }
</style>

