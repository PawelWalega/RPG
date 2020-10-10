import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { gameLog } from './temp';
import { mutations } from './mutations';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	storage : window.localStorage
});

// const initialState = function(){
// return {
// 	battlingCharacters.player: {},
// 	gameLog: [],
// 	page         : 'characters',
// 	characters   : [],
// 	selectedChar : '',

// }
// }

export const store = new Vuex.Store({
	state     : {
		gameLog,
		battlingCharacters: {
			player: {},
			monster: {}
		},
		page         : 'characters',
		characters   : [],
		selectedChar : '',

	},
	mutations,
	plugins   : [ vuexLocal.plugin ]
});
