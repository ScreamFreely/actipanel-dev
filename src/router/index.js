import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/components/Intro'

import Welcome from '@/components/Welcome'
import Splash from '@/components/Splash'
import Main from '@/components/Main'
import Events from '@/components/Events'
import Pics from '@/components/Pics'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
	    {
	    path: '/',
	    name: 'Welcome',
		component: Splash,
		children: [
			{
			    path: '',
			    components: {
				header: Welcome,
				main: Events
			    }
			},
			{
			    path: '/about',
			    components: {
				header: Welcome,
				main: Main
			    }
			},
		]
	    },
	    {
	    path: '/events',
	    name: 'Events',
		component: Splash,
		children: [
			{
			    path: '/events',
			    components: {
				header: Welcome,
				main: Events
			    }
			},
			{
			    path: '/event/ocd-event/:id',
			    components: {
				header: Welcome,
				main: Event
			    }
			},
		]
	    },
	    {
	    path: '/p',
	    name: 'Pics',
		component: Splash,
		children: [
			{
			    path: '/p/:place',
			    components: {
				header: Welcome,
				main: Pics
			    }
			},
		]
	    },

    ]

})
