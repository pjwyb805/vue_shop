import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./plugins/element"
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false
//axios
import axios from 'axios'
Vue.prototype.axios = axios
import netlist from './network/index'
Vue.prototype.$netlist = netlist
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
