//resources/assets/js/vuex/utils/api.js

import axios from 'axios'

// const base = 'http://localhost:8000/'
const site = 'MnActivist.Org'
const name = 'MnActivist'
const base = 'https://api.mnactivist.org/'
const aState = 'Minnesota'
const donorBox = '<script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe src="https://donorbox.org/embed/mnactivist?amount=25&default_interval=m" height="685px" width="100%" style="max-width:500px; min-width:310px; max-height:none!important" seamless="seamless" name="donorbox" frameborder="0" scrolling="no" allowpaymentrequest></iframe>'
const donorRecord = '<iframe class="airtable-embed" src="https://airtable.com/embed/shr5KmvdL1Bndz1bj?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>'


export default {
    base, site, name, aState, donorBox, donorRecord,
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