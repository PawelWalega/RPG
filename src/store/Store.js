import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	storage : window.localStorage
});

export const store = new Vuex.Store({
	state     : {
		page         : 'characters',
		characters   : [],
		selectedChar : '',
		gameLog      : {
			rounds   : [
				{
					player  : {
						attack  : 'Frost Bolt',
						damage  : 11,
						special : "and lowers it's defense by 10"
					},
					monster : {
						attack  : 'Axe Swing',
						damage  : 15,
						special : ''
					}
				},
				{
					player  : {
						attack  : 'Blizzard',
						damage  : 4,
						special : '. Blizzard will last 3 more rounds'
					},
					monster : {
						attack  : 'Axe Swing',
						damage  : 12,
						special : ''
					}
				}
			],
			statuses : {
				monster : [
					{
						name       : 'blizzard',
						roundsLeft : 4
					}
				],
				player  : []
			}
		}
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
		},
		clearSelected(state) {
			state.selectedChar = '';
		},
		selectCharacter(state, payload) {
			state.selectedChar = payload;
		}
	},
	plugins   : [ vuexLocal.plugin ]
});
