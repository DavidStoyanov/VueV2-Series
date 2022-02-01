import Vue from 'vue'
import App from './App.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);


export const bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
