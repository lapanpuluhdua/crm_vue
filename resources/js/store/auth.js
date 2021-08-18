import router from '../router';
import Spatie from '../utils/spatie'


export default {
	namespaced: true,
	state:{
		token : localStorage.getItem('token'),
		authenticated: false,
		user: null,
		roles: null,
		permissions: null,
	},
	getters:{
		getToken(state){
			return state.token
		},
		getAuthenticated(state){
			return state.authenticated
		},
		getUser(state){
			return state.user
		},
		getRoles(state){
			return state.roles
		},
		getPermissions(state){
			return state.permissions
		},
		spatie: (state) => new Spatie(state.user, state.roles, state.permissions),
        can: (state, getters) => getters.spatie.can.bind(getters.spatie),
		role: (state, getters) => getters.spatie.role.bind(getters.spatie),
		
	},
	mutations:{
		setToken(state, data){
			localStorage.setItem('token', data)
			console.log('token', data)
			state.token = data
		},
		setAuthenticated(state, data){
			state.authenticated = data
		},
		setUser(state, data){
			state.user = data
		},
		setRoles(state, data){
			state.roles = data
		},
		setPermissions(state, data){
			state.permissions = data
		}
	},
	actions:{
	async signIn ({ dispatch }, credentials) {
      	await axios.get('/sanctum/csrf-cookie')
		try{
			return await axios({
				method: 'post',
				url: '/api/login',
				data: credentials,
			});
		}catch(e){
			return e.response
		}
      // await axios.post('/api/login', credentials)
      // await this.callUrl('get', '/sanctum/csrf-cookie')
      // await this.callApi('post', '/login', credentials)

      // return dispatch('me')
    },

    async signOut ({ dispatch, state }) {
      // await axios.post('/api/logout')
      // await this.callApi('post', '/logout')
			try{
				return await axios({
					method: 'post',
					url: '/api/logout',
                    headers: { Authorization: `Bearer ${state.token}` }
				});
			}catch(e){
				return e.response
			}
      // return dispatch('me')
    },

    me ({ commit, state }) {
    	
      return axios.get('/api/user', {headers: { Authorization: `Bearer ${state.token}` }}).then((response) => {
        commit('setUser', response.data.user);
		commit('setRoles', response.data.roles);
		commit('setPermissions', response.data.permissions);
		console.log('response.data', response.data);
        if(router.currentRoute.name !== null){
        //   router.push({ name: 'dashboard' })
		window.location = "/v/";
        };
      }).catch(() => {
      	localStorage.removeItem('token')
      	localStorage.removeItem('auth')
        commit('setToken', null)
        commit('setUser', null)
		commit('setRoles', null)
		commit('setPermissions', null)
        if(router.currentRoute.name !== 'login'){
          // router.push({ name: 'login' })
          window.location.href="/v/login";
        };
      })
      // const res = await this.callApi('post', 'user')
      // if(res.status == 200){
      //   commit('setAuthenticated', true)
      //   commit('setUser', res.data)
      // }else{
      //   commit('setAuthenticated', false)
      //   commit('setUser', null)
      // }
    }
	}
}
