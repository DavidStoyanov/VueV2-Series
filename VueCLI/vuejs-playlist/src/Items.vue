<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ['Bag', 'Shoes', 'Bow']
    }
  }
}
</script>

<style scoped>
  * {
    color: crimson
  }
</style>
