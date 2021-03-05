import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFormulate from '@braid/vue-formulate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueFormulate)
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
