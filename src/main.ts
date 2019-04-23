import Vue from 'vue';
import ToDo from './ToDo_ts.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(ToDo),
}).$mount('#app');
