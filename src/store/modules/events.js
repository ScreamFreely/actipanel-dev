// import shop from '../../api/shop'
import axios from 'axios'
// initial state
import api from '../api'

const state = {
    all: [],
    events: [],
    newEvent: {},
    newFBEvent: {},
    calendar: '',
    addEvent: false,
    cals: false,
    callist: [],
    next: '',
    count: '',
    options: [{
            value: 'org',
            label: 'Organizational'
        }, {
            value: 'art',
            label: 'Arts & Music'
        }, {
            value: 'edu',
            label: 'Educational'
        }, {
            value: 'civ',
            label: 'Civic'
        }, {
            value: 'govt',
            label: 'Governmental'
        },
        {
            value: 'demo',
            label: 'Demonstration'
        },
    ],
}

// getters
const getters = {
    events: state => state.events.events,
    fbEvent: state => state.events.events,
    newEvent: state => state.events.newEvent,
    callist: state => state.events.callist,
    addEvent: state => state.events.addEvent,
    calendar: state => state.events.calendar,
    next: state => state.events.next,
    count: state => state.events.count,
    cals: state => state.events.cals,
}

// actions
const actions = {
    getCalendars({ commit }) {
        axios.get(api.base + 'api/jurisdictions')
            .then((response) => {
                let cals = response.data.results
                this.commit('events/setCalendars', cals)
            })
    },
    getCalendar({ commit }, cal) {
        if (cal == 'All Events') {
            var link = api.base + 'api/events';
        } else if (cal == 'Arts & Music') {
            var link = api.base + 'api/pics/art';
        } else if (cal == 'Civic') {
            var link = api.base + 'api/pics/civ';
        } else if (cal == 'Educative') {
            var link = api.base + 'api/pics/edu';
        } else if (cal == 'Org Events') {
            var link = api.base + 'api/pics/org';
        } else if (cal == 'Demonstrations') {
            var link = api.base + 'api/pics/demo';
        } else {
            cal = cal.replace(' ', '-');
            var link = api.base + 'api/pics/' + cal;
        }
        axios.get(link)
            .then((response) => {
                this.commit('events/setEvents', response.data.results)
                this.commit('events/setNext', response.data.next.replace('http', 'https'))
            })
    },
    getEvents({ commit }) {
        axios.get(api.base + 'api/events')
            .then((response) => {
                this.commit('events/setEvents', response.data.results)
                this.commit('events/setNext', response.data.next.replace('http', 'https'))
            })
    },
    getNewEvents({ commit }, link) {
        axios.get(link)
            .then((response) => {
                console.log('received new events', response.data.results)
                let events = response.data.results
                let nlink = response.data.next.replace('http', 'https')
                this.commit('events/addEvents', events)
            })
    },

    newEvent({ commit }, event) {
        axios.post(api.base + 'api/add-event/', event)
            .then(response => {
                this.newEvent = {};
                this.addEvent = false;
                this.$message({
                    message: "Success! We got your event, thank you.",
                    type: 'success',
                    duration: '5000',
                });
            })
            .catch(error => {
                this.$message({
                    message: "Check required fields.",
                    type: 'error',
                    duration: '5000',
                });
            })

    },


    newFbEvent({ commit }, event) {
        axios.post(api.base + 'api/add-fb-event', event)
            .then(response => {
                this.newFBEvent = {};
                this.addEvent = false;
                this.$message({
                    message: "Success! We got your event, thank you.",
                    type: 'success',
                    duration: '5000',
                });
            })
            .catch(error => {
                this.$message({
                    message: "Check required fields.",
                    type: 'error',
                    duration: '5000',
                });
            })
    },
}

// mutations
const mutations = {
    setCalendars(state, calendars) {
        calendars.push({ 'id': 'null', 'name': 'All Events' })
        // calendars.push({'id': 'null', 'name': 'Arts & Music'}, {'id': 'null', 'name': 'Civic'}, {'id': 'null', 'name': 'Demonstrations'}, {'id': 'null', 'name': 'Educative'}, {'id': 'null', 'name': 'Org Events'}, {'id': 'null', 'name': 'All Events'} )
        state.callist = calendars
    },
    setEvents(state, events) {
        state.events = events
    },
    setNext(state, next) {
        state.next = next
    },
    addEvents(state, newEvents) {
        state.events = state.events.concat(newEvents)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}