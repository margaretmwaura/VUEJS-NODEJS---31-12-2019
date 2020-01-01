import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import CreateItem from './component/CreateItem.vue';
const routes = [
    {
        name: 'CreateItem',
        path: '/',
        component: CreateItem
    }
];
const router = new VueRouter({

    mode: 'history',routes: routes
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
