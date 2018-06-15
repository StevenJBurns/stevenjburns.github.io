<template>
  <div>
    <div id="svgWrapper">
      <svg id="svgSkillsChart" height="512" width="512" viewbox="0 0 1920 1920"></svg>
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
                { "name": "HTML", "size": 7 },
                { "name": "SVG", "size": 2 },
                { "name": "CSS", "size": 5 },
                { "name": "JavaScript", "size": 10 },
                { "name": "jQuery", "size": 6 }
              ]
            },
            {
              "name": "Back End",
              "size": 25,
              "children": [
                { "name": "Node JS", "size": 8 },
                { "name": "Ruby on Rails", "size": 6 },
                { "name": "ASP.NET", "size": 3 },
                { "name": "Java", "size": 1 },
                { "name": "Python", "size": 2 }
              ]
            },
            {
              "name": "Data",
              "size": 25,
              "children": [
                { "name": "JSON", "size": 9 },
                { "name": "XML", "size": 2 },
                { "name": "SQLite", "size": 3 },
                { "name": "MySql", "size": 7 },
                { "name": "PostgreSQL", "size": 7 },
                { "name": "Microsoft SQL Server", "size": 5 }
              ]
            },
            {
              "name": "Tools & Environment",
              "size": 25,
              "children": [
                { "name": "Git", "size": 10 },
                { "name": "GitHub", "size": 10 },
                { "name": "NPM", "size": 9 },
                { "name": "CRUD", "size": 6 },
                { "name": "RESTful", "size": 7 }
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
      const svg = d3.select("#svgSkillsChart");

      const g = svg.append("g").attr("transform", "translate(240, 240)");

      let pack = d3.pack()
                 .size([480, 480])
                 .padding(8);

      let root = d3.hierarchy(this.appData)
                 .sum(d => d.size)
                 .sort((a, b) => b.value - a.value);

      let nodes = pack(root).descendants();

      this.circle = g.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
          .attr("class", (d) => d.parent ? (d.children ? "node" : "node node-leaf") : "node root-node")
          .style("fill", (d) => this.skillColors[d.depth + 1])
          .on("click", (d) => this.currentFocus !== d ? this.zoom(d) : d3.event.stopPropagation());

      this.node = g.selectAll("circle");

      this.zoomTo([root.x, root.y, root.r]);
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
      root: function() {
        return d3.hierarchy(this.appData)
                 .sum(d => d.size)
                 .sort((a, b) => b.value - a.value);
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

        let view = this.currentView;
        let focus = this.currentFocus;
        let zoomTo = this.zoomTo;
        
        let transition = d3.transition()
            .duration(1000)
            .tween("zoom", function(d) {
              let i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
              return function(t) { zoomTo(i(t)) };
            });

        // transition.selectAll("text")
        //   .filter(function(d) { return d.parent === this.focus || this.style.display === "inline"; })
        //     .style("fill-opacity", function(d) { return d.parent === this.focus ? 1 : 0; })
        //     .on("start", function(d) { if (d.parent === this.focus) this.style.display = "inline"; })
        //     .on("end", function(d) { if (d.parent !== this.focus) this.style.display = "none"; });
      },
      zoomTo: function(v) {
        let k = 480 / (v[2] * 2);
        
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
  div {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    background: #809070
  }

  #svgWrapper {
    margin: 24px;
    padding: 8px;
  }

  circle:hover {
    stroke: black;
    stroke-width: 4px
  }
</style>

