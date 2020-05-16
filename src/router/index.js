import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/components/Intro'

import Welcome from '@/components/Welcome'
import Splash from '@/components/Splash'
import Main from '@/components/Main'
import Events from '@/components/Events'
import Pics from '@/components/Pics'
import api from '../store/api'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
	    {
		    path: '/',
		    name: 'Welcome',
			component: Intro,
			meta: {
		      title: api.site,
		      metaTags: [
		        {
		          name: 'description',
		          content: 'Communication + Unity'
		        },
		        {
		          property: 'og:description',
		          content: 'Communication + Unity'
		        }
		      ]
		    },
	    },
    ]
})
