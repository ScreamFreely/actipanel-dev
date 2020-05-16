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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

/* eslint-disable no-new */
new Vue({
  store,
  router,
  template: '<router-view />'
}).$mount('#app')
   
