import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	storage : window.localStorage
});

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
			if (state.characters.length === 4) return;
			state.characters.push(payload);
		},
		deleteCharacter(state, payload) {
			state.characters.splice(payload, 1);
		}
	},
	plugins   : [ vuexLocal.plugin ]
});
