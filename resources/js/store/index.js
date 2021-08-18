import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth
	},
	state:{
		counter : 100,
		deleteModalObj:{
			showDeleteModal: false,
			deleteUrl: '',
			data: null,
            deletingIndex: -1,
            isDeleted : false,
		},
	},
	getters:{
		getCounter(state){
			// if(state.counter > 100) return 'this is big....'
			return state.counter
		},
		getDeleteModalObj(state){
			return state.deleteModalObj
		},
	},
	mutations:{
		changeTheCounter(state, data){
			state.counter += data
		},
        setDeleteModal(state, data){
            const deleteModalObj = {
                showDeleteModal: false,
                deleteUrl : '',
                data : null,
                deletingIndex: -1,
                isDeleted : data,
            }
            deleteModalObj.deletingIndex = state.deleteModalObj.deletingIndex
            state.deleteModalObj = deleteModalObj
        },
		setDeletingModalObj(state, data){
			state.deleteModalObj = data
		},
	},
	actions:{
		changeCounterAction({commit}, data){
			commit('changeTheCounter', data)
			// console.log(commit)
		}
	}
})

// export const strict = false

// export const state = () => ({

// })

// //common getters
// export const getters = {

// }

// //mutations for changing data from action
// export const mutations = {

// }

// // actions for commiting mutations
// export const actions = {

// }