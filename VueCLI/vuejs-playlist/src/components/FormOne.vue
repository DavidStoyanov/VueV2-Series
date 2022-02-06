<template>
    <form-helper>

      <div slot="form-header">
        <h3>First form - Message</h3>
        <p>This is some info about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label>Your Message:</label>
        <textarea></textarea>
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
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
    label, textarea {
        display: block;
    }
    
    textarea {
        height: 10pc;
    }
</style>