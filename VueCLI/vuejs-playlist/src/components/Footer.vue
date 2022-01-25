<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'Copyright 2022 Vue App. All rights reserved.'
    }
  }
}
</script>

<style scoped>
  footer {
    background: rgb(39, 44, 39);
    padding: 1.5rem;
  }

  p {
    color: #FFF;
    text-align: center;
    text-decoration: underline;
  }
  
</style>
