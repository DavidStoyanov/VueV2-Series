<template>
  <div>
    <h1>{{ title }}</h1> 
    <items></items>
  </div>
</template>

<script>
import Items from './Items.vue'

export default {
  components: {
    'items': Items
  },
  data() {
    return {
      title: "Vue App"
    }
  }
}
</script>

<style>

</style>
