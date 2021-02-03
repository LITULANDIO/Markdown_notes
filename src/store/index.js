import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null
  },
  getters: {
    getNoteById: state => noteId => state.notes.find(note => note.id === noteId)
  },
  mutations: {
    CREATE_NOTE(state, note){
      state.notes.unshift(note);
    },
    SET_NOTES(state, notes){
      state.notes = notes;
    },
    SET_ACTIVE_NOTE(state, noteId = null) {
      state.activeNote = noteId;
    },
    UPDATE_NOTE(state, {id, body}){
      state.notes.find(note => note.id === id).body = body;
    },
    DELETE_NOTE(state){
      const index = state.notes.find(note => note.id == state.activeNote);
      state.notes.splice(index, 1);
      state.activeNote = null;
    }
  },
  actions: {
    createNote({ commit }){
      const note = { body: "", id: Date.now()};
      commit('CREATE_NOTE', note);
      commit('SET_ACTIVE_NOTE', note.id)

    }
  },
  modules: {}
});
