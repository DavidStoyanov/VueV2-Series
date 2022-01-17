new Vue({
    el: '#app',
    data: {
        available: false,
        nearby: false
    },
    methods: {
        
    },
    computed: {
        taxiClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})