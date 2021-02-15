import { createStore } from "vuex";
import { auth, firebase } from "../firebase";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
    deleting: false,
    searchTerm: "",
    user: null
  },
  getters: {
    getNoteById: state => noteId => state.notes.find(note => note.id === noteId),
    getNoteTitle: state => noteId =>{
      const removeMd = require("remove-markdown");
      const id = noteId ? noteId : state.activeNote;
      const body = state.notes.find(note => note.id == id).body;
      return removeMd(body.substring(0,20));
    },
    getNotesBySearchTerm: state =>{
      let filter = new RegExp(state.searchTerm, "i");
      return state.notes.filter(note => note.body.match(filter));
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
    },
    SET_SEARCH_TERM(state, searchTerm){
      state.searchTerm = searchTerm;
    },
    SET_USER(state, user){
      state.user = user;
    }
  },
  actions: {
    createNote({ commit }){
      const note = { body: "", id: Date.now()};
      commit('CREATE_NOTE', note);
      commit('SET_ACTIVE_NOTE', note.id)
    },
    async userLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();
      try{
        await auth.signInWithPopup(provider);
      }catch(error){
        throw new Error(error.message)
      }
    },
    async userLogout(){
      try{
        await auth.signOut();
      }catch(error){
        throw new Error(error.message)
      }
    },
    checkAuth({ commit }){
      auth.onAuthStateChanged(user => commit("SET_USER", user));
    }
  },
  modules: {}
});
