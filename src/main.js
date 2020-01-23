import Vue from '../web_modules/vue/dist/vue.esm.browser.js';
import httpVueLoader from '../web_modules/http-vue-loader.js';

new Vue({
  el: '#app',

  components: {
    's-main': httpVueLoader('/src/components/main.vue'),
  },

  data: () => ({
    helloWorld: 'Hello World',
  }),
});
