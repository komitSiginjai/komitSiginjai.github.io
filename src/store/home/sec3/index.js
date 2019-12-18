import Axios from "axios"

const url = 'https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec'

export default {
	namespaced: true,

	state: {
		datas: [],
		loading: true,
		status: false,
		dataSec4: [],
		dataSec5: []
	},

	getters: {
		allDatas: state => state.datas,
		loadingData: state => state.loading,
		resultData: state => state.result,
		statusData: state => state.status,
		sec4Data: state => state.dataSec4,
		sec5Data: state => state.dataSec5
	},

	actions: {
		async fetchDatas({commit}) {
			const response = await Axios.get(url+'?action=read_all_wwD')
			commit('setDatas', response.data.records)
			commit('setLoading', false)
		},

		async fetchDataSec4({commit}) {
			const response = await Axios.get(url+'?action=read_lA')
			commit('setDataSec4', response.data.records)
		},

		async fetchDataSec5({commit}) {
			const response = await Axios.get(url+'?action=read_naE')
			commit('setDataSec5', response.data.records)
		},

		async addPeserta({ commit }, payload) {
			let nama = payload.nama
			let wa = payload.wa
			let email = payload.email
			let institusi = payload.institusi
			let tableName = 'naSuf'

			let urlAdd = url+"?callback=ctrlq&nama="+nama+"&wa="+"'"+wa+"&email="+email+"&institusi="+institusi+"&tableName="+tableName+"&action=insert_naSuf"
			await Axios.get(urlAdd)

			commit('setStatus', true)
		},

	},

	mutations: {
		setDatas: (state, datas) => (state.datas = datas),
		setLoading: (state, loading) => (state.loading = loading),
		setStatus: (state, status) => (state.status = status),
		setDataSec4: (state, dataSec4) => (state.dataSec4 = dataSec4),
		setDataSec5: (state, dataSec5) => (state.dataSec5 = dataSec5)
	}

}