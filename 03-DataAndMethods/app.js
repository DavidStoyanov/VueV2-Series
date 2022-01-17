new Vue({
    el: '#app',
    data: {
        name: 'John',
        job: 'Bus Driver'
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}!`
        }
    }
})