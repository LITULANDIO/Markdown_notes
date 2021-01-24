<template>
<div class="dev | container | p-3 my-3 mx-auto | flex">
  <!-- Left side -->
  <section class="dev | p-3 mr-3">
    <p>Search</p>

  <!-- Note list -->
    <p>Note list</p>
  </section>

  <!-- Right side -->
  <section class="dev | p-3 | flex-grow">

  <!-- Active note -->
    <p>Active note</p>
  </section>
</div>
</template>

<script>
//import { useStore} from 'vuex';
//import { ref, computed } from 'vue';

export default {
  name: "App",
  components: {
  },
  setup(){


    return {  }
  }
};
</script>

<style>
.dev{
  border: 1px solid red;
}
</style>
