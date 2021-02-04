<template>
  <article 
    @click="setActiveNote">
      {{ title }} 
  </article>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'NoteListItem',
    props:{
        note:{
            type: Object,
            required: true
        }

    },
    setup(props){
        const store = useStore();
        const setActiveNote = () => store.commit("SET_ACTIVE_NOTE", props.note.id);
        const title = ref(store.getters.getNoteTitle(props.note.id));

        return {
            title,
            setActiveNote
        }

    }

}
</script>

<style>

</style>