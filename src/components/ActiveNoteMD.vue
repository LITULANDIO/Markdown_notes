<template>
    <textarea 
        ref="textarea"
        :value="body"
        @input="$emit('update:body', $event.target.value)"
        class="w-full h-full p-3 | bg-gray-200">
    </textarea>
</template>

<script>
import { ref, onMounted, onUptader, onUpdated } from 'vue';
export default {
    name: 'ActiveNoteMD',
    props:{
        body:{
            type: String,
            required: true
        }
    },
    emits:['update:body'],
    setup(){
        const textarea = ref(null);
        const focusTextarea = () => textarea.value.focus();
        onMounted(focusTextarea);
        onUpdated(focusTextarea);

        return { 
            textarea
        }
    }

}
</script>

