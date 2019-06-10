<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BarChart :dataset="dataset1"/>
    <BarChart :dataset="dataset2"/>
  </div>
</template>

<script>
import BarChart from './components/D3Viz/BarChart.vue'

import * as d3 from 'd3'

export default {
  name: 'app',
  components: {
    BarChart
  },
  data: function() {
        return {
            dataset1: [4, 9, 1, 3, 4],
            dataset2: [10, 9, 7, 1, 2]
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: auto;
}
</style>
