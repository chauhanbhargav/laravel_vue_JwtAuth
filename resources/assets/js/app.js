import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App.vue';
import Dashboard from '../components/Dashboard.vue';
import Home from '../components/Home.vue';
import Register from '../components/Register.vue';
import Signin from '../components/Signin.vue';
import VueSession from 'vue-session';

Vue.use(VueRouter);
Vue.use(VueSession);

export default Vue;

export var router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Signin
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
});