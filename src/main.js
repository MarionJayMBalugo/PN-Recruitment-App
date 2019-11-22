import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes';
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  routes,
  render: h => h(App)
}).$mount('#app')
