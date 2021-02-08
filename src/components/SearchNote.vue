<template>
    <div>
        <input 
            v-model="searchTerm"
            type="search" 
            placeholder="Search notes"
            class="w-full p-2 | border-2 rounded-md"
        />
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'SearchNote',
    setup(){
        const store = useStore();
        const searchTerm = computed({
            get: () => store.state.searchTerm,
            set: value => store.commit("SET_SEARCH_TERM", value)
        });

        return {
            searchTerm

        }
    }
}
</script>

<style>

</style>