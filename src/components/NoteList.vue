<template>
    <div>
        <NoteListItem v-for="note in notes" :key="note.id" :note="note" />
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NoteListItem from '@/components/NoteListItem.vue';
export default {
    name: 'NoteList',
    components:{
        NoteListItem
    },
    setup(){
        const store = useStore();
        const notes = computed(() => store.state.notes);


        return {
            notes
        }
    }

}
</script>

<style>

</style>