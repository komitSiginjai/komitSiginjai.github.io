import Vue from 'vue'
import Vuex from 'vuex'
import datas from '../store/home/sec3/index'
import blog from '../store/blog/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
			datas,
			blog
  }
})
