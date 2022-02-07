<template>
  <div id="add_blog">
    
    <h2>Add a new Blog Post</h2>
    <form action="">
      <label for="">Blog Title:</label>
      <input v-model.lazy="blog.title" type="text" required>
      <label for="">Blog Content:</label>
      <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10"></textarea>
    </form>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    }
  },
  methods: {
    
  },
  computed: {

  }
};
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>
