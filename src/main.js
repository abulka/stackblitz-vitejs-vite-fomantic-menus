
// Normal Bootup

// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')





// Router based boot up

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
// import VueRouter from "vue-router"; NO LONGER CAN DO - NO DEFAULT EXPORT
// import Vue from ...  NO LONGER
import './style.css'
import App from './App.vue'
import Foamy from './components/Foamy.vue'

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home - this is the home content 🏠</div>' }
const About = { template: `<div>About</div>` }
// const Foamy = { component: () => import('./components/Foamy.vue') }. // DOESN'T WORK?
// const Foamy = { template: '<div>👽 - this is FOAMY</div>' } // WORKS

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/foamy', component: Foamy },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// const app = createApp({})
const app = createApp(App)  // <----- had to pass in the root component

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
