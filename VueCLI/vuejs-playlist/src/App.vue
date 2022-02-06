<template>
  <div id="app">

    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>

    <button v-on:click="switchFrom()">Switch Form</button>

  </div>
</template>

<script>
import FormOne from './components/FormOne.vue';
import FormTwo from './components/FormTwo.vue';

export default {
  components: {
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {
      component: "form-one"
    }
  },
  methods: {
    handleSubmit: function() {
      
    },
    switchFrom: function() {
      this.component = this.component === "form-one"
        ? "form-two" : "form-one"
    }
  },
  computed: {
    
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #app > * {
    display: block;
    width: 100%;
  }

  button {
    max-width: 10rem;
    align-self: center;
  }
</style>
