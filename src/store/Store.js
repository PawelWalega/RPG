import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	storage : window.localStorage
});

export const store = new Vuex.Store({
	mutations,
	actions,
	state     : {
		gameLog            : { rounds: [] },
		gameState          : {
			gameIsRunning    : false,
			skillsOnCooldown : {
				player  : new Map(),
				monster : new Map()
			},
			justFinished     : false
		},
		battlingCharacters : {
			player  : {},
			monster : {}
		},
		page               : 'characters',
		characters         : [],
		selectedChar       : ''
	},
	plugins   : [ vuexLocal.plugin ]
});
