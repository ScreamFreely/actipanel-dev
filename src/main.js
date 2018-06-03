// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import router from './router'
import ElementUI from 'element-ui'
import vueResource from 'vue-resource'



import App from './App'

Vue.use(vueResource)
Vue.use(ElementUI, { locale })
Vue.use(require('vue-moment'))

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
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://mnactivist.org'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<router-view />'
}).$mount('#app')
   
