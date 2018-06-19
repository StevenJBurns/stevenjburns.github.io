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

  export default {
    name: 'PageSkills',
    data() {
      return {
        root: null,
        circle: null,
        currentView: null,
        currentNode: null,
        currentFocus: null,
        skillColors: ["#445566", "#556677", "#667788", "#778899", "#8899AA", "#99AABB", "#AABBCC", "#BBCCDD"],
        appData: {
          "name": "Skills",
          "size": 100,
          "children": [
            {
              "name": "Front End",
              "size": 25,
              "children": [
                { "name": "HTML", "size": 25 },
                { "name": "SVG", "size": 5 },
                { "name": "CSS", "size": 12 },
                { "name": "JavaScript", "size": 5 },
                { "name": "jQuery", "size": 5 },
                { "name": "React", "size": 5 },
                { "name": "Vue", "size": 5 }
              ]
            },
            {
              "name": "Back End",
              "size": 25,
              "children": [
                { "name": "Node JS", "size": 5 },
                { "name": "Ruby on Rails", "size": 5 },
                { "name": "ASP.NET", "size": 5 },
                { "name": "Java", "size": 5 },
                { "name": "Python", "size": 5 }
              ]
            },
            {
              "name": "Data",
              "size": 25,
              "children": [
                { "name": "JSON", "size": 12 },
                { "name": "XML", "size": 3 },
                { "name": "SQLite", "size": 4 },
                { "name": "MySql", "size": 6 },
                { "name": "PostgreSQL", "size": 9 },
                { "name": "Microsoft SQL Server", "size": 6 },
                { "name": "MongoDB", "size": 4 }
              ]
            },
            {
              "name": "Tools & Environment",
              "size": 25,
              "children": [
                { "name": "Git", "size": 5 },
                { "name": "GitHub", "size": 5 },
                { "name": "NPM", "size": 5 },
                { "name": "CRUD", "size": 5 },
                { "name": "RESTful", "size": 5 }
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
      let zoom = this.zoom;

      const svg = d3.select("#svgSkillsChart")
                     .attr("preserveAspectRatio", "xMinYMin meet")
                     .attr("viewBox", "0 0 256 256");

      const g = svg.append("g").attr("transform", "translate(128, 128)");

      let pack = d3.pack()
                   //.size([320, 320])
                   .padding(8);

      this.root = d3.hierarchy(this.appData)
                    .sum(d => d.size)
                    .sort((a, b) => b.value - a.value);

      let nodes = pack(this.root).descendants();

      this.circle = g.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
          .attr("class", (d) => d.parent ? (d.children ? "node" : "node node-leaf") : "node root-node")
          .attr('stroke', 'transparent')
          .attr('stroke-width', 4)
          .style("fill", (d) => this.skillColors[d.depth + 1])
          .on("click", (d) => this.currentFocus !== d ? this.zoom(d) : d3.event.stopPropagation())
          .on('mouseover', function() {
            d3.select(this)
              .transition()
              .duration(250)
              .attr('stroke', 'darkgreen')
          })
          .on('mouseout', function() {
            d3.select(this)
              .transition()
              .duration(250)
              .attr('stroke', 'transparent')
          });
      
        var text = g.selectAll("text")
          .data(nodes)
          .enter().append("text")
            .attr("class", "label")
            .attr("dy", "8")
            .attr("text-anchor", "middle")
            .style("fill-opacity", function(d) { return d.parent == this.currentFocus ? 1 : 0; })
            .style("display", function(d) { return d.parent == this.currentFocus ? "inline" : "none"; })
            .text(d => d.data.name);

      this.node = g.selectAll("circle, text");

      this.zoomTo([this.root.x, this.root.y, this.root.r * 2]);
    },
    computed: {
      svg: function() {
        return d3.select("#svgSkillsChart");
      },
      pack: function() {
        return d3.pack()
                 .size([480, 480])
                 .padding(8);
      },
      nodes: function() {
        return this.pack(this.root).descendants();
      },
      view: {
        get: function() { return this.currentView; },
        set: function(newView) {
          this.currentView = newView
        }
      },
      focus: {
        get: function() { return this.currentFocus; },
        set: function(newFocus) {
          this.currentFocus = newFocus
        }
      },
      node: {
        get: function() { return this.currentNode; },
        set: function(newNode) {
          this.currentNode = newNode;
        }
      }
    },
    methods: {
      zoom: function(d) {
        this.currentFocus = d;

        let root = this.root;
        let view = this.currentView;
        let focus = this.currentFocus;
        let zoomTo = this.zoomTo;
        
        let transition = d3.transition()
            .duration(1000)
            .tween("zoom", function(d) {
              let i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
              return function(t) { zoomTo(i(t)) };
            });

        // transition.selectAll("circle")
        //   .filter(function(d) { return d.parent === focus || this.style.display === "inline"})
        //     style("opacity", function(d) { return d.parent === focus ? 1 : 0})
        //     .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        //     .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });      

        transition.selectAll("text")
          .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });      
      },
      zoomTo: function(v) {
        let k = 224 / (v[2]);
        
        this.view = v;

        this.node.attr("transform", function(d) {
          return `translate(${(d.x - v[0]) * k + 16}, ${(d.y - v[1]) * k + 16})`
        });

        this.circle.attr("r", function(d) { return d.r * k });        
      }
    }
  }
</script>

<style scoped>
  #divPageWrapper {
    flex: 1 0 auto;
    padding: 8px;
    display: flex;
    flex-direction: row;
    background: #809070
  }

  #divSkillsList {
    min-width: 288px;
    background: green;
  }

  #divChartWrapper {
    width: 100%;
    margin: auto;
    display: inline-block;
    text-align: center;
    overflow: hidden
  }

  #svgSkillsChart {
    max-height: 512px;
  }

  @media screen and (max-width: 720px) {
    #divPageWrapper {
      flex: 1 0 auto;
      flex-direction: column;
    }
  }
</style>

