import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import HelloWorld from './components/HelloWorld'
import NewPage from './components/NewPage'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '', component: HelloWorld },
  { path: '/newpage', component: NewPage }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
