import Vue from 'vue';
import App from './App.vue';
import router from "./route";
import VueRouter from 'vue-router';
import VueResource from "vue-resource";
import Login from './components/Login.vue';
import Example from './components/Example.vue';

Vue.config.productionTip = false;

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});