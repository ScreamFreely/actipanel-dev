// import shop from '../../api/shop'
import axios from 'axios'
import api from '../api'
// initial state
const state = {
  all: [],
  posts: [],
  projects: [],
  parcel: '',
  menu: [
      // { name: 'Posts', link: 'posts' },
      { name: 'Inventory', link: 'inventory' },
      { name: 'Projects', link: 'projects' },
      { name: 'About', link: 'about' },      
    ],
  social: [],
}

// getters
const getters = {
  newPost: state => state.newPost,
  posts: state => state.posts.posts,
  projects: state => state.posts.projects,
  parcel: state => state.posts.parcel,
  social: state => state.posts.social,
  menu: state => state.posts.menu
}

// actions
const actions = {
  alterParcel(parcel){
    this.commit('setParcel', parcel)
  },
  getSocial({ commit }) {
    // console.log('getting social')
    axios.get(api.base + 'api/social')
    // axios.get('http://localhost:8000/api/social')
      .then((response)=>{
        // console.log('response', response)
        this.commit('posts/setSocial', response.data.results)
      })
    // console.log('got posts')
  },
  getPosts ({ commit }) {
    // console.log('getting posts')
    axios.get(api.base + 'api/posts')
    // axios.get('http://localhost:8000/api/posts')
      .then((response)=>{
        // console.log('response', response)
        this.commit('posts/setPosts', response.data.results)
      })
    // console.log('got posts')
  },
  getProjects ({ commit }) {
    // console.log('getting projects')
    axios.get(api.base + 'api/projects')
    // axios.get('http://localhost:8000/api/projects')
      .then((response)=>{
        // console.log('response', response)
        this.commit('posts/setProjects', response.data.results)
      })
    // console.log('got projects')
  },
}

// mutations
const mutations = {
  setSocial(state, social){
      state.social = social
  },
  setPosts(state, posts){
    state.posts = posts
    state.parcel = 'posts'
  },
  setProjects(state, projects){
    state.projects = projects
  },
  setParcel(state, parcel){
    state.parcel = parcel.parcel
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}