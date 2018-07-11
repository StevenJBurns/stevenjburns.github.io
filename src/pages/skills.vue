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
      <ChartSunburst :data="currentDataSet" :config="sunburstConfig"></ChartSunburst>
      <div id="divChartFilters">
        <button type="button" @click="changeChartData('Skills')">All Skills</button>
        <button type="button" @click="changeChartData('Front End')">Front End</button>
        <button type="button" @click="changeChartData('Back End')">Server Side</button>
        <button type="button" @click="changeChartData('Data')">Data</button>
        <button type="button" @click="changeChartData('Tools')">Environment &amp; Tools</button>
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
  import d2b from "d2b";
  import { ChartSunburst} from "vue-d2b";

  export default {
    name: 'PageSkills',
    data() {
      return {
        width: 480,
        height: 480,
        sunburstConfig: function (chart) {
          chart.label(d => d.label)
          chart.sunburst().size(d => d.size);
          chart.color(d => d.color);

          chart.chartFrame().legendEnabled(false).breadcrumbsEnabled(false) //.tooltipsEnabled(false)
        },
        currentDataSet: null,
        currentColorSet: "#474747",
        skillColors: {
          all: ["#003300", "#005500", "#006600", "#005500", "#006600", "#99AABB", "#AABBCC", "#BBCCDD"],
          front: ["#9999CC", "#7F7FBF", "#6666B2", "#4C4CA6"],
          back: [],
          data: [],
          tools: []
        },
        skillsAllData: {
          label: "Skills",
          color: "#226622",
          children: [
            {
              label: "Front End",
              color: "#FFD700",
              children: [
                { label: "HTML",
                  color: "#E6C200",
                  children: [
                    { label: "Forms", color: "#CCAC00", size: 1 },
                    { label: "Audio", color: "#CCAC00", size: 1 },
                    { label: "Video", color: "#CCAC00", size: 1 },
                  ] },
                { label: "SVG",
                  color: "#E6C200",
                  children: [
                    { label: "W3C Standard", color: "#CCAC00", size: 2 },
                    { label: "D3", color: "#CCAC00", size: 2 }
                  ] },
                { label: "CSS",
                  color: "#E6C200",
                  children: [
                    { label: "Transitions", color: "#CCAC00", size: 1 },
                    { label: "Animations", color: "#CCAC00", size: 1 },
                    { label: "CSS Flexbox", color: "#CCAC00", size: 1 },
                    { label: "CSS Grid", color: "#CCAC00", size: 1 },
                    { label: "SCSS", color: "#CCAC00", size: 1 },
                    { label: "SASS", color: "#CCAC00", size: 1 }
                  ] },
                { label: "JavaScript",
                  color: "#E6C200",
                  children: [
                    { label: "DOM", color: "#CCAC00", size: 1 },
                    { label: "LocalStorage", color: "#CCAC00", size: 1 },
                    { label: "ES5, ES6, ES7", color: "#CCAC00", size: 1 },
                    { label: "jQuery", color: "#CCAC00", size: 1 },
                    { label: "SPA",
                      color: "#CCAC00",
                      children: [
                      { label: "React", color: "#B39700", size: 1 },
                      { label: "Vue", color: "#B39700", size: 1 }
                      ]
                    },
                  ] 
                },
              ]
            },
            {
              label: "Back End",
              color: "#323299",
              children: [
                { label: "Node JS", color: "#000080", size: 3 },
                { label: "Ruby on Rails", color: "#000080", size: 3 },
                { label: "ASP.NET Core", color: "#000080", size: 3 }
              ]
            },
            {
              label: "Data",
              color: "#7C26CB",
              children: [
                { label: "JSON", color: "#551A8B", size: 2 },
                { label: "XML", color: "#551A8B", size: 2 },
                { label: "SQLite", color: "#551A8B", size: 2 },
                { label: "MySql", color: "#551A8B", size: 2 },
                { label: "PostgreSQL", color: "#551A8B", size: 2 },
                { label: "MSSQL", color: "#551A8B", size: 2 },
                { label: "MongoDB", color: "#551A8B", size: 2 }
              ]
            },
            {
              label: "Tools",
              color: "#E50000",
              children: [
                { label: "Version Control",
                  color: "#B20000",
                  "children": [
                    { label: "Git", color: "#990000", size: 1 },
                    { label: "GitHub", color: "#990000", size: 2 }
                  ]
                },
              { label: "Editors",
                color: "#B20000",
                children: [
                  { label: "Atom", color: "#990000", size: 2 },
                  { label: "Visual Studio Code", color: "#990000", size: 2 },
                  { label: "Visual Studio 2017", color: "#990000", size: 2 },
                ]
              },
                { label: "Hosting",
                  color: "#B20000",
                  children: [
                  { label: "Microsoft Azure", color: "#990000", size: 2 },
                  { label: "Heroku", color: "#990000",size: 2 },
                  ]
                },
                { label: "NPM", color: "#B20000", size: 1 },
                { label: "Yarn", color: "#B20000", size: 1 },
                { label: "NuGet", color: "#B20000", size: 1 },
                { label: "CRUD", color: "#B20000", size: 2 },
                { label: "RESTful", color: "#B20000", size: 1 }
              ]
            }
          ]
        },
        skillsFront: {
          label: "Front End",
          children: [
            { name: "HTML",
              children: [
                { label: "Forms", size: 1 },
                { label: "Audio", size: 1 },
                { label: "Video", size: 1 },
              ] },
            { label: "SVG",
              children: [
                { label: "W3C Standard", size: 2 },
                { label: "D3", size: 2 }
              ] },
            { label: "CSS",
              children: [
                { label: "Transitions", size: 1 },
                { label: "Animations", size: 1 },
                { label: "CSS Flexbox", size: 1 },
                { label: "CSS Grid", size: 1 },
                { label: "SCSS", size: 1 },
                { label: "SASS", size: 1 }
              ] },
            { label: "JavaScript",
              children: [
                { label: "DOM", size: 1 },
                { label: "LocalStorage", size: 1 },
                { label: "ES5, ES6, ES7", size: 1 },
                { label: "jQuery", size: 1 },
                { label: "SPA",
                  children: [
                  { label: "React", size: 1 },
                  { label: "Vue", size: 1 }
                  ]
                },
              ] 
            },
          ]
        },
        skillsBack: {
          label: "Back End",
          "children": [
            { label: "Node JS", size: 3 },
            { label: "Ruby on Rails", size: 3 },
            { label: "ASP.NET Core", size: 3 }
          ]
        },
        skillsData: {
          label: "Data",
          "children": [
            { label: "JSON", size: 2 },
            { label: "XML", size: 2 },
            { label: "SQLite", size: 2 },
            { label: "MySql", size: 2 },
            { label: "PostgreSQL", size: 2 },
            { label: "MSSQL", size: 2 },
            { label: "MongoDB", size: 2 }
          ]
        },
        skillsTools: {
          label: "Tools & Environment",
          "children": [
            { label: "Version Control",
              "children": [
                { label: "Git", size: 1 },
                { label: "GitHub", size: 2 }
              ]
            },
          { label: "Editors",
            "children": [
              { label: "Atom", size: 2 },
              { label: "Visual Studio Code", size: 2 },
              { label: "Visual Studio 2017", size: 2 },
            ]
          },
            { label: "Hosting", "children": [
              { label: "Microsoft Azure", "size": 2 },
              { label: "Heroku", "size": 2 },
              ]
            },
            { label: "NPM", size: 1 },
            { label: "Yarn", size: 1 },
            { label: "NuGet", size: 1 },
            { label: "CRUD", size: 2 },
            { label: "RESTful", size: 1 }
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
      this.currentDataSet = this.skillsAllData;
      // this.currentColorSet = this.skillColors["all"];
      // d3.selectAll('.node').call(d2b.tooltip().clear)
    },
    computed: {

    },
    watch: {

    },
    methods: {
      selectColorScheme: function(slice) {
        switch (slice.label) {
          case "all":

            break;
          case "front":
            console.log(slice.label);
            currentColorSet()
            return this.skillColors[slice.label]
            break;
          case "back":

            break;
          case "data":

            break;
          case "tools":

            break;
          default:
            break;
        }
      },
      changeChartData: function(dataName) {
        // this.currentDataSet = dataName == "Skills" ?
        //                       this.skillsAllData :
        //                       this.skillsAllData.children.filter(k => k.label == dataName)[0];
        
        if (dataName == "Skills") {
          this.currentDataSet = this.skillsAllData
        } else {
          this.currentDataSet = this.skillsAllData.children.filter(k => k.label == dataName)[0]
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
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .vue-d2b-container {
    margin: 16px auto;
    min-height: 304px;
    max-height: 512px;
    min-width: 304px;
    max-width: 512px
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
    #divChartWrapper {
      flex: 1 0 auto;
      flex-direction: column;
    }

    .vue-d2b-container {
      margin: 16px auto;
      height: 304px;
      width: 304px
    }
  }
</style>

