Vue.component('greeting', {
    template: `
    <div>
        <h4>Greeting from reusable component, {{ this.name }} too....</h4>
        <button v-on:click="changeName">Change greeting template name</button>
    </div>
    `,
    data: function () {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Toshu';
        }
    }
})

Vue.component('change-name', {
    template: '<h1>HI!!!</h1>'
})

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

