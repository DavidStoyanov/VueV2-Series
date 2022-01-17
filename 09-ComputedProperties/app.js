new Vue({
    el: '#app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        /* agePlusA: function() {
            console.log('agePlusA')
            return this.age + this.a
        },
        agePlusB: function() {
            console.log('agePlusB')
            return this.age + this.b
        } */
    },
    computed: {
        agePlusA: function() {
            console.log('agePlusA')
            return this.age + this.a
        },
        agePlusB: function() {
            console.log('agePlusB')
            return this.age + this.b
        }
    }
})