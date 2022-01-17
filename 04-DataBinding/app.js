new Vue({
    el: '#app',
    data: {
        website: 'https://vuejs.org/',
        text: 'some text here...'
    },
    methods: {
        getWebsiteTag: function(url) {
            return `<a href="${url}">VueJs</a>`;
        }
    }
})