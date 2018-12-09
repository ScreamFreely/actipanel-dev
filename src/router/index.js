import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import Splash from '@/components/Splash'
import Main from '@/components/Main'
import Resources from '@/components/Resources'

import Organizations from '@/components/Organizations'
import Events from '@/components/Events'
import People from '@/components/People'
import Bills from '@/components/Bills'

import Organization from '@/components/Organization'
import Event from '@/components/Event'
import Person from '@/components/Person'
import Bill from '@/components/Bill'

import Pics from '@/components/Pics'
import Donate from '@/components/Donate'
import Apple from '@/components/Volunteers'
import Quote from '@/components/Quotes'

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
			    path: '/Resources',
			    components: {
				header: Welcome,
				main: Resources
			    }
			},
			{
			    path: '/about',
			    components: {
				header: Welcome,
				main: Main
			    }
			},
			{
				path: '/donate',
				name: 'Donate',
				components: {
				header: Welcome,
				main: Donate
				}
			},

			{
				path: '/volunteer',
				name: 'Apple',
				components: {
				header: Welcome,
				main:  Apple
				}
			},
			{
				path: '/quote',
				name: 'Quote',
				components: {
				header: Welcome,
				main:  Quote
				}
			},
		]
	    },

	    {
	    path: '/people',
	    name: 'People',
		component: Splash,
		children: [
			{
			    path: '/people',
			    components: {
				header: Welcome,
				main: People
			    }
			},
			{
			    path: '/people/ocd-person/:id',
			    components: {
				header: Welcome,
				main: Person
			    }
			},
		]
	    },

	    {
	    path: '/organizations',
	    name: 'Organizations',
		component: Splash,
		children: [
			{
			    path: '/organizations',
			    components: {
				header: Welcome,
				main: Organizations
			    }
			},
			{
			    path: '/organization/ocd-organization/:id',
			    components: {
				header: Welcome,
				main: Organization
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
	    path: '/policy',
	    name: 'Policy',
		component: Splash,
		children: [
			{
			    path: '/policy',
			    components: {
				header: Welcome,
				main: Bills
			    }
			},
			{
			    path: '/policy/ocd-bill/:id',
			    components: {
				header: Welcome,
				main: Bill
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
