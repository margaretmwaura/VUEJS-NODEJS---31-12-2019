import Vue from 'vue';
import App from './App.vue';
import  store  from '../store';
import VueRouter from 'vue-router';
import Posting from './components/Posting.vue';
import First from './components/First.vue';
import Signup from './components/Signup.vue'
import Notifications from 'vue-notification'
Vue.use(Notifications);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import VueAxios from 'vue-axios';
import axios from 'axios';


const routes = [
    {
        name : 'First',
        path: '/post',
        component: First,
    },
    {
        name : 'Posting',
        path: '/first',
        component: Posting,

    },
    {
        name : 'Signup',
        path: '/signup',
        component: Signup,

    },
];
const router = new VueRouter({

    mode: 'history',
    routes: routes
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

