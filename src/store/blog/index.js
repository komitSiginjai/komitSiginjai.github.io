import Axios from 'axios'

const url = 'https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec'

export default {
	namespaced: true,

	state: {
		allBlogDatas: [],
		loadingBlog: true,
	},

	getters: {
		blogDatas: state => state.allBlogDatas,
		loadingDatas: state => state.loadingBlog,
	},

	actions: {
		async fetchBlogDatas({commit}) {
			const response = await Axios.get(url+'?action=read_all_wwD')
			commit('setFetchBlogDatas', response.data.records)
			commit('setLoading', false)
		},

	},

	mutations: {
		setFetchBlogDatas: (state, datas) => (state.allBlogDatas = datas),
		setLoading: (state, loading) => (state.loadingBlog = loading)
	}
}