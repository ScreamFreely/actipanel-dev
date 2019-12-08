/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import axios from 'axios'
import api from '../api'

const state = { 
  token: localStorage.getItem('user-token') || '', 
  status: '', 
  hasLoadedOnce: false 
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    // console.log(user)
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      // console.log(user)
      axios.post(api.base + 'auth/obtaintoken/', user, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
      .then(resp => {
        // console.log(user)
        const token = resp.data.token
        localStorage.setItem('user-token', token)
        // console.log('token', token)
        // Here set the header of your ajax library to the token value.
        // example with axios
        axios.defaults.headers.common['Authorization'] = token
        commit(AUTH_SUCCESS, token)
        dispatch(USER_REQUEST, user)
        resolve(resp)
      })
      .catch(err => {
        commit(AUTH_ERROR, err)
        localStorage.removeItem('user-token')
        reject(err)
      })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('user-token')
      localStorage.removeItem('user-name')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}