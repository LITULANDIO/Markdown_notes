import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
    deleting: false
  },
  getters: {
    getNoteById: state => noteId => state.notes.find(note => note.id === noteId),
    getNoteTitle: state => noteId =>{
      const removeMd = require("remove-markdown");
      const id = noteId ? noteId : state.activeNote;
      const body = state.notes.find(note => note.id == id).body;
      return removeMd(body.substring(0,20));
    }
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
    },
    SET_DELETING(state, deleting){
      state.deleting = deleting;
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
