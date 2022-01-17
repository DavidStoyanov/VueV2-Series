new Vue({
    el: '#app',
    data: {
        health: 100,
        running: true,
        hits: 0,
        bestScore: null
    },
    methods: {
        punch: function() {
            if(!this.running) return;

            this.health -= this.getRandomInt();
            this.hits++;

            if (this.health <= 0) {
                this.health = 0;
                this.running = false;

                const noScore = this.bestScore == undefined || this.bestScore == null 
                if (this.bestScore > this.hits || noScore) {
                    this.bestScore = this.hits; 
                }
            }
        },
        restart: function() {
            this.health = 100;
            this.running = true;
            this.hits = 0;
        },
        getRandomInt: function (min = 5, max = 15) {
            return min + Math.round(Math.random() * (max - min));
        }
    },
    computed: {
        isDisabled: function () {
            return !this.running;
        },
        getHealthPercentage: function() {
            return (this.health / 100).toFixed(1);
        }
    }
})