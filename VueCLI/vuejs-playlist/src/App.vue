<template>
  <div id="app">
    
    <form-helper>

      <div slot="form-header">
        <h3>This is the title of a form</h3>
        <p>This is some info about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>

    </form-helper>

  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue';

export default {
  components: {
    'form-helper': FormHelper
    },
  data() {
    
  },
  methods: {
    handleSubmit: function() {
      
    }
  }
  
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
 
</style>
