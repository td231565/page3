<template>
  <div class="skills">
    <figure class="highcharts-figure">
      <div id="container"></div>
      <p class="highcharts-description">
        Chart with buttons to modify options, showing how options can be changed
        on the fly. This flexibility allows for more dynamic charts.
      </p>
  </figure>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'skills',
  data () {
    return {
      chart: null,
      skills: [
        {
          id: 1,
          name: 'Javascript',
          value: 90
        },
        {
          id:2,
          name: 'Vue',
          value: 80
        },
        {
          id:3,
          name: 'Git',
          value: 80
        }
      ]
    }
  },
  computed: {
    skillName () {
      let nameList = []
      this.skills.map(item => {
        nameList.push(item.name)
      })
      return nameList
    },
    skillsValue () {
      let valueList = []
      this.skills.map(item => {
        valueList.push(item.value)
      })
      return valueList
    }
  },
  methods: {
    renderChart () {
      let vm = this

      return Highcharts.chart('container', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Skills Level'
        },
        xAxis: {
          categories: vm.skillName
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: vm.skillsValue,
          showInLegend: false
        }]
      })
    }
  },
  mounted () {
    this.renderChart()
  }
}
</script>

<style lang="sass" scoped>
#container
  height: 400px

.highcharts-figure, .highcharts-data-table table
  min-width: 320px 
  max-width: 800px
  margin: 1em auto

.highcharts-data-table table
  font-family: Verdana, sans-serif
  border-collapse: collapse
  border: 1px solid #EBEBEB
  margin: 10px auto
  text-align: center
  width: 100%
  max-width: 500px

.highcharts-data-table caption
  padding: 1em 0
  font-size: 1.2em
  color: #555

.highcharts-data-table th
  font-weight: 600
  padding: 0.5em

.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption
  padding: 0.5em

.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even)
  background: #f8f8f8

.highcharts-data-table tr:hover
  background: #f1f7ff
</style>