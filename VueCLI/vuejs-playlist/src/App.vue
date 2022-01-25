<template>
  <div id="app">
    
    <app-header></app-header>
    
    <main>
      <ninjas></ninjas>
    </main>
    
    <app-footer></app-footer>

  </div>
</template>

<script>
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    'ninjas': Ninjas
  },
  data() {
    return {
      
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

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100vh;
  }

  #app > main {
    flex-grow: 1;
  }

</style>
