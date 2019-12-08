// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import router from './router'
import ElementUI from 'element-ui'
import vueResource from 'vue-resource'

import axios from 'axios'
import VueAxios from 'vue-axios'
import jwt_decode from 'jwt-decode'
import Vuex from 'vuex'

// import App from './App'
import store from './store'


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

Vue.http.interceptors.push({
  request: function (req) {
      if(req.fresh) cache.del(req.url);
    if(req.method.toLowerCase() == 'get') { // check
      var valid = cache.get(req.url);
      if(valid) {
        req.client = function(){
          return valid;
        }
      }
    }
    return req;
  },
  response: function (res) {
    if(res && res.status == 200 && res.request.method.toLowerCase() == 'get') {
      cache.set(res.request.url,res); // set
    }
    return res;
  }
});

Vue.http.headers.common['Access-Control-Allow-Origin'] = 'true'
Vue.http.headers.common['Content-Type'] = 'application/json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  template: '<router-view />'
}).$mount('#app')
   
