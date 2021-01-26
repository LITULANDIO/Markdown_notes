<template>
  <article 
    @click="setActiveNote">
      {{ title }}
  </article>
</template>

<script>
import { computed } from 'vue';
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
        const removeMd = require("remove-markdown");
        const title = computed(() => removeMd(props.note.body.substring(0, 20)))
        const setActiveNote = () => store.commit("SET_ACTIVE_NOTE", props.note.id);


        return {
            title,
            setActiveNote
        }

    }

}
</script>

<style>

</style>