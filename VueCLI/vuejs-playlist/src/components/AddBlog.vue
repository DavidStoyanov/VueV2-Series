<template>
  <div id="add_blog">
    
    <h2>Add a new Blog Post</h2>
    <form action="">
      <label for="">Blog Title:</label>
      <input v-model.lazy="blog.title" type="text" required>
      <label for="">Blog Content:</label>
      <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10"></textarea>
      <div id="check_boxes">
        <div>
          <label for="">Addon 1</label>
          <input type="checkbox" value="addon1" v-model="blog.addons">
        </div>
        <div>
          <label for="">Addon 2</label>
          <input type="checkbox" value="addon2" v-model="blog.addons">
        </div>
        <div>
          <label for="">Addon 3</label>
          <input type="checkbox" value="addon3" v-model="blog.addons">
        </div>
      </div>
    </form>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Addons: {{ addonsToString }}</p>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        addons: []
      }
    }
  },
  methods: {
    
  },
  computed: {
    addonsToString() {
      // another approach is v-for directive using it with <ul></ul> 
      // return this.blog.addons.join(", ");

      // return in case of 0 addons
      if (this.blog.addons.length == 0)  return "";

      // Always keep the sequence of addons by number
      const addons = ['addon1', 'addon2', 'addon3'];
      return addons.filter(x => this.blog.addons.includes(x))
                      .reduce((a, b) => a + ", " + b);
    }
  }
};
</script>

<style scoped>
#add_blog *{
    box-sizing: border-box;
}
#add_blog{
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

#check_boxes {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
#check_boxes > div {

}
#check_boxes > div > label,
#check_boxes > div > label {
  display: inline-block;
}
#check_boxes > div > label {
  margin-right: 0.3rem;
}


</style>
