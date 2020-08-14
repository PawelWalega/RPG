import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state     : {
		page       : 'characters',
		characters : []
	},
	mutations : {
		changeScreen(state, payload) {
			state.page = payload;
		},
		createNewCharacter(state, payload) {
			state.characters.push(payload);
		}
	}
});
