// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import router from './router'
import ElementUI from 'element-ui'
import vueResource from 'vue-resource'

import axios from 'axios'
// import VueAxios from 'vue-axios'
// import jwt_decode from 'jwt-decode'
import Vuex from 'vuex'

// import App from './App'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


Vue.use(vueResource)
Vue.use(ElementUI, { locale })
Vue.use(require('vue-moment'))

Vue.use(Vuex)

// Vue.use(VueAxios, axios)

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

Vue.http.headers.common['Access-Control-Allow-Origin'] = 'true'
Vue.http.headers.common['Content-Type'] = 'application/json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  store,
  router,
  template: '<router-view />'
}).$mount('#app')
   
