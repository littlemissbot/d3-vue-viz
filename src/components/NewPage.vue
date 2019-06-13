<template>
  <div class="renderChart">
    <form>
      <input type="text" placeholder="x, x, x, x, x" v-model="newDataset">
      <select v-model="chartType">
        <option value="vertical">Vertical</option>
        <option value="horizontal">Horizontal</option>
      </select>
      <button type="button" v-on:click="updateDateset()">Prep Bar Chart</button>
    </form>
    <div class="chart-container">
      <BarChart ref="barChartV" :dataset="dataset" :type="'vertical'" :componentClass="'bar-chart-1'"/>
      <BarChart ref="barChartH" :dataset="dataset" :type="'horizontal'" :componentClass="'bar-chart-2'"/>
    </div>
  </div>
</template>

<script>
import BarChart from './D3Viz/BarChart.vue'

export default {
  name: 'NewPage',
  components: {
    BarChart
  },
  data: function() {
      return {
          dataset: [4, 9, 1, 3, 4],
          type: "vertical",
          newDataset: "4, 9, 1, 3, 4",
          chartType: "vertical"
      }
  },
  methods: {
      updateDateset() {
      let arr = this.newDataset.split(",");
      arr.forEach( (e, i) => {
        arr[i] = parseInt(e);
      });
      if (this.chartType === "vertical") {
        this.$refs.barChartV.verticalChart(arr);
      } else if (this.chartType === "horizontal") {
        this.$refs.barChartH.horizontalChart(arr);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
