import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user'
import apiCall from '../../utils/api'
import Vue from 'vue'
import { AUTH_LOGOUT } from '../actions/auth'
import api from '../api'
import axios from 'axios'

const state = { 
  status: '', 
  profile: {},
  username: localStorage.getItem('user-name')
}

const getters = {
  getProfile: state => state.profile,
  getUsername: state => state.username,
  isProfileLoaded: state => !!state.profile.name,
}

const actions = {
  [USER_REQUEST]: ({commit, dispatch}, user) => {
    commit(USER_REQUEST)
    axios({url: api.base + 'api/user/' + user.username + '/', method: 'GET'})
      .then(resp => {
        // console.log(resp.data.results[0])
        const user = resp.data.results[0]
        localStorage.setItem('user-name', user.username)
        commit(USER_SUCCESS, user)
      })
      .catch(resp => {
        commit(USER_ERROR)
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },
}

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success'
    Vue.set(state, 'profile', resp)
  },
  [USER_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}