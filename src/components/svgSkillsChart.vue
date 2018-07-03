<template>
  <svg mlns="http://www.w3.org/2000/svg" version="1.1" height="512" width="512" viewport="0 0 512 512">
    <svg class="sub-svg" x="25%" y="50%" style="overflow: visible;">
      <g class="sub-svg">
        <circle id="front-end" cx="0" cy="0" r="64" stroke="#EE3300" stroke-width="8" fill="#3F3F3F" />
        <text dy="6" text-anchor="middle" >Front End</text>
      </g>
    </svg>
    <svg class="sub-svg" x="50%" y="50%" style="overflow: visible;">
      <g>
        <circle id="env-tools" cx="0" cy="0" r="64" stroke="#5F5F5F" stroke-width="8" fill="#3F3F3F" />
        <text dy="6" text-anchor="middle">Environments and Tools</text>
      </g>
    </svg>
    <svg class="sub-svg" x="75%" y="50%" style="overflow: visible;">
      <g>
        <circle id="back-end" cx="0" cy="0" r="64" stroke="#000088" stroke-width="8" fill="#3F3F3F" />
        <text dy="6" text-anchor="middle">Back End</text>
      </g>
    </svg>
  </svg>
</template>

<script>
  export default {
    name: "SVG-Skills-Chart",
    props: [
      'dataSource'
    ],
    data() {
      return {
        width: 480,
        height: 480,
        root: null,
        skillsFront: {
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
    mounted() {
      console.log(this.dataSource)
    } 
  }
</script>

<style scoped>
  #front-end, #env-tools, #back-end {
    transition: all 0.5s ease
  }

  #front-end:hover {
    fill: #EE3300
  }

  #env-tools:hover {
    fill: #7F7F7F
  }

  #back-end:hover {
    fill: #000088
  }

  .sub-svg {
    background: #333300;
    transform-origin: center;
    border: 4px solid #0F0F0F
  }

  text {
    fill: #DFDFDF
  }
</style>