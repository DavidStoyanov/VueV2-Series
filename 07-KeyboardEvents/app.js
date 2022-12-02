new Vue({
    el: '#app',
    data: {
        bgColor: 'red',
        colors: ['red', 'blue', 'green']
    },
    methods: {
        setRandomColor: function() {
            while(true) {
                let newColor = this.getRandomColor();
                if (newColor === this.bgColor) continue;
                else this.bgColor = newColor; break;
            }
        },
        getRandomColor: function(event) {
            const randomNumber = Math.ceil(Math.random() * this.colors.length - 1);
            const randomColor = this.colors[randomNumber];
            console.log(randomColor);
            return randomColor;
        },
        printMessageToConsole: function() {
            console.log('keyboard events');
        }
    }
})