import { createStore } from "vuex";

export default createStore({
  state: {
    notes: []
  },
  mutations: {
    SET_NOTES(state, notes){
      state.notes = notes;
    }
  },
  actions: {},
  modules: {}
});
