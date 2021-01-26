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
    SET_NOTES(state, notes){
      state.notes = notes;
    },
    SET_ACTIVE_NOTE(state, noteId = null) {
      state.activeNote = noteId;
    },
    UPDATE_NOTE(state, {id, body}){
      state.notes.find(note => note.id === id).body = body;
    }
  },
  actions: {},
  modules: {}
});
