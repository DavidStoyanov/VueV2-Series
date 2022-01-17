new Vue({
    el: '#app',
    data: {
        name: 'John',
        age: 30,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}!`
        },

        profile: function () {
            return `${this.name} is ${this.age} years old.`
        },

        ageUp: function(years) {
            this.age += years;
        },
        ageDown: function(years) {
            this.age -= years;
        },

        click: function() {
            alert('disabled')
        }
    }
})