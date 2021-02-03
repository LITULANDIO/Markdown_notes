<template>
    <div v-if="activeNote" class="h-full | flex flex-col">
        <div class="flex flex-1">
            <section class="flex-1">
                <ActiveNoteMD 
                    v-model:body="activeNote.body"
                    @blur-note="blurNote"
                />
            </section>
            <ActiveNoteHTML 
                :body="activeNote.body" 
                class="p-3 | bg-gray-900 text-white | flex-1"
            />
        </div>
        <section class="mt-3 | flex justify-end">
            <a href="#" @click="closeNote" class="py-1 px-3 | bg-gray-200 | rounded-xl">Close note</a>

            <a href="#" @click="deleteNote" class="py-1 px-3 | text-red-700 | rounded-xl shadow-2xl">Delete note</a>

        </section>
    </div>
    <div 
        v-else 
        class="h-full | flex justify-center items-center"
        >Please select a note to start editing or&nbsp; 
        <a @click="createNote"
           class="font-bold underline" href="#"> creating note</a>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ActiveNoteHTML from './ActiveNoteHTML.vue';
import ActiveNoteMD from './ActiveNoteMD.vue';

export default {
    name: 'ActiveNote',
    components:{
        ActiveNoteHTML,
        ActiveNoteMD
    },
    setup(){
        const store = useStore();
        const activeNote = computed(() => {
          return store.state.activeNote? store.getters.getNoteById(store.state.activeNote) :null;
        });
        const updateNote = $event => store.commit('UPDATE_NOTE', {id: activeNote.value.id, body: $event.target.value})
        const closeNote = () => store.commit('SET_ACTIVE_NOTE');
        const createNote = () => store.dispatch('createNote');
        const deleteNote = () => store.commit('DELETE_NOTE');
        const blurNote = (value) => !value.length && deleteNote();

        return{
        activeNote,
        updateNote,
        closeNote,
        createNote,
        deleteNote,
        blurNote
        // alternativa
        //     activeNote: computed(() =>
        //          store.state.activeNote
        //      ? store.getters.getNoteById(store.state.activeNote).body
        //      : null
        //      )
        }
    }

}
</script>

