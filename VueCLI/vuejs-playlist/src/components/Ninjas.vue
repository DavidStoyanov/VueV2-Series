<template>
  <div id="ninjas">
    <h1 v-on:click="changeNinjaHeader">{{ header }}</h1>
    <ul>
      <li v-for="ninja in ninjas" v-bind:key="ninja.name" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
        <div>
          <button v-on:click="deleteNinja(ninja)">Delete</button>
        </div>
      </li>
    </ul>
    <button v-on:click="deleteFirst">Delete First</button>
    <button v-on:click="deleteLast">Delete Last</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      header: "Ninjas"
    }
  },
  methods: {
    deleteFirst: function() {
      this.ninjas.shift();
    },
    deleteLast: function() {
      this.ninjas.pop();
    },
    deleteNinja: function(item) {
      const index = this.ninjas.indexOf(item);
      if (index !== -1) {
        this.ninjas.splice(index, 1);
      }
    },
    changeNinjaHeader: function() {
      this.header = "New Ninja's Header"
    }
  }
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
