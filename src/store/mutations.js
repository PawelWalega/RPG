export const mutations = {
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
  },
  addBattleChar(state,payload){
    Object.assign(state.battlingCharacters.player, payload)
  }
}