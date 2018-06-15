<template>
  <div>
    <div id="svgWrapper">
      <svg id="svgSkillsChart" height="480" width="480" viewbox="0 0 1920 1920"></svg>
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
        view: null,
        focus: null,
        currentNode: null,
        skillColors: ["#445566", "#556677", "#667788", "#778899", "#8899AA", "#99AABB", "#AABBCC", "#BBCCDD"]
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
      let g = svg.append("g").attr("transform", "translate(240, 240)");

      let diameter;

      let pack = d3.pack().size([480, 480]).padding(8);
      let root = d3.hierarchy(AppData)
                    .sum(d => d.size)
                    .sort((a, b) => b.value - a.value);

      this.focus = root;
      let nodes = pack(root).descendants();

      let circle = g.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
          .attr("class", (d) => d.parent ? (d.children ? "node" : "node node-leaf") : "node root-node")
          .style("fill", (d) => this.skillColors[d.depth + 1])
          .on("click", (d) => {if (focus !== d) this.zoom(d), d3.event.stopPropagation() });

      this.currentNode = g.selectAll("circle, text");
      console.log(root);
      this.zoomTo([root.x, root.y, root.r]);
    },
    methods: {
      // svgClicked: function(event) {
      //   d3.select(event.target)
      //     .transition()
      //     .duration(500)
      //     .style("fill", "navy")
      //     .style("stroke", "red")
      //},
      zoom: function(d) {
        // let focus0 = this.focus;
        
        this.focus = d;
        
        let transition = d3.transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
              let i = d3.interpolateZoom(this.view, [focus.x, focus.y, focus.r * 2]);
              // return (t) => this.zoomTo(i(t))
            });

        // transition.selectAll("text")
        //   .filter(function(d) { return d.parent === this.focus || this.style.display === "inline"; })
        //     .style("fill-opacity", function(d) { return d.parent === this.focus ? 1 : 0; })
        //     .on("start", function(d) { if (d.parent === this.focus) this.style.display = "inline"; })
        //     .on("end", function(d) { if (d.parent !== this.focus) this.style.display = "none"; });
      },
      zoomTo: function(oldView) {
        let k = 480 / (oldView[2] * 2);

        this.view = oldView;
        
        this.currentNode.attr("transform", (d) =>           
          `translate(${(d.x - oldView[0]) * k}, ${(d.y - oldView[1]) * k})`)

        this.currentNode.attr("r", d => d.r * k);
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

