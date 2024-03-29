<template>
  <div id="divPageWrapper">
    <h1>Learning All The Things</h1>
    <!-- <hr> -->
    <p>
      There are a dizzying array of technolgies used in building websites and
      apps. As a developer I fight to keep my skills sharp and strengthen my
      understanding of how all the pieces fit together. My ear is always to the
      ground anticipating the next big thing in software. There is no silver
      bullet technology stack to solve every problem. The best approach is to
      understand the problem and then grab the right tools for the job.
    </p>
    <p>
      Not everyone speaks the language of the web technologies. That doesn't
      mean a customer has no vision of what they want a digital product to look
      like at the end of the process. Below I have created two lists. The first
      is a general overview of the skills I bring to the table without muddying
      the conversation about specific languages, frameworks, libraries, etc.
      Below the first list is an interactive visual chart is what I call a
      hardcore approach to
    </p>
    <ul id="ul-skills-general">
      <li>Re-design. Go from 1998 to 2018 with modern HTML5 and JavaScript.</li>
      <li>
        Modernize existing sites &amp; apps. Let a server do the heavy lifting.
      </li>
      <li>
        Dynamic but subtle effects. Even a splash of animation or 3D goes a long
        way.
      </li>
      <li>
        Responsive design. Your app should look good on any device at any
        resolution.
      </li>
      <li>
        Data-driven websites &amp; apps &bull; Dynamic, interactive, animated
        charts.
      </li>
      <li>Secure connections. Secure passwords, Secure Data. Period.</li>
      <li>Cutting edge, reactive apps with high performance in mind.</li>
    </ul>
    <hr />
    <div id="divChartWrapper">
      <h3>
        If you're in a long-term hiring mood for someone with specific skills,
        the interactive charts below contain a broad (and hierarchical) overview
        of the skill sets.
      </h3>
      <ChartSunburst
        :data="currentDataSet"
        :config="sunburstConfig"
      ></ChartSunburst>
      <div id="divChartFilters">
        <button type="button" @click="changeChartData('Skills')">
          All Skills
        </button>
        <button type="button" @click="changeChartData('Front End')">
          Front End
        </button>
        <button type="button" @click="changeChartData('Back End')">
          Server Side
        </button>
        <button type="button" @click="changeChartData('Data')">Data</button>
        <button type="button" @click="changeChartData('Tools')">
          Environment &amp; Tools
        </button>
      </div>
    </div>
    <hr />
    <p id="p-future-skills">
      Successful software developers <strong><em>never</em></strong> stop
      learning. The industry moves rapidly. Last year's darling technology can
      be a legacy technology next year. A legacy technology may be born again to
      evolve with the times. Below is a list of tech stacks, methods and
      languages I hope to pursue in my free time to further my toolset
    </p>
    <ul id="ul-future-skills">
      <li><span>Progressive Web Apps (PWA)</span></li>
      <li><span>Android Apps</span></li>
      <li><span>Python &amp; Data Science</span></li>
      <li><span>More Ruby</span></li>
      <li><span>Angular</span></li>
      <!-- <li><span>Amazon Web Services</span></li> -->
      <li><span>Web Assembly</span></li>
      <li><span>GraphQL</span></li>
      <li><span>Redis</span></li>
    </ul>
  </div>
</template>

