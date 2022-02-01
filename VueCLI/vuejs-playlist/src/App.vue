<template>
  <div id="app">
    
    <app-header v-bind:appTitle="appTitle"></app-header>
    
    <main>

      <ninjas 
        v-bind:header="listOfPeopleHeader"
        v-bind:ninjas="listOfPeople"
        v-on:changeHeader="updateAppHeader($event)">
      </ninjas>

      <hr>

      <ninjas 
        v-bind:header="listOfPeopleHeader"
        v-bind:ninjas="listOfPeople"
        v-on:changeHeader="updateAppHeader($event)">
      </ninjas>

    </main>

    <app-footer v-bind:appTitle="appTitle"></app-footer>

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
      appTitle: 'Vue App',
      listOfPeopleHeader: "Ninjas",
      listOfPeople: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
    }
  },
  methods: {
    updateAppHeader: function(header) {
      this.listOfPeopleHeader = header;
    }
  },
  beforeCreate() {
    alert('beforeCreate')
  },
  created() {
    alert('created')
  },
  beforeMount() {
    alert('beforeMount')
  },
  mounted() {
    alert('mounted')
  },
  beforeUpdate() {
    alert('beforeCreate')
  },
  updated() {
    alert('beforeCreate')
  },
  
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
