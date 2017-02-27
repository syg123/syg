// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./router.js";
import App from './App';
import vueResource from "vue-resource";
Vue.use(VueRouter)
const router = new VueRouter({
	mode:"history",
	routes
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