<script>
  // import d2b from "d2b";
  // import * as d3 from "d3";
  import { ChartSunburst } from "vue-d2b";
  import { eventBus } from "@/main.ts";

  export default {
    name: "Skills",
    components: {
      ChartSunburst: ChartSunburst,
    },
    props: {
      theme: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        pageWidth: 0,
        pageHeight: 0,
        currentDataSet: null,
        sunburstConfig: function (chart) {
          chart.innerRadius(0);
          //chart.outerRadius(158);
          chart.label((d) => d.label);
          chart.color((d) => d.color);
          chart.sunburst().size((d) => d.size);
          chart.sunburst().ancestorPadding(0);
          chart.sunburst().zoomable(false);
          chart
            .chartFrame()
            .size({ height: this.pageHeight - 16, width: this.pageWidth - 16 });
          chart.chartFrame().legendEnabled(false).breadcrumbsEnabled(false);

          // d3.selectAll("g").append("text")
          // .call(d => console.log(d.y))
          // .attr("x", d => d.x)
          // .attr("dx", "6")
          // .attr("dy", ".35em")
          // .text(d => d.label);
        },
        skillsData: {
          label: "Skills",
          color: "#226622",
          children: [
            {
              label: "Front End",
              color: "#FFD700",
              children: [
                {
                  label: "HTML",
                  color: "#E6C200",
                  children: [
                    { label: "Forms", color: "#CCAC00", size: 1 },
                    { label: "Audio", color: "#CCAC00", size: 1 },
                    { label: "Video", color: "#CCAC00", size: 1 },
                  ],
                },
                {
                  label: "SVG",
                  color: "#E6C200",
                  children: [
                    { label: "W3C Standard", color: "#CCAC00", size: 2 },
                    { label: "D3", color: "#CCAC00", size: 2 },
                  ],
                },
                {
                  label: "CSS",
                  color: "#E6C200",
                  children: [
                    { label: "Transitions", color: "#CCAC00", size: 1 },
                    { label: "Animations", color: "#CCAC00", size: 1 },
                    { label: "CSS Flexbox", color: "#CCAC00", size: 1 },
                    { label: "CSS Grid", color: "#CCAC00", size: 1 },
                    { label: "SCSS", color: "#CCAC00", size: 1 },
                    { label: "SASS", color: "#CCAC00", size: 1 },
                  ],
                },
                {
                  label: "JavaScript",
                  color: "#E6C200",
                  children: [
                    { label: "DOM", color: "#CCAC00", size: 1 },
                    { label: "LocalStorage", color: "#CCAC00", size: 1 },
                    { label: "ES5, ES6, ES7", color: "#CCAC00", size: 1 },
                    { label: "jQuery", color: "#CCAC00", size: 1 },
                    {
                      label: "SPA",
                      color: "#CCAC00",
                      children: [
                        { label: "React", color: "#B39700", size: 1 },
                        { label: "Vue", color: "#B39700", size: 1 },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Back End",
              color: "#323299",
              children: [
                { label: "Node JS", color: "#000080", size: 3 },
                { label: "Ruby on Rails", color: "#000080", size: 3 },
                { label: "ASP.NET Core", color: "#000080", size: 3 },
              ],
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
                { label: "MongoDB", color: "#551A8B", size: 2 },
              ],
            },
            {
              label: "Tools",
              color: "#E50000",
              children: [
                {
                  label: "Version Control",
                  color: "#B20000",
                  children: [
                    { label: "Git", color: "#990000", size: 1 },
                    { label: "GitHub", color: "#990000", size: 2 },
                  ],
                },
                {
                  label: "Editors",
                  color: "#B20000",
                  children: [
                    { label: "Atom", color: "#990000", size: 2 },
                    { label: "Visual Studio Code", color: "#990000", size: 2 },
                    { label: "Visual Studio 2017", color: "#990000", size: 2 },
                  ],
                },
                {
                  label: "Hosting",
                  color: "#B20000",
                  children: [
                    { label: "Microsoft Azure", color: "#990000", size: 2 },
                    { label: "Heroku", color: "#990000", size: 2 },
                  ],
                },
                { label: "NPM", color: "#B20000", size: 1 },
                { label: "Yarn", color: "#B20000", size: 1 },
                { label: "NuGet", color: "#B20000", size: 1 },
                { label: "CRUD", color: "#B20000", size: 2 },
                { label: "RESTful", color: "#B20000", size: 1 },
              ],
            },
          ],
        },
      };
    },
    computed: {},
    watch: {},
    created() {
      eventBus.$emit("changingTheme", this.theme);
      this.pageHeight = window.height;
      this.pageWidth = window.width;
    },
    beforeMount() {},
    mounted() {
      this.currentDataSet = this.skillsData;
    },
    methods: {
      changeChartData: function (dataName) {
        this.currentDataSet.selected = null;

        if (dataName == "Skills") {
          this.currentDataSet = this.skillsData;
        } else {
          this.currentDataSet = this.skillsData.children.filter(
            (k) => k.label == dataName,
          )[0];
        }
      },
    },
  };
</script>

<style scoped>
  #divPageWrapper {
    flex: 1 0 auto;
    padding: 8px;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    background: #809070;
  }

  h3 {
    max-width: 960px;
    margin: 12px auto;
  }

  hr {
    width: 90%;
    min-width: 296px;
    max-width: 960px;
    margin: 32px auto;
    border-color: #dfdfdf;
  }

  p {
    width: 90%;
    max-width: 960px;
    margin: 16px auto;
    text-align: justify;
  }

  #ul-skills-general {
    width: 75%;
    min-width: 296px;
    max-width: 720px;
    margin: 12px auto;
    text-align: justify;
  }

  #divChartWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .vue-d2b-container {
    margin: 16px auto;
    height: 496px;
    width: 496px;
  }

  .d2b-chart-frame {
    height: 496px;
    width: 496px;
  }

  .d2b-chart {
    max-width: 496px;
  }

  #divChartFilters {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }

  #divChartFilters button {
    width: 80px;
    height: 48px;
    text-align: center;
  }

  #p-future-skills {
    width: 90%;
    max-width: 960px;
    text-align: justify;
    margin: 16px auto;
  }

  #ul-future-skills {
    width: 90%;
    max-width: 480px;
    margin: 24px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #ul-future-skills li {
    margin: 8px;
    width: 96px;
    height: 96px;
    display: flex;
    flex-direction: column;
    background: green;
    border-radius: 8px;
    border: 2px solid darkgreen;
    box-shadow: 2px 2px 12px #2f2f2f;
  }

  #ul-future-skills span {
    margin: auto 2px;
    display: inline-block;
    text-shadow: 2px 2px 8px #2f2f2f;
  }

  @media screen and (max-width: 512px) {
    .vue-d2b-container {
      height: 304px;
      width: 304px;
    }

    .d2b-chart-frame {
      height: 304px;
      width: 304px;
    }

    #divChartFilters button {
      width: 60px;
      height: 48px;
      text-align: center;
    }
  }
</style>
