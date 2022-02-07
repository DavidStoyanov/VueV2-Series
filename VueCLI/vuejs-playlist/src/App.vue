<template>
  <div id="app">
    
    <add-blog></add-blog>

  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";

export default {
  components: {
    'add-blog': AddBlog
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {

  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  margin: 4rem;
}

</style>
