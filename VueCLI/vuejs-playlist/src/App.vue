<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "First Vue title"
    }
  },
  methods: {
    greeting: function() {
      return 'hello there'
    }
  }
}
</script>

<style>

</style>
