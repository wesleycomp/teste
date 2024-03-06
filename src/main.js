import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueTreeNavigation from 'vue-tree-navigation';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/app.scss'
import VueTheMask from 'vue-the-mask'
import './plugins/axios'
import JSONView from 'vue-json-component';
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(JSONView);
Vue.use(VueTheMask)
Vue.use(VueTreeNavigation)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}

Vue.config.warnHandler = function(msg, vm, trace) {
  alert('warning componente')
  console.log(`Warn: ${msg}\nTrace: ${trace}`);

}


window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')