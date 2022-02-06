<template>
    <form-helper>

      <div slot="form-header">
        <h3>Second form - Login</h3>
        <p>This is some info about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>

    </form-helper>
</template>

<script>
import FormHelper from './FormHelper.vue';

export default {
    components: {
      'form-helper': FormHelper
    },
    data () {
        return {
        }
    },
    methods: {
      handleSubmit: function() {
        
      }
    }
}
</script>

<style scoped>
    
</style>