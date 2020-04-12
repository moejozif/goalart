/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import profile from './components/profile.vue';
import users from './components/users.vue';
import projects from './components/projects.vue';
import tasks from './components/tasks.vue';
import dashboard from './components/dashboard.vue';
import orders from './components/orders.vue';
import warehouses from './components/warehouses.vue';
import { Form, HasError, AlertError } from 'vform'
import Swal from 'sweetalert2'
import VueProgressBar from 'vue-progressbar'
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.use(VueRouter)




const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Form=Form
window.toast = Toast
window.Swal = Swal
window.fire=new Vue()
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
let routes = [
    { path: '/profile', component: profile},
    { path: '/users', component: users},
    { path: '/projects', component: projects},
    { path: '/tasks', component: tasks},
    { path: '/dashboard', component: dashboard},
    { path: '/warehouses', component: warehouses},
    { path: '/orders', component: orders},
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
