import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
