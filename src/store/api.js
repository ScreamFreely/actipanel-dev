//resources/assets/js/vuex/utils/api.js

import axios from 'axios'

// const base = 'http://localhost:8000/'
const site = 'MnActivist.Org'
const name = 'MnActivist'
const base = 'https://api.Mnactivist.org/'
const aState = 'Minnesota'


export default {
    base, site, name, aState,
    get(url, request) {
        return axios.get(url, request)
            .then((response) => Promise.resolve(response.body.data))
            .catch((error) => Promise.reject(error));
    },
    post(url, request) {
        return axios.post(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    patch(url, request) {
        return axios.patch(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    delete(url, request) {
        return axios.delete(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }
}