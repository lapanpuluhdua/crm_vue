/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue').default;

// import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router/index';
import store from './store/index';

import ViewUI from 'view-design';
import locale from 'view-design/dist/locale/en-US';
import 'view-design/dist/styles/iview.css';

import asset from './mixins/asset';
import common from './common';

import App from './layouts/App.vue';
import { mapState, mapGetters } from "vuex";
import moment from 'moment';
import VueApexCharts from 'vue-apexcharts'



Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

Vue.use(VueRouter);
Vue.use(ViewUI, { locale });


Vue.mixin(asset);
Vue.mixin(common);

Vue.mixin({
    computed: {
        ...mapState("auth", {
            $user: "user"
        }),

        ...mapGetters("auth", {
            $can: "can",
            $role: "role",
        })
    }
});

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});
 Vue.directive('can', function (el, binding) {
  return Laravel.permissions.indexOf(binding) !== -1;
})
// Vue Router Nagivation Guard
function isLoggedIn() {
    return (store.getters['auth/getToken'] != 'null' && store.getters['auth/getToken'] != null) ? true : false;
}


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    }else if (to.matched.some(record => record.meta.requiresVisitor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                name: 'dashboard',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})


// check authentication
let token = localStorage.getItem("token");

if(token != 'null' && token != null){
	store.dispatch('auth/me').then(() => {
		const app = new Vue({
		    el: '#app',
		    router,
		    store,
		    components: { App }
		});
	});
}else{
	const app = new Vue({
	    el: '#app',
	    router,
	    store,
	    components: { App }
	});
}

// axios.defaults.headers.common = {
//     'X-CSRF-TOKEN': window.csrf_token,
//     'X-Requested-With': 'XMLHttpRequest',
// };

// window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     router
// });
