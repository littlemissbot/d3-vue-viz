<template>
  <div id="app">
    <router-link to="/"><img alt="Vue logo" src="./assets/logo.png"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {},
  methods: {}
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

form {
  margin: 1rem;
}
form input {
  min-width: 300px;
  padding: 0.5rem 1rem;
  border: 1px solid #EEE;
  border-radius: 3px;
  margin: 0 1rem;
}
form select {
  min-width: 150px;
  padding: 0.5rem 1rem;
  border: 1px solid #EEE;
  border-radius: 3px;
  margin: 0 1rem;
  appearance: none;
  -moz-appearance: none;
  -ms-progress-appearance: none;
  -webkit-appearance: none;
}
form button {
  padding: 0.5rem 1rem;
  background: #d3d3d3;
  border: 1px solid #EEE;
  border-radius: 3px;
  margin: 0 1rem;
  cursor: pointer;
}
.chart-container {
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
}
.chart-container div {
  margin: 0.5rem;
}
.chart-container svg {
  margin: 0 1.5rem;
}
</style>
