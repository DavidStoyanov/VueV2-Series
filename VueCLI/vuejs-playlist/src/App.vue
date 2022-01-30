<template>
  <div id="app">
    
    <app-header></app-header>
    
    <main>
      <ninjas v-bind:ninjas="listOfPeople"></ninjas>
      <hr>
      <ninjas v-bind:ninjas="listOfPeople"></ninjas>
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
      listOfPeople: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
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
