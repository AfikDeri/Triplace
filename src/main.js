import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import {store} from './store';


Vue.config.productionTip = false

window.eventBus = new Vue({});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
