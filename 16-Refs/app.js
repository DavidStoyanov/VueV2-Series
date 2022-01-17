const app1 = new Vue({
    el: '#app',
    data: {
        username: ''
    },
    methods: {
        keyPress: function() {
            this.username = this.$refs.username.value
        }
    },
    computed: {
        
    }
})