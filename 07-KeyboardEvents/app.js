new Vue({
    el: '#app',
    data: {
        bgColor: 'red',
        colors: ['red', 'blue', 'green']
    },
    methods: {
        randomColor: function(event) {
            const randomNumber = Math.ceil(Math.random() * this.colors.length - 1);
            const randomColor = this.colors[randomNumber];
            console.log(randomColor);
            this.bgColor = randomColor;
        },
        printMessageToConsole: function() {
            console.log('keyboard events');
        }
    }
})