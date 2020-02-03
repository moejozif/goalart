/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import profile from './components/profile.vue';
import projects from './components/projects.vue';
import tasks from './components/tasks.vue';
import dashboard from './components/dashboard.vue';
Vue.use(VueRouter)
// const profile={ template: '<div>profile</div>' }
// const page={ template: '<div>page</div>' }
let routes = [
    { path: '/profile', component: profile},
    { path: '/projects', component: projects},
    { path: '/tasks', component: tasks},
    { path: '/dashboard', component: dashboard},
]
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
   
// }).$mount('#app') 
el: '#app',
router
});
