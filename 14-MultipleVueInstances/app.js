const app1 = new Vue({
    el: '#vue_app_one',
    data: {
        title: 'Vue app one'
    },
    methods: {
        
    },
    computed: {
        greed: function() {
            return 'Hello from app one'
        }
    }
})

const app2 = new Vue({
    el: '#vue_app_two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle: function() {
            app1.title = 'Title Changed!'
        }
    },
    computed: {
        greed: function() {
            return 'This is app two'
        }
    }
})