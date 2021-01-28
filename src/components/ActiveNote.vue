<template>
    <div v-if="activeNote" class="h-full | flex flex-col">
        <div class="flex flex-1">
            <section class="flex-1">
                <textarea 
                    v-if="activeNote" 
                    :value="activeNote.body"
                    @input="updateNote"
                    class="w-full h-full p-3 | bg-gray-200">
                </textarea>
            </section>
            <ActiveNoteHTML 
                :body="activeNote.body" 
                class="p-3 | bg-gray-900 text-white | flex-1"
            />
        </div>
        <section class="mt-3 | flex justify-end">
            <a href="#" @click="closeNote" class="bg-gray-200 py-1 px-3 rounded-xl">Close note</a>
        </section>
    </div>
    <div v-else class="h-full | flex justify-center items-center">Please select a note to start editing</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ActiveNoteHTML from './ActiveNoteHTML.vue';

export default {
    name: 'ActiveNote',
    components:{
        ActiveNoteHTML
    },
    setup(){
        const store = useStore();
        const activeNote = computed(() => {
          return store.state.activeNote? store.getters.getNoteById(store.state.activeNote) :null;
        });
        const updateNote = $event => store.commit('UPDATE_NOTE', {id: activeNote.value.id, body: $event.target.value})
        const closeNote = () => store.commit('SET_ACTIVE_NOTE');

        return{
        activeNote,
        updateNote,
        closeNote,
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

