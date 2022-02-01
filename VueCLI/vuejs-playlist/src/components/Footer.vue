<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    appTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: this.appTitle
    }
  },
  created() {
    bus.$on('changeTitle', (data) => {
      this.title = data;
    });
  },
  computed: {
    copyright: function() {
      let title = this.title;
      if (title == undefined || title == null) {
        title = '';
      } else {
        title = ' ' + title;
      }

      return `Copyright 2022${title}. All rights reserved.`;
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
